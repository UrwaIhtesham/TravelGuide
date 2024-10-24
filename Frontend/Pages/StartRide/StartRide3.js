import React, { useRef, useState } from "react";
import {View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet, ScrollView, Modal} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Font from 'expo-font';

import BackButton from "../../SVG/Backbutton";
import { Picker } from "@react-native-picker/picker";

const StartRide3 = () => {
    const navigation = useNavigation();

    const [modalVisible, setModalvisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState("15");
    const [inputValue, setInputValue] = useState("");

    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleTextChange = (text, index)=> {
        if (text) {
            if(index<inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    const handleOpenModal = () => {
        setModalvisible(true);
    };

    const handleCloseModal = () => {
        setInputValue(`${selectedTime} minutes`);
        setModalvisible(false);
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

            <Text style={styles.heading}>Safety Check-Ins</Text>

            <Text style={styles.heading}>Make Your Custom 4 digit Code that You will Enter in safety Check-ins</Text>
            <View style={styles.codecontainer}>
                {inputRefs.map((ref, index) => (
                    <TextInput
                        key={index}
                        style={styles.inputBox}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={ref} 
                        onChangeText={(text) => handleTextChange(text, index)} // Handle text change
                    />
                ))}
                
            </View>

            <Text style={styles.heading}>Enter Time Interval (in Minutes)</Text>
            <TouchableOpacity onPress={handleOpenModal}>
            <TextInput 
                style={styles.input} 
                placeholder="Enter Interval between Check-Ins" 
                placeholderTextColor="#B0BEC5"
                editable={false}
                value={inputValue}
            />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent = {true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHeading}>Enter Interval between Check-Ins</Text>
                        <Picker
                            selectedValue ={selectedTime}
                            onValueChange={(itemValue) => {
                                setSelectedTime(itemValue);
                            }}
                            style={styles.picker}
                        >
                            {[...Array(5)].map((_, index) =>(
                                <Picker.Item key={index} label={`${(index+1)*15} minutes`} value={`${(index+1)*15}`} style={styles.pickerItem}/>
                            ))}
                        </Picker>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleCloseModal}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.nextbuttonText}>Start Ride</Text>
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
        backgroundColor: '#20242a',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: '#E3F2FD',
    },
    codecontainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 50,
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
    nextbutton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginTop: 65,
        marginBottom: 15,
        alignItems: 'center',
    },
    nextbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
        width: '80%',
        backgroundColor: "#0D1117",
        borderColor:'#B0BEC5',
        color: '#B0BEC5',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeading: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#B0BEC5',
    },
    confirmButton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    picker: {
        width: '100%',
        height: 50, // Adjust the height as needed
        backgroundColor: '#1C2333', // Background color for the Picker
        borderRadius: 10, // Rounded corners
        color: '#E3F2FD', // Text color
        marginBottom: 15, // Space below the Picker
    },
    pickerItem: {
        backgroundColor: '#0D1117',
        color: '#E3F2FD', // Text color for each item
        fontSize: 16, // Font size for each item
    },
});

export default StartRide3;