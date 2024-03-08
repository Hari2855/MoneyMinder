import React, { useState } from "react";
import { Image, ImageBackground, TextInput, Text, TouchableOpacity, View, Alert } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"
import styles from "../Styles";

export default function Forgatepassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("")

    const ResetPassword = () => {
        auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert("Password rset link is send to registred email id")
                navigation.navigate('Login')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <View style={[styles.container, {backgroundColor: '#fd1641'}]}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/images/back.png')} style={styles.bc}/>
            </TouchableOpacity>

            <Text style={[styles.text3, {marginTop: hp(5)}]}>MoneyMinder</Text>
            <View style={styles.view}>
            <Text style={styles.forgate}>Forgot Password?</Text>
            <Text style={[ styles.message,{marginTop: hp(5)}]}>Please enter your registred email address.</Text>
            <Text style={styles.message}>We will send you a verification code to set a new</Text>
            <Text style={styles.message}>password.</Text>
            {/* <Text style={styles.texte}>Email Address</Text> */}
            <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Enter your Email" placeholderTextColor={"gray"} cursorColor={"#fd1641"} style={styles.input} />
            <TouchableOpacity style={[styles.button1, { alignSelf: 'center', marginTop: hp(5) }]} onPress={ResetPassword}>
                <Text style={[styles.text2, { marginTop: 0, color: '#ffffff' }]}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}