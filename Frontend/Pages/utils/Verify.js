import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, Alert, ToastAndroid, Platform} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";

const VerifyEmail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { uid, token } = route.params;

    function notifyMessage(msg) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        }
    }

    useEffect(() => {
        const VerifyEmail = async () => {
            try {
                const response = await axios.get(`http://192.168.10.13:8000/api/verify/${uid}/${token}/`);
                notifyMessage("SUCCESS!! Email verified! You can now login");
                navigation.navigate("Login");
            } catch (error) {
                notifyMessage("ERROR!! Invalid or expired verification link.");
            }
        };

        VerifyEmail();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="large" color="#007BFF" />
            <Text>Verifying email...</Text>
        </View>
    );
};

export default VerifyEmail;