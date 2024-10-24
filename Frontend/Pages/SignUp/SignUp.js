import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ActivityIndicator, ScrollView, Touchable, TouchableOpacity, TextInput } from "react-native";
import SignUpSVG from "../../SVG/SignUp";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const {width,height} = Dimensions.get('window');
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();

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

            <TextInput style={styles.input} placeholder="Enter Your Username" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter Your Email" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter Your Phone Number" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter Your CNIC" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter Gender" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter Date of Birth" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter Your Password" placeholderTextColor="#B0BEC5" secureTextEntry/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddEmergencyContact')}>
                <Text style={styles.buttonText}>Add Emergency Contacts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.signupbuttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>Already have an account? <Text style={styles.loginText}>Log In</Text></Text>
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