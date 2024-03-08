import React, { useState } from "react";
import { Alert, StatusBar, Text, TextInput, View } from "react-native";
import styles from "../Styles";
import MyButton from "../../components/MyButton";
import MyTextinput from "../../components/MyTextinput";
import Socialmedia from "../../components/SocialMedia";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [badpassword, setBadPassword] = useState('')
    const [bademil, setbademail] = useState('')

    const Login = () => {
        auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            Alert.alert("Success: Logged in")
            navigation.navigate("Parent")
        })
        .catch(err => {
            console.log(err.message)
            Alert.alert(err.message)
        })
    }
    
    
    return (
        <View style={[styles.container, { backgroundColor: '#fd1641' }]}>
            <StatusBar backgroundColor={'#fd1641'} barStyle={'light-content'} />
            <Text style={styles.text3}>MoneyMinder</Text>
            <View style={styles.container1}>
                <MyTextinput placeholder="Enter your Email" isValid={bademil==""?true:false} value={email} onChangeText={text => setEmail(text)}/>
                {bademil != '' && <Text style={{color: 'red'}}>{bademil}</Text>}
                <MyTextinput placeholder="Enter Password" isValid={badpassword==""?true:false} secureTextEntry value={password} onChangeText={text => setPassword(text)}/>
                {badpassword != '' && <Text style={{color: 'red'}}>{badpassword}</Text>}

                <Text style={styles.text4} onPress={()=>navigation.navigate('Signup')}>Don't Have An Account Yet?</Text>

                <MyButton title={"Login"} onPress={Login}/>

                <Text style={styles.textor}>OR</Text>

                <Socialmedia/>

                <Text style={{alignSelf: 'center', color: '#333', fontWeight: '500', marginTop: hp(5)}}>Forgate your <Text style={{color: '#fd1641'}} onPress={()=>navigation.navigate('Forgate')}>Password?</Text></Text>
            </View>
        </View>
    )
}