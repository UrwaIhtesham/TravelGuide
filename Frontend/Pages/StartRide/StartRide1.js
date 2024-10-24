import React from "react";
import {View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Font from 'expo-font';

import BackButton from "../../SVG/Backbutton";

const StartRide1 = () => {
    const navigation = useNavigation();

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

            <Text style={styles.heading}>Journey</Text>
            <TextInput style={styles.input} placeholder="Enter Your Starting Point" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter Your Destination" placeholderTextColor="#B0BEC5" />

            <Text style={styles.heading}>Vehicle Information (optional)</Text>
            <TextInput style={styles.input} placeholder="Enter Vehicle Type" placeholderTextColor="#B0BEC5"/>
            <TextInput style={styles.input} placeholder="Enter License plate #" placeholderTextColor="#B0BEC5" />
            <TextInput style={styles.input} placeholder="Enter vehicle information" placeholderTextColor="#B0BEC5" />

            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('StartRide2')}>
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
    nextbutton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    nextbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default StartRide1;