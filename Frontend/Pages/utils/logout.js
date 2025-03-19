import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const logoutUser = async (navigation) => {
    try {
        await axios.post("http://192.168.10.13:8000/api/logout_user/", {
            withCredentials: true
        });

        await AsyncStorage.removeItem("session");
        await AsyncStorage.removeItem("user_id");

        navigation.navigate("Login");
    } catch (error) {
        console.error("Logout Failed.", error);
    }
};

export default logoutUser;