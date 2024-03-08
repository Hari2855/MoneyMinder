import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


export default function MyButton({title, onPress}) {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp(7),
        width: '100%',
        backgroundColor: '#ff0036',
        borderRadius: hp(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: hp(2.5),
        color: '#ffffff',
        fontWeight: '500'
    }
})