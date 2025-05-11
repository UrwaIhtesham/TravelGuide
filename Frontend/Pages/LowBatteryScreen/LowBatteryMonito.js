import React from "react";
import { View, Text, Button } from "react-native";

export default function LowBatteryScreen({ navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
      🔋 Battery is critically low! Sending alert to emergency Contacts!!!
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}