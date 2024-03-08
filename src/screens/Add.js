import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./Styles";
import { tw } from "react-native-tailwindcss";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import ExpenseCard from "./Expensecard";
import { useNavigation } from "@react-navigation/native";

export default function Add() {
    const navigation = useNavigation();
    var items = [1]
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/accounting.png')} style={styles.aimg} />
            <View style={tw.pX4}>
                <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter, { width: wp(95) }]}>
                    <Text style={[tw.fontBold, tw.text2xl, { color: '#575658' }]}>Expenses</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Adde')} style={[tw.p2, tw.pX3, tw.bgWhite, tw.border, tw.borderGray200, tw.roundedFull]}>
                        <Text style={{ color: '#616061' }}>Add Expenses</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: hp(60), marginTop: hp(2) }}>
                    <FlatList data={items}
                      keyExtractor={item=> item.id}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => {
                        return(
                            <ExpenseCard item={item}/>
                        )
                      }}
                    />
                </View>
            </View>
        </View>
    )
}