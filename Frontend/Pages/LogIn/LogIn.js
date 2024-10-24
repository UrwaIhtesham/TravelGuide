import React from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import * as Font from 'expo-font';
import LogInIcon from "../../SVG/LoginPageIcons/LoginIcon";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.img}>
                <LogInIcon />
            </View>

            <Text style={styles.headerText}>Already have an account</Text>

            <Text style={styles.heading}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter Your Username" placeholderTextColor="#B0BEC5"/>
            <Text style={styles.heading}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter Your Password" placeholderTextColor="#B0BEC5" secureTextEntry/>

            <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.signupbuttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Already have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
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