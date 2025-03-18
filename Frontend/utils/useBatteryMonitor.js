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
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkBattery = async () => {
      if (hasTriggered) return;

      const level = await Battery.getBatteryLevelAsync();
      const batteryPercentage = level * 100;

      if (isMounted) {
        setBatteryLevel(batteryPercentage);

        if (batteryPercentage <= 10 && !hasTriggered) {
          showLowBatteryNotification();
          navigation.navigate("LowBatteryScreen");
          setHasTriggered(true); // Prevent further triggers
        }
      }
    };

    const batteryListener = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => {
        if (hasTriggered) return;

        const batteryPercentage = batteryLevel * 100;
        setBatteryLevel(batteryPercentage);

        if (batteryPercentage <= 10 && !hasTriggered) {
          showLowBatteryNotification();
          navigation.navigate("LowBatteryScreen");
          setHasTriggered(true);
        }
      }
    );

    checkBattery();

    return () => {
      isMounted = false;
      batteryListener.remove();
    };
  }, [navigation, hasTriggered]);

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
