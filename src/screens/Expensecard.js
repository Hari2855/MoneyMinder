import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { color, tw } from "react-native-tailwindcss";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { connect } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

const ExpenseCard = ({ title, amount, category }) => {
    const [state, setState] = useState(0)
    const navigation = useNavigation();
    return (
        <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter, tw.p3, tw.mB3, tw.pX5, { borderRadius: hp(2.5), backgroundColor: '#50C878' }]}>
            <View>
                <Text style={[tw.fontBold, { color: '#ffffff' }]}>{title}</Text>
                <Text style={[tw.textXs, { color: '#ffffff' }]}>{category}</Text>
            </View>
            <View>
                <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: hp(2.5) }}>₹{amount}</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../../assets/images/delete.png')} style={{ height: hp(4), width: hp(4), tintColor: 'red' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Adde')}>
                <Image source={require('../../assets/images/updating.png')} style={{ height: hp(4), width: hp(4), tintColor: '#ffffff' }} />
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = state => ({
    title: state.expense.title,
    amount: state.expense.amount,
    category: state.expense.category,
});

export default connect(mapStateToProps)(ExpenseCard);
