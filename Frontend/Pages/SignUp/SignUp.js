import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ActivityIndicator, ScrollView, Touchable, TouchableOpacity, TextInput } from "react-native";
import SignUpSVG from "../../SVG/SignUp";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignUp = () => {
    const {width,height} = Dimensions.get('window');
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        CNIC: "",
        gender: "",
        date_of_birth: "",
        password: "",
    });

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value});
    };

    const handleSignUp = async() => {
        try {
            const response = await axios.post("http://192.168.10.13:8000/api/signup/", form);
            Alert.alert("Success", "account Created Successfully");
            navigation.navigate('HomeScreen');
        } catch (error) {
            Alert.alert("Error", "Signup failed. Check your details and try again.")
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
            <TextInput style={styles.input} placeholder="Enter Gender" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("gender", text)}/>
            <TextInput style={styles.input} placeholder="Enter Date of Birth" placeholderTextColor="#B0BEC5"
                onChangeText={(text) => handleChange("date_of_birth", text)}/>
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

export default SignUp;