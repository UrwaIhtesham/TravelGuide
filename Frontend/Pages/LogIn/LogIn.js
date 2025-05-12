import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text, Dimensions, ScrollView, ToastAndroid, Platform } from "react-native";
import * as Font from 'expo-font';
import LogInIcon from "../../SVG/LoginPageIcons/LoginIcon";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function notifyMessage(msg) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        }
    }

    const validateInputs = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
        notifyMessage("Enter a valid email address.");
        return false;
    }

    const p = password.trim();

    if (p.length < 6) {
        notifyMessage("Password must be at least 6 characters long.");
        return false;
    }

    if (!/[A-Za-z]/.test(p)) {
        notifyMessage("Password must contain at least one letter.");
        return false;
    }

    if (!/\d/.test(p)) {
        notifyMessage("Password must contain at least one digit.");
        return false;
    }

    if (!/[!@#$%^&*()_+=\-{}[\]:<>?,./]/.test(p)) {
        notifyMessage("Password must contain at least one symbol.");
        return false;
    }

    return true;
    };

    const handleLogin = async () => {
        if (!validateInputs()) return;
        try {
            const response = await axios.post("http://192.168.10.8:8000/api/login/", 
                { email, password },
                { withCredentials: true }
            );

            if (response.status === 200) {
                await AsyncStorage.setItem("session", JSON.stringify(response.data.session_id));
                await AsyncStorage.setItem("user_id", JSON.stringify(response.data.user_id));
                const session = await AsyncStorage.getItem("session");
                console.log(`Session: ${session}`);
                notifyMessage("SUCCESS!! Login Successful!");
                navigation.navigate("HomeScreen") 
            }
        } catch (error) {
            if (error.response) {
                const errorMessage = 'Error: Login Failed. ' + error.response.data.error;
                notifyMessage(errorMessage);
            } else {
                notifyMessage("Error!! Something went wrong!");
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.img}>
                <LogInIcon />
            </View>

            <Text style={styles.headerText}>Already have an account</Text>

            <Text style={styles.heading}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter Your Email" placeholderTextColor="#B0BEC5"
                value={email} onChangeText={setEmail}/>
            <Text style={styles.heading}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter Your Password" placeholderTextColor="#B0BEC5" secureTextEntry
                value={password} onChangeText={setPassword}/>

            <TouchableOpacity style={styles.signupbutton} onPress={handleLogin}>
                <Text style={styles.signupbuttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Don't have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
            </Text>
        </ScrollView>
    )
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
        marginBottom: 100,
        textAlign: 'center',
    },
    heading: {
        fontSize: 16,
        color: '#B0BEC5',
        marginBottom: 10,
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

export default Login;