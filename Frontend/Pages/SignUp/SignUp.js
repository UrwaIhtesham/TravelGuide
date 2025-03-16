import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ActivityIndicator, ScrollView, Touchable, TouchableOpacity, TextInput, Pressable, Platform, Alert } from "react-native";
import SignUpSVG from "../../SVG/SignUp";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";
//import DatePicker from "react-native-datepicker";
//import DatePicker from "expo-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker"
//import { Platform } from "react-native";

const SignUp = () => {
    const {width,height} = Dimensions.get('window');
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();
    const [date_of_birth, setDateOfBirth] = useState("");
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [show, setShow] = useState(false);

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        CNIC: "",
        gender: "",
        date_of_birth: "",
        password: "",
    });

    const toggleDatePicker = () => {
        console.log("Date picker toggled");
        setShowPicker(!showPicker);
    };

    const onChange = (event, selectDate) => {
        console.log("onChange triggered", event, selectDate);
        if (event.type === "set" && selectDate) {
            const formattedDate = selectDate.toISOString().split("T")[0];
            console.log("Formatted Date:", formattedDate);
            setDate(selectDate);
            setDateOfBirth(formattedDate);
            handleChange("date_of_birth", formattedDate);
        }
        setShowPicker(false);
    };

    // const onChange = (event, selectedDate) => {
    //     if (selectedDate) {
    //         setDate(selectedDate);
    //         handleChange("date_of_birth", selectedDate.toISOString().split('T')[0]);
    //     }
    //     setShow(false);
    // };

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value});
    };

    const handleSignUp = async() => {
        try {
            const response = await axios.post("http://192.168.10.13:8000/api/signup/", form);
            console.log("Response data:", response.data);

            if (response.data.message) {
                console.log("Success Message:", response.data.message);
            }
            Alert.alert("Success", response.data.message || "Account Created Successfully");
            navigation.navigate('HomeScreen');
        } catch (error) {
            if (error.response){
                console.log("Error Response Data:", error.response.data);

                if (typeof error.response.data === "object") {
                    Object.keys(error.response.data).forEach(key => {
                        console.log(`${key}: ${error.response.data[key]}`);
                    });
                }

                Alert.alert("Error", error.response.data.message || "Signup failed. Check your details and try again.");
            } else {
                console.log("Signup request failed:", error);
                Alert.alert("Error", "Something went wrong. Please try again.")
            }
            
        }
    };

    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'Poppins': require('../../assets/Fonts/Poppins-Bold.ttf'),
            });
            setFontLoaded(true);
        };

        loadFont();
    }, []);

    if (!fontLoaded){
        return <ActivityIndicator size="large" color="#E3F2FD" />
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.img}>
                <SignUpSVG />
            </View>

            <Text style={styles.headerText}>Create an account</Text>

            <TextInput style={styles.input} placeholder="Enter Your Username" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("full_name", text)}/>
            <TextInput style={styles.input} placeholder="Enter Your Email" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("email", text)} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Enter Your Phone Number" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("phone_number", text)} keyboardType="phone-pad"/>
            <TextInput style={styles.input} placeholder="Enter Your CNIC" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("CNIC", text)} keyboardType="numeric"/>
            {/*<TextInput style={styles.input} placeholder="Enter Gender" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("gender", text)}/>*/}
            <View style={styles.input}>
                <RNPickerSelect
                    onValueChange={(value) => handleChange("gender", value)}
                    items={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                        { label: "Other", value: "Other" }
                    ]}
                    placeholder={{ label: "Select Gender", value: null }}
                    style={styles.input}
                />
            </View>
            {/*<TextInput style={styles.input} placeholder="Enter Date of Birth" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("date_of_birth", text)}/>*/}
            {/* <View style={styles.input}>
                <Text style={styles.label}>Select Date of Birth</Text>
                <DatePicker 
                    date={date} 
                    onDateChange={(selectedDate) => {
                        setDate(selectedDate || new Date());
                        handleChange("date_of_birth", selectedDate?.toISOString().split('T')[0]); // Properly store date
                    }}
                    mode="date" 
                />
            </View> */}
            <View style={styles.input}>
                
                {showPicker && (
                <DateTimePicker
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChange}
                />
                )}
                {!showPicker && (
                    <Pressable
                    onPress={toggleDatePicker}
                >
                <TextInput
                style={styles.input}
                placeholder="Select Date of Birth"
                value= {date_of_birth}
                onChangeText={setDateOfBirth}
                placeholderTextColor="#B0BEC5"
                editable={false}
                />
                </Pressable>
                )}
            </View>
            <TextInput style={styles.input} placeholder="Enter Your Password" placeholderTextColor="#B0BEC5" secureTextEntry
                onChangeText={(text) => handleChange("password", text)}/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddEmergencyContact')}>
                <Text style={styles.buttonText}>Add Emergency Contacts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupbutton} onPress={handleSignUp}>
                <Text style={styles.signupbuttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Already have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        backgroundColor: '#0D1117',
        padding: 20,
    },
    img:{
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#E3F2FD',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#1C1C1E',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: '#E3F2FD',
    },
    button: {
        backgroundColor: '#0E64D280',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    signupbutton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    signupbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    footerText: {
        color: '#B0BEC5',
        textAlign: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#B0BEC5',
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'white',
        backgroundColor: '#1C1C1E',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'white',
        backgroundColor: '#1C1C1E',
        paddingRight: 30,
    },
});


export default SignUp;