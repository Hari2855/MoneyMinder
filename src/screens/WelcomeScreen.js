import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";


export default function WelcomeScreen() {
    const navigation = useNavigation();

    return(
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
            <Image source={require('../../assets/images/accounting.png')} style={styles.img}/>
            <Text style={[styles.text, {marginTop: hp(20)}]}>Manage Expenses</Text>
            <Text style={styles.text}>With a Simple Touch!</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.text1}>Get Started</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>Already have an account? <Text style={{color: '#fd1641'}} onPress={()=> navigation.navigate("Login")}>Login</Text></Text>
        </View>
    )
}