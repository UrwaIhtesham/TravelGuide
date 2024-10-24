import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from "react-native";
import Home from "../../SVG/HomePageIcons/Home";

import SvgComponent from '../../SVG/AppLogo';
import Panic from "../../SVG/HomePageIcons/Panic";
import Contacts from "../../SVG/HomePageIcons/Contacts";
import Profile from "../../SVG/HomePageIcons/Profile";

const BottomNavBar = () => {
    const { width, height } = Dimensions.get('window');

    return (
        <View style={styles.bottomBarContainer}>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Home/>
                    <Text style={styles.iconText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <Profile/>
                    <Text style={styles.iconText}>Profile</Text>
                </TouchableOpacity>

                <View style={{ flex:1}}/>

                <TouchableOpacity style={styles.iconContainer}>
                    <Contacts/>
                    <Text style={styles.iconText}>Contacts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <Panic/>
                    <Text style={styles.iconText}>Panic Mode</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.semiCircle}/>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/Logo/AppLogo.png')} style={styles.logo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBarContainer: {
        position: 'relative',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        border: 0,
        backgroundColor: '#1C2333',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#57616d',
        height: 70,
        borderRadius: 50,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    iconText: {
        color: '#000',
        fontSize: 10,
        marginTop: 5,
    },
    semiCircle: {
        position: 'absolute',
        top: -30,
        width: 80, 
        height: 70, 
        borderRadius: 100, 
        backgroundColor: '#1C2333', 
        zIndex: 0, // Keep it behind the logo
    },
    logoContainer: {
        position: 'absolute',
        top: -35, // Float the logo above the bar
        width: 70,
        height: 70,
        borderRadius: 35, // Circular logo
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Add shadow for floating effect
    },
    logo: {
        width: 70,
        height: 70,
    },
});

export default BottomNavBar;