import React, {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../SVG/Backbutton";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import VoiceCommandSVG from "../../SVG/FeaturesScreenIcons/voiceCommand";

const VoiceCommand = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <BackButton />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Code Word Detected</Text>
                </View>

                <View style={styles.img}>
                    <VoiceCommandSVG />
                </View>

                <Text style={styles.codewordText}>CODE WORD detected...</Text>

                <Text style={styles.textt}>Code word detected. Activating panic mode and notifying your emergency contacts.</Text>

                <TouchableOpacity style={styles.cancelbutton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.cancelbuttonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.endRidebutton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.endRidebuttonText}>Notify Emergency Contacts</Text>
                </TouchableOpacity>

                <Text style={styles.panicmodeText}>Panic Mode Activated</Text>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1117',
        padding: 20
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
    img:{
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelbutton: {
        backgroundColor: '#CA0D00',
        borderRadius: 10,
        padding: 15,
        marginTop: 70,
        marginBottom: 15,
        alignItems: 'center',
    },
    cancelbuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    endRidebutton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        marginBottom: 15,
        alignItems: 'center',
    },
    endRidebuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    textt: {
        color: '#B0BEC5',
        textAlign: 'justify',
        marginTop: 40,
        fontSize: 16,
        marginLeft: 30,
        marginRight: 50
    },
    codewordText: {
        color: '#E3F2FD',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        marginLeft: 30,
        marginRight: 50
    },
    panicmodeText: {
        color: '#4CAF50',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    }
});

export default VoiceCommand;