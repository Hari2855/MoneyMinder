import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


export default function MyTextinput({...props}) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} {...props}/>
            {/* <View style={[styles.border, {backgroundColor: isValid ? 'red' : 'gray',}]}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp(5),
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: hp(1),
        marginBottom: hp(5)
    },
    input: {
        width: '100%',
        height: hp(6),
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    border: {
        width: '100%',
        height: 1,
        alignSelf: 'center'
    }
})