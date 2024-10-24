import React, { useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import SvgComponent from '../../SVG/AppLogo';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();

    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'Poppins': require('../../assets/Fonts/Poppins-Bold.ttf'),
            });
            setFontLoaded(true);
        };

        loadFont();
    }, []);

    useEffect(() => {
        const timer=setTimeout(() => {
            navigation.navigate('SignUp');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    if (!fontLoaded){
        return <ActivityIndicator size="large" color="#E3F2FD" />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.welcomeText}>WELCOME TO TRAVEL GUIDE</Text>
                <View >
                    <SvgComponent width={width * 0.5} height={height * 0.5}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0D1117',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    welcomeText: {
        color: '#E3F2FD',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 150,
        marginBottom: 50,
        fontFamily: 'Poppins',
    },
});

export default SplashScreen;