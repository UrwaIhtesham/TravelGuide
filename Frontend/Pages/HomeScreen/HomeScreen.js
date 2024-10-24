import React, {useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView,TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

import BottomNavBar from './BottomBar';

import PencilIcon from '../../SVG/HomePageIcons/PencilIcon';
import Person from '../../SVG/HomePageIcons/Person';
import Car from '../../SVG/HomePageIcons/Car';
import Alert from '../../SVG/HomePageIcons/Alert';
import Voice from '../../SVG/HomePageIcons/Voice';
import Battery from '../../SVG/HomePageIcons/Battery';
import Checkin from '../../SVG/HomePageIcons/Check-in';
import Shield from '../../SVG/HomePageIcons/Shield';
import ForwardArrow from '../../SVG/HomePageIcons/ForwardArrow';
import Home from '../../SVG/HomePageIcons/Home';

const HomeScreen = () => {
    const {width, height} = Dimensions.get('window');
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
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.header}>
                        <View style={styles.textContainer}>
                        <Text style={styles.greeting}>Hi, John Doe!</Text>
                        <Text style={styles.email}>johndoe@gmail.com</Text>
                        <Text style={styles.date}>Fri, Oct 18, 2024</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.editProfileIcon}>
                            <PencilIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.secondBackground}>
                <View style={styles.insightContainer}>
                    <Text style={styles.sectionTitle}>Insights</Text>
                    <View style={styles.insightsRow}>
                        <View style={styles.insightBoxContainer}>
                        <View style={styles.shadowoverlay}/>
                        <View style={styles.insightBox}>
                            <Person/>
                            <Text style={styles.insightText}>Emergency Contacts</Text>
                            <Text style={styles.insightValue}>5 Added</Text>
                        </View>
                        </View>
                        
                        <View style={styles.insightBoxContainer}>
                        <View style={styles.shadowoverlay}/>
                        <View style={styles.insightBox}>
                            <Car/>
                            <Text style={styles.insightText}>Safety Rides Started</Text>
                            <Text style={styles.insightValue}>5 Done</Text>
                        </View>
                        </View>
                    </View>
                </View>

                <View style={styles.featuresContainer}>
                    <Text style={styles.sectionTitle}>Feature</Text>
                    <View style={styles.featuresRow}>
                    <View style={styles.featureBoxContainer}>
                    <View style={styles.shadowover}/>
                        <TouchableOpacity>
                        <View style={styles.featureBox}>
                            <View style={styles.shadow}>
                            <Alert/>
                            </View>
                            <Text style={styles.featureText}>Panic Mode</Text>
                        </View>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.featureBoxContainer}>
                        <View style={styles.shadowover}/>
                        <TouchableOpacity>
                        <View style={styles.featureBox}>
                        <View style={styles.shadow}>
                            <Voice/>
                            </View>
                            <Text style={styles.featureText}>Voice Command Activation</Text>
                        </View>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.featureBoxContainer}>
                        <View style={styles.shadowover}/>
                        <TouchableOpacity>
                        <View style={styles.featureBox}>
                        <View style={styles.shadow}>
                            <Battery/>
                            </View>
                            <Text style={styles.featureText}>Battery Monitoring</Text>
                        </View>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.featureBoxContainer}>
                        <View style={styles.shadowover}/>
                        <TouchableOpacity>
                        <View style={styles.featureBox}>
                        <View style={styles.shadow}>
                            <Checkin/>
                            </View>
                            <Text style={styles.featureText}>Safety Check-ins</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.rideInProgress}>
                    <View style={styles.oneline}>
                        <Shield/>
                        <Text style={styles.rideInProgressText}>Start Ride</Text>
                    </View>
                    <Text style={styles.rideDetails}>Start your race with enhanced safety features and real-time monitoring for a secure journey</Text>
                    <TouchableOpacity style={styles.arrowContainer}>
                        <ForwardArrow/>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>

            <BottomNavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1117',
    },
    scrollContainer: {
        flex: 1,
    },
    header: {
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#0D1117',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    secondBackground: {
        flex: 2,
        backgroundColor: '#1C2333',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 10,
        paddingHorizontal: 25,
        marginTop: 10,
    },
    greeting: {
        color: '#E3F2FD',
        fontSize: 35,
        fontWeight: '1000',
        fontFamily: 'Poppins',
        marginBottom: 3,
    },
    email: {
        color: '#B0BEC5',
        fontFamily: 'Poppins',
        marginBottom: 10,
    },
    date: {
        color: '#B0BEC5',
        marginTop: 5,
    },
    editProfileIcon: {
        padding: 10,
    },
    insightsContainer: {
        paddingHorizontal: 10,
    },
    oneline: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    sectionTitle: {
        color: '#E3F2FD',
        fontSize: 25,
        marginVertical: 10,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        textShadowColor: '#000000',
        textShadowOffset: {width: 7, height: 5 },
        textShadowRadius: 10,
        marginLeft: 7,
    },
    insightsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    insightBoxContainer: {
        position: 'relative',
        width: '46%',
    },
    insightBox: {
        backgroundColor: '#1C2333',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#2B99F3',
        borderRadius: 25,
        zIndex: 5,
        position: 'relative',
    },
    shadowoverlay: {
        position: 'absolute',       // Position it absolutely
        top: 10,                   // Offset from the top
        left: 8,                  // Offset from the left
        width: '100%',                // Same width as the main view
        height: '100%',               // Same height as the main view
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black
        borderRadius: 30,          // Match border radius with main view
        zIndex: 0, 
        blurRadius: 25,
    },
    insightText: {
        color: '#FFFFFF',
        marginTop: 2,
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: '#000000',
        textShadowOffset: {width: 7, height: 5 },
        textShadowRadius: 10,
    },
    insightValue: {
        color: '#B0BEC5',
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    featuresContainer: {
        paddingHorizontal: 5,
        marginTop: 0,
    },
    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    featureBoxContainer: {
        position: 'relative',
        width: '23%',
        height: 'auto',
    },
    featureBox: {
        backgroundColor: '#1C2333',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 15,
        borderWidth: 0.9,
        borderColor: '#2B99F3',
        borderRadius: 25,
        height: 140,
    },
    shadowover:{
        position: 'absolute',       // Position it absolutely
        top: 1,                   // Offset from the top
        left: 8,                  // Offset from the left
        width: '100%',                // Same width as the main view
        height: '95%',               // Same height as the main view
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black
        borderRadius: 25,          // Match border radius with main view
        zIndex: 0, 
        blurRadius: 25,
    },
    icon:{
        alignItems:'center',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: '#000000',
        elevation: 5,
    },
    featureText: {
        color: '#B0BEC5',
        marginTop: 1,
        fontSize: 14,
        fontWeight: '900',
        textAlign: 'center',
        lineHeight: 20,
        textShadowColor: '#000000',
        textShadowOffset: {width: 9, height: 4 },
        textShadowRadius: 7,

    },
    rideInProgress: {
        backgroundColor: '#1C2333',
        padding: 5,
        paddingLeft: 12,
        borderWidth: 0.9,
        borderColor: '#2B99F3',
        borderRadius: 25,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    rideInProgressText: {
        color: '#3566b0',
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center',
    },
    rideDetails: {
        color: '#B0BEC5',
        marginTop: 5,
        fontSize: 18,
        fontFamily: 'Poppins',
        lineHeight: 35,
        flexWrap: 'wrap',
    },

    arrowContainer:{
        alignSelf: 'flex-end',
    },
    navContainer: {
        backgroundColor: '#1C2333',
    },
    bottomNav: {
        backgroundColor: '#B0BEC560',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 50,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#000000',
        fontSize: 20,
        marginTop:0,
    },
});

export default HomeScreen;