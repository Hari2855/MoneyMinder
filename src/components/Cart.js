import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../screens/Styles";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";

export default function Cart({source, cat, rupee, method, shop}) {
    return(
        <TouchableOpacity style={styles.cart}>
                <View style={{ flexDirection: 'row', marginRight: hp(7) }}>
                    <View style={styles.imgc}>
                        <Image source={source} style={styles.cartimg} />
                    </View>
                    <View>
                    <Text style={styles.storetext}>{cat}</Text>
                    <Text style={styles.tt}>{shop}</Text>
                    </View>
                </View>
                
                <View>
                <Text style={[styles.storetext, {color: '#f8685f'}]}>{rupee}</Text>
                <Text style={[styles.tt, {marginLeft: hp(3.5)}]}>{method}</Text>
                </View>
            </TouchableOpacity>
    )
}