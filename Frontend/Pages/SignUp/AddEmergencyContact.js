import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../SVG/Backbutton";

const AddEmergencyContact = () => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("../../assets/Fonts/Poppins-Bold.ttf"),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  const addContactAPI = async () => {
    if (!fullName || !email || !phone || !cnic) {
      Alert.alert("Validation Error", "Please fill all fields.");
      return false;
    }

    try {
      setLoading(true);
      const response = await fetch("http://192.168.1.3:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          phone: phone,
          avatar: " ",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        return true;
      } else {
        Alert.alert("Error", result.error || "Failed to add contact.");
        return false;
      }
    } catch (error) {
      console.error("Error adding contact:", error);
      Alert.alert("Network Error", "Could not connect to server.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleAddMore = async () => {
    const success = await addContactAPI();
    if (success) {
      // Clear form only, stay on same screen
      setFullName("");
      setEmail("");
      setPhone("");
      setCnic("");
    }
  };

  const handleDone = async () => {
    const success = await addContactAPI();
    if (success) {
      // Navigate back to Emergency Contact screen
      navigation.navigate("HomeScreen"); // or use navigation.navigate("EmergencyContact")
    }
  };

  if (!fontLoaded || loading) {
    return <ActivityIndicator size="large" color="#E3F2FD" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerText}>Emergency Contact</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          placeholderTextColor="#B0BEC5"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#B0BEC5"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="#B0BEC5"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter CNIC"
          placeholderTextColor="#B0BEC5"
          value={cnic}
          onChangeText={setCnic}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddMore}>
          <Text style={styles.buttonText}>Add more Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupbutton} onPress={handleDone}>
          <Text style={styles.signupbuttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 80,
  },
  headerText: {
    color: "#E3F2FD",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 35,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFFFFF10",
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    color: "#FFFFFF",
  },
  button: {
    width: "80%",
    backgroundColor: "#0E64D280",
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signupbutton: {
    width: "80%",
    backgroundColor: "#0E64D2",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  signupbuttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default AddEmergencyContact;
