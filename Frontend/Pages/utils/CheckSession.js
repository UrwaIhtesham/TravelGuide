import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//import { useNavigation } from "@react-navigation/native";

const checkSession = async (navigation) => {
    //const navigation = useNavigation(); 
    try {
        const session = await AsyncStorage.getItem("session");
        console.log("session in checkSession:", session);
        const user_id = await AsyncStorage.getItem("user_id");
        console.log("user id in session:", user_id);
        if (session) {
            const response = await axios.get("http://192.168.10.13:8000/api/check-session/", {
                withCredentials: true, 
            });

            //console.log(response);
            console.log(response.data.logged_in);
            if (response.data.logged_in) {
                navigation.navigate("HomeScreen");
            } else {
                await AsyncStorage.removeItem("session");
            }
        }
    } catch (error) {
        console.log("Session check failed:", error);
    }
};

export default checkSession;
