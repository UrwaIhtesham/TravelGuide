import React, { useEffect,useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, Dimensions, TextInput, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import BackButton from "../../SVG/Backbutton";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddEmergencyContact = () => {
    const {width, height } = Dimensions.get('window');
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    const { signUpData } = route.params;
    const [ emergencyContacts, setEmergencyContacts ] = useState([]);

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        cnic: "",
    });

    useEffect(() => {
            if (route.params?.signUpData) {
                console.log(route.params?.signUpData);
            }
            //console.log(emergencyContacts);
            //console.log(signUpData);
        }, [route.params?.signUpData]);

    const addContact = () => {
        if (contact.name && contact.phone && contact.email) {
            setEmergencyContacts([...emergencyContacts, contact]);
            setContact({ name: "", phone: "", email: "", cnic: ""});
        }
        console.log(emergencyContacts);
    };

    useEffect(() => {
        console.log("Updated emergencyContacts:", emergencyContacts);
    }, [emergencyContacts]); // Runs whenever `emergencyContacts` changes
    

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

    const handleSaveAndGoBac = () => {
        console.log("Save & Go Back Clicked!")
        setTimeout(() => {
            navigation.navigate('SignUp', {
                emergencyContacts: emergencyContacts,
                signUpData, signUpData
            });
        }, 500);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleSaveAndGoBac}>
                    <BackButton />
                </TouchableOpacity>
                <Text style={styles.headerText}>Emergency Contact</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Full Name" 
                    placeholderTextColor="#B0BEC5"
                    value= {contact.name}
                    onChangeText={(text) => setContact({ ...contact, name: text })}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Email" 
                    placeholderTextColor="#B0BEC5"
                    value = {contact.email}
                    onChangeText={(text) => setContact({ ...contact, email: text })}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Phone Number" 
                    placeholderTextColor="#B0BEC5"
                    value = {contact.phone} 
                    onChangeText={(text) => setContact({ ...contact, phone: text })}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter CNIC" 
                    placeholderTextColor="#B0BEC5"
                    value = {contact.cnic}
                    onChangeText={(text) => setContact({ ...contact, cnic: text })}
                />
            

                <TouchableOpacity style={styles.button} onPress={addContact}>
                    <Text style={styles.buttonText}>Add Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupbutton} onPress={handleSaveAndGoBac}>
                    <Text style={styles.signupbuttonText}>Save & Go Back</Text>
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