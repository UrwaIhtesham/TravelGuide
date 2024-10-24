import React, { useEffect,useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import BackButton from "../../SVG/Backbutton";

const AddEmergencyContact = () => {
    const {width, height } = Dimensions.get('window');
    const [fontLoaded, setFontLoaded] = useState(false);

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
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.headerText}>Emergency Contact</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter Full Name" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="Enter Email" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="Enter Phone Number" placeholderTextColor="#B0BEC5"/>
                <TextInput style={styles.input} placeholder="Enter CNIC" placeholderTextColor="#B0BEC5"/>
            

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Add more Contacts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupbutton}>
                    <Text style={styles.signupbuttonText}>Sign Up</Text>
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
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 50,
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
    signupbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default AddEmergencyContact;