import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import SvgComponent from "../../SVG/AppLogo";
import AboutOurPage from "../../SVG/AboutPageIcons/aboutOurPage";

const AboutScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>About Travel Guide</Text>
                <Image source={require('../../assets/Logo/AppLogo.png')} style={styles.logo}/>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>About Our App</Text>
                <Text style={styles.punchline}>Stay Safe, Stay Connected, and Travel Confidently</Text>
                <Text style={styles.body}>Our safety app is designed to empower individuals body
                                          providing instant access to help and resources in
                                          critical situations. With features like constant safety
                                          check-ins, emergency contacts, real-time sharing,
                                          and low battery alerts, our app ensures you are never 
                                          alone, no matter where you are. Whether you are
                                          commuting, traveling, or just looking for peace of
                                          mind, our app is your reliable companion for personal safety and security.
                </Text>
                <AboutOurPage style={styles.svg} />
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>How to Use Our App?</Text>
                <Text style={styles.body}>{"You can add trusted contacts who will receive all the alerts in case of an emergency.\nYou can enable start ride feature by entering all the required details. Your pre-configured message with important details will be sent to your contacts when you enable the start ride feature. \nIn an emergency, you can press the panic button to instantly activate panic mode. \nYou can also give a voice command 'Abracadabra' to activate panic mode."}
                </Text>
                <Image
                    source={require('../../assets/AboutPage/usage.png')}
                    style={styles.pngstyle}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>What features does our app provide?</Text>
                <Text style={styles.body}>{"You can add trusted contacts who will receive all the alerts in case of an emrgency.\nYou can enable start ride feature by entering all the required details. Your pre-configured message with important details will be sent to your contacts when you enable the start ride feature.\nIn an emergency, you can press the panic button to instantly activate panic mode.\nThe app also sends you a low battery notification when your battery is critically low."}
                </Text>
                <Image
                    source={require('../../assets/AboutPage/features.png')}
                    style={styles.pngstyle}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>What is Panic Mode?</Text>
                <Text style={styles.body}>{"Panic Mode is kind of an SOS Mode. When panic mode is activated, our app sends your registered contacts an SMS that includes your real time location, your audio of 5 seconds, and your video of 5 seconds."}
                </Text>
                <Image
                    source={require('../../assets/AboutPage/panic.png')}
                    style={styles.pngstyle}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>Privacy Policy</Text>
                <Text style={styles.body}>{"Travel Guide is committed to protecting your privacy. This privacy policy outlines how we collect, use, disclose, and safeguards your information when you use our app. Please take some time to read this Privacy Policy below."}
                </Text>
                <Text style={styles.bulletPoint}>  1. Information We Collect </Text>
                <Text style={styles.bulletPoint}>  {"a) Personal Information"} </Text>
                <Text style={styles.innerBulletPoint}>  {"• Name, email address, phone Number, and emergency contact details provided during registration."} </Text>
                <Text style={styles.bulletPoint}>  {"b) Location Information"}</Text>
                <Text style={styles.innerBulletPoint}>  {"• Real-time location data when you use features such as panic mode."} </Text>
                <Text style={styles.bulletPoint}>  {"c) Microphone and Camera Access"}</Text>
                <Text style={styles.innerBulletPoint}>  {"• Audio and video recordings when you use panic mode features"} </Text>
            </View>
        </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1117'
    },
    scrollContainer: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    title: {
        color: '#E3F2FD',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
        fontFamily: 'Poppins',
    },
    logo: {
        width: 70,
        height: 70,
    },
    section: {
        paddingLeft: 10,
        paddingRight: 10
    },
    heading: {
        color: '#E3F2FD',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    punchline: {
        color: '#BEB0C5',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    body: {
        color: '#E3F2FD',
        fontSize: 16,
        textAlign: 'justify',
        fontWeight: 'bold'
    },
    pngstyle: {
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bulletPoint: {
        fontSize: 16, 
        color: '#E3F2FD',
        fontWeight: 'bold'
    },
    subBulletPoint: {
        fontSize: 16,
        color: '#E3F2FD',
        fontWeight: 'bold'
    },
    innerBulletPoint: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E3F2FD'
    }
});

export default AboutScreen;