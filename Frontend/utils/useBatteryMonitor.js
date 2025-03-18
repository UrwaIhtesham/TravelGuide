// src/hooks/useBatteryMonitor.js
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function useBatteryMonitor(navigation) {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const checkBattery = async () => {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(level * 100);

      if (level * 100 <= 10) {
        showLowBatteryNotification();
        navigation.navigate("LowBatteryScreen");
      }
    };

    const batteryListener = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => {
        setBatteryLevel(batteryLevel * 100);

        if (batteryLevel * 100 <= 10) {
          showLowBatteryNotification();
          navigation.navigate("LowBatteryScreen");
        }
      }
    );

    checkBattery();

    return () => batteryListener.remove();
  }, [navigation]);

  const showLowBatteryNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Low Battery Alert ⚡",
        body: "Your battery is below 10%. Please charge your device!",
      },
      trigger: null,
    });
  };

  return batteryLevel;
}
