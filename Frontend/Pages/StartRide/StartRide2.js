import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet, ScrollView, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Font from 'expo-font';

import BackButton from "../../SVG/Backbutton";

const StartRide2 = () => {
    const navigation = useNavigation();

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (buttonId) => {
        setSelectedButton(selectedButton === buttonId ? null: buttonId);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.headerText}>Start Ride</Text>
            </View>

            <View style={styles.gifcontainer}>
                <Image
                    source={require('../../assets/StartRide/car.gif')}
                    style={styles.gifstyle}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.heading}>Mode of Transportation</Text>
            <View style={styles.row}>
            <TouchableOpacity
                    style={[styles.buttonContainer, selectedButton === 'button1' && styles.selectedButton]}
                    onPress={() => handleButtonPress('button1')}
                >
                    <Text style={styles.buttonText}>Solo Travel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, selectedButton === 'button2' && styles.selectedButton]}
                    onPress={() => handleButtonPress('button2')}
                >
                    <Text style={styles.buttonText}>Public Transport</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <TouchableOpacity
                    style={[styles.buttonContainer, selectedButton === 'button3' && styles.selectedButton]}
                    onPress={() => handleButtonPress('button3')}
                >
                    <Text style={styles.buttonText}>Carpooling</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, selectedButton === 'button4' && styles.selectedButton]}
                    onPress={() => handleButtonPress('button4')}
                >
                    <Text style={styles.buttonText}>Other</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.heading}>Passenger Information (optional)</Text>
            <TextInput style={styles.input} placeholder="Enter Name of Passenger" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter contact number of passenger" placeholderTextColor="#B0BEC5" />

            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('StartRide3')}>
                <Text style={styles.nextbuttonText}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles=StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0D1117',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
    headerText: {
        color: '#E3F2FD',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 35,
    },
    gifcontainer: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gifstyle: {
        width: 300,
        height: 200,
        transform: [{scaleX: -1}],
    },
    heading: {
        fontSize: 16,
        color: '#B0BEC5',
        marginBottom: 15,
        marginTop: 15,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#20242a',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: '#E3F2FD',
    },
    nextbutton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginTop: 35,
        marginBottom: 25,
        alignItems: 'center',
    },
    nextbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#20242a',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    buttonText: {
        color: '#E3F2FD',
        fontWeight: 'bold',
    },
    selectedButton: {
        backgroundColor: '#154c7e',
    },
});

export default StartRide2;