import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


export default function Socialmedia() {
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/SocialMediaIcons/facebook.png')} style={styles.img}/>
            <Image source={require('../../assets/images/SocialMediaIcons/twitter.png')} style={styles.twittericon}/>
            <Image source={require('../../assets/images/SocialMediaIcons/google.png')} style={styles.img}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
        marginTop: hp(2)
    },
    img: {
        height: hp(5.6),
        width: hp(5.6)
    },
    twittericon: {
        height: hp(7), 
        width: hp(7), 
        marginTop: hp(1.2)
    }
})