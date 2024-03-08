import React, { useState } from "react";
import { Alert, StatusBar, Text, TextInput, View } from "react-native";
import styles from "../Styles";
import MyButton from "../../components/MyButton";
import MyTextinput from "../../components/MyTextinput";
import Socialmedia from "../../components/SocialMedia";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"


export default function Signup() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const signUpauth = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                if (password === confirmPassword) {
                    Alert.alert("User created please login")
                    navigation.goBack();
                }
                else {
                    Alert.alert("Password is not mached")
                }
            })
            .catch(err => {
                console.log(err.message);
                Alert.alert(err.message)
            })
    }
    return (
        <View style={[styles.container, { backgroundColor: '#fd1641' }]}>
            <StatusBar backgroundColor={'#fd1641'} barStyle={'light-content'} />
            <Text style={styles.text3}>MoneyMinder</Text>
            <View style={styles.container1}>
                <MyTextinput placeholder="Enter your Email" value={email} onChangeText={text => setEmail(text)}/>
                <MyTextinput placeholder="Enter Password" value={password} onChangeText={text => setPassword(text)} secureTextEntry/>
                <MyTextinput placeholder="Confirm Password" value={confirmPassword} onChangeText={text => setConfirmPassword(text)} secureTextEntry/>
                <MyButton title={"Signup"} onPress={signUpauth}/>
                <Text style={styles.textor}>OR</Text>
                <Socialmedia/>
            </View>
        </View>
    )
}