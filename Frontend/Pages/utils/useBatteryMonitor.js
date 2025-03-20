import React, { useEffect, useState } from "react";
import * as Battery from "expo-battery";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";

const TASK_NAME = "BACKGROUND_BATTERY_MONITOR";

const checkBattery = async () => {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    console.log("Battery Level: ", batteryLevel * 100);
  
    if (batteryLevel * 100 <= 10) {
      console.log("Battery below 10%! Sending emergency alert...");
  
      const storedUserId = await AsyncStorage.getItem("user_id");
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
  
      const location = await Location.getCurrentPositionAsync({});
  
      const data = {
        user_id: storedUserId,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
  
      try {
        await axios.post("http://192.168.10.13:8000/api/send-battery-alert/", data);
        console.log("Emergency contacts alerted.");
      } catch (error) {
        console.error("Error sending emergency alert:", error);
      }
  
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Low Battery Alert ⚡",
          body: "Your battery is below 10%. Emergency contacts alerted!",
        },
        trigger: null,
      });
    }
  };
  
  TaskManager.defineTask(TASK_NAME, async () => {
    await checkBattery();
    return BackgroundFetch.Result.NewData;
  });
  
  export async function registerBackgroundTask() {
    const status = await BackgroundFetch.getStatusAsync();
    if (status === BackgroundFetch.Status.Restricted || status === BackgroundFetch.Status.Denied) {
      console.log("Background fetch is disabled.");
      return;
    }
  
    const isRegistered = await TaskManager.isTaskRegisteredAsync(TASK_NAME);
    if (!isRegistered) {
      await BackgroundFetch.registerTaskAsync(TASK_NAME, {
        minimumInterval: 300, 
        stopOnTerminate: false,
        startOnBoot: true,
      });
      console.log("Background battery monitor registered!");
    }
  }
  
  export default function useBatteryMonitor() {
    useEffect(() => {
      console.log("Battery monitoring started...");
      registerBackgroundTask(); 
  
      const interval = setInterval(() => {
        console.log("Checking battery level...");
        checkBattery();
      }, 5 * 60 * 1000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return null;
  }