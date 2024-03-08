import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, Alert } from "react-native";
import styles from "./Styles";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Cart from "../components/Cart";
import { CartData } from "../constants";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({route}) {
    const navigation = useNavigation()
    const { income} = route.params || {income: 0};

    const [totalBalance, setTotalBalance] = useState(5000);
    const [incomeAmount, setIncomeAmount] = useState(0);

    useEffect(() => {
        if (income) {
            setTotalBalance(prevBalance => prevBalance + parseFloat(income));
            setIncomeAmount(parseFloat(income));
        }
    }, [income]);

    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            })
            .catch((error) => {
                Alert.alert("Error", error.message);
            });
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.container2}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={require('../../assets/images/avatar.jpg')} style={styles.img2} />
                </TouchableOpacity>
                <View style={{ marginRight: hp(3) }}>
                    <Text style={styles.textn}>Hello Buddy!</Text>
                    <Text style={[styles.textn, { color: '#000' }]}>Track Your Expenses Here!!</Text>
                </View>
                <TouchableOpacity style={{height: hp(5), alignItems: 'center', justifyContent: 'center', width: hp(10), borderRadius: hp(1.5), borderWidth: 1, borderColor: 'gray',right: hp(1)}} onPress={handleLogout}>
                    <Text style={{color: '#000', fontSize: hp(2.5), fontWeight: '500'}}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.tbalance}>
                    <View>
                        <Text style={styles.tbt}>Total Balance</Text>
                        <Text style={[styles.tbt, { fontSize: hp(4), fontWeight: '500' }]}>₹{totalBalance}</Text>
                    </View>
                    <Image source={require('../../assets/images/more.png')} style={styles.more} />
                </View>
                <View style={[styles.tbalance, { marginTop: hp(5) }]}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.icontaine}>
                                <Image source={require('../../assets/images/downarrow.png')} style={styles.arrow} />
                            </View>
                            <Text style={[styles.tit, { marginLeft: hp(0.5) }]}>Income</Text>
                        </View>
                        <Text style={styles.rupee}>₹{incomeAmount}</Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.icontaine, { marginRight: hp(0.5) }]}>
                                <Image source={require('../../assets/images/uparrow.png')} style={styles.arrow} />
                            </View>
                            <Text style={styles.tit}>Expenses</Text>
                        </View>
                        <Text style={styles.rupee}>₹734</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.tc}>Transactions</Text>

            <View style={styles.date}>
                <Text style={styles.day}>Today •</Text>
                <Text style={styles.tr}>March 7</Text>
            </View>
           
           {
            CartData.map((cat, index) => {
                return(
                    <Cart key={index} source={cat.images} cat={cat.Cat} shop={cat.Store}  rupee={cat.rupee} method={cat.Method}/>
                )
            })
           }
        </ScrollView>
    )
}