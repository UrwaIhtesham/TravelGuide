import React, {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import LowBatterySVG from "../../SVG/FeaturesScreenIcons/battery";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import BackButton from "../../SVG/Backbutton";

const LowBattery = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <BackButton />
                </TouchableOpacity>
                <Text style={styles.headerText}>Battery Monitoring</Text>
            </View>

            <View style={styles.img}>
                <LowBatterySVG />
            </View>

            <Text style={styles.batteryText}>LOW BATTERY</Text>
            <Text style={styles.textBattery}>Charge your phone or turn on battery saver to ensure safety features remain active</Text>

            <TouchableOpacity style={styles.endRidebutton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.endRidebuttonText}>End Ride</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifybutton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.notifybuttonText}>Notify Emergency Contacts</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )

};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0D1117'
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
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    endRidebutton: {
        backgroundColor: '#0E64D280',
        borderRadius: 10,
        padding: 15,
        marginTop: 70,
        marginBottom: 15,
        alignItems: 'center',
    },
    endRidebuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    notifybutton: {
        backgroundColor: '#0E64D2',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        marginBottom: 15,
        alignItems: 'center',
    },
    notifybuttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    textBattery: {
        color: '#B0BEC5',
        textAlign: 'justify',
        marginTop: 40,
        fontSize: 16,
        marginLeft: 30,
        marginRight: 50
    },
    batteryText: {
        color: '#E3F2FD',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        marginLeft: 30,
        marginRight: 50
    }
});
export default LowBattery;