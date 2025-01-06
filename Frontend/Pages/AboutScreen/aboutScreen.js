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
                <Text style={styles.innerBulletPoint}>  {"• Audio and video recordings when you use panic mode features."} </Text>
                <Text style={styles.bulletPoint}>   {"d) Device Information"}</Text>
                <Text style={styles.innerBulletPoint}>  {"• Information about your device that helps in locating you such as GPS, IP address etc.,"} </Text>
                <Text style={styles.bulletPoint}>   2. How We Use Your Information</Text>
                <Text style={styles.body}>   We may use your information we collect for the following purposes:</Text>
                <Text style={styles.innerBulletPoint}>  {"• To provide and improve our services."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• We use emergency contact details only to send alerts while start ride feature is active or in panic mode."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• To communicate with you regarding app updates, technical support, or security notices."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• To comply with legal requirements and protect your safety."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• We only use your location when panic mode is activated. We will not use it for illegal purposes."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• We only use your microphone to listen to the code word, we don't share your recordings."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• We also use your microphone to record your 5 second audio only in panic mode to send to your contacts only."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• We use your camera and record your 5 second video only in panic mode to send to your contacts only."} </Text>
                <Text style={styles.bulletPoint}>   3. Information Sharing and Disclosure</Text>
                <Text style={styles.body}>   We do not sell your personal information. We may share your data with: </Text>
                <Text style={styles.innerBulletPoint}>  {"• Emergency Contacts: To alert them in case of emergencies."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• Service Providers: Third-party vendors helping us deliver app services (e.g., hosting, analytics)."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• Legal Authorities: When and only when required by the law or to protect your safety or the safety of the others."} </Text>
                <Text style={styles.bulletPoint}>   4. Data Security</Text>
                <Text style={styles.body}>   We implement robust measures to protect your data from unauthorized access, disclosure, alteration, or destruction. We are trying our best to update our data security and we will update you in real-time if any breach occurs. Your data will remain secure in our database.</Text>
                <Text style={styles.bulletPoint}>   5. Your Rights</Text>
                <Text style={styles.bulletPoint}>   You have the following rights regarding your information:</Text>
                <Text style={styles.innerBulletPoint}>  {"• Access, update, or delete your personal data."} </Text>
                <Text style={styles.innerBulletPoint}>  {"• Opt-out of non-essential data collection."} </Text>
                <Text style={styles.bulletPoint}>   6. Retention of Data</Text>
                <Text style={styles.body}>   We retain your data for as long as necessary to provide the Service or comply with legal obligations. Upon request, we will delete your data, except where required by the law.</Text>
                <Text style={styles.bulletPoint}>   7. Changes to This Policy</Text>
                <Text style={styles.body}>   We may update this privacy policy from time to time. Any changes will be posted within the app and you will be notified of significant updates.</Text>
                <Text style={styles.body}>   {"If you have questions about this Privacy Policy, please contact us at:\nEmail: travelguide.f24.107@gmail.com"}</Text>
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
        flex: 1,
        marginBottom: 30
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