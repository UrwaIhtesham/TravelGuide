import React, {useEffect, useState, useRef} from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from "react-native";
import BackButton from "../../SVG/Backbutton";
import checkin from "../../SVG/FeaturesScreenIcons/CheckIn";
import CheckinSVG from "../../SVG/FeaturesScreenIcons/CheckIn";
import axios from "axios";

const CheckIn = () => {
    const navigation = useNavigation();
    const [rideCode, setRideCode ] = useState("1234");
    const [inputValues, setInputValues] = useState(["", "", "", ""]);

    
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    
    const handleTextChange = (text, index)=> {
        let newRideCode = rideCodeArray;
        newRideCode[index] = text;
        console.log(newRideCode);
        setRideCode(newRideCode.join(""));

        if (text && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleBackspace = (index) => {
        if (index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const verifyCode = async () => {
        const enteredCode = inputValues.join("");
        
        if (enteredCode === rideCode) {
            navigation.navigate("HomeScreen");
        } else {
            Alert.alert("Incorrect Code!", "An emergency alert has been sent.");
            sendEmergencyAlert();
        }
    };

    const sendEmergencyAlert = async () => {
        try {
            await axios.post("https://192.168.10.13:8000/api/send-checkin-alert", {
                message: "Emergency Alert! User failed to verify their ride.",
                userId: userid
            });
        } catch (error) {
            console.error("Error sending alert:", error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollcontainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Safety Check In</Text>
            </View>

            <View style={styles.img}>
                <CheckinSVG />
            </View>

            <Text style={styles.safetyText}>Enter a 4 digit secret pin code to verify your safety</Text>

            <View style={styles.codecontainer}>
                            {inputRefs.map((ref, index) => (
                                <TextInput
                                    key={index}
                                    style={styles.inputBox}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    ref={ref} 
                                    value={inputValues[index]}
                                    onChangeText={(text) => handleTextChange(text, index)}
                                    onKeyPress={({ nativeEvent }) => {
                                        if (nativeEvent.key === "Backspace" && !inputValues[index]) {
                                            handleBackspace(index);
                                        }
                                    }}
                                />
                            ))}                
            </View>

            <TouchableOpacity style={styles.submitbutton} onPress={verifyCode}>
                <Text style={styles.submitbuttonText}>Submit</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0D1117'
    }, 
    scrollcontainer: {
        backgroundColor: '#0D1117'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 50,
        marginBottom: 80,
    },
    headerText: {
        color: '#E3F2FD',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 35,
    },
    img:{
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    safetyText: {
        color: '#E3F2FD',
        textAlign: 'justify',
        marginTop: 40,
        fontSize: 20,
        marginLeft: 30,
        marginRight: 50
    },
    codecontainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 80,
        marginBottom: 50,
      },
    inputBox: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#1C2333',
        backgroundColor: '#1C2333',
        textAlign: 'center',
        marginHorizontal: 10,
        color: '#ffffff',
        fontSize: 24,
    },
    submitbutton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
    },
    submitbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },
});

export default CheckIn;