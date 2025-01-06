import React, {useEffect, useState} from "react";
import {View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import UserProfileIcon from "../../SVG/UserProfileIcons/userprofile";
import BackButton from "../../SVG/Backbutton";

const UserProfile = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate('HomeScreen')}>
                    <BackButton />
                </TouchableOpacity>
                <Text style={styles.headerText}>User Profile</Text>
            </View>

            <View style={styles.img}>
                <UserProfileIcon />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="CNIC" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="Gender" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="Date of Birth" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="****************" placeholderTextColor="#B0BEC5"/>
            

                <TouchableOpacity style={styles.signupbutton} onPress = {() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.signupbuttonText}>Save Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles=StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#0D1117',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 50,
    },
    headerText: {
        color: '#E3F2FD',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 35,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 45,
        backgroundColor: '#FFFFFF10',
        borderRadius: 10,
        padding: 15,
        marginBottom: 25,
        color: '#FFFFFF', 
    },
    button: {
        width: '80%',
        backgroundColor: '#0E64D280',
        borderRadius: 10,
        padding: 15,
        marginBottom: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    signupbutton: {
        width: '80%',
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    img:{
        marginTop: 5,
        marginBottom: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default UserProfile;