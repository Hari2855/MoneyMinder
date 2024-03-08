import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, ScrollView,Text, TextInput, TouchableOpacity, View } from 'react-native';
import { tw } from 'react-native-tailwindcss';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './Styles';

export default function Wallet({ }) {
    const navigation = useNavigation();
    const [incomeAmount, setIncomeAmount] = useState('');


    const handleAddIncome = () => {
        navigation.navigate('Home', { income: incomeAmount });
    };


    return(
        <ScrollView>
        <View style={[tw.flex, tw.justifyBetween, tw.hFull, tw.mX4]}>
            <View>
                <View style={[tw.relative, tw.mT5]}>
                    <View style={[tw.absolute, tw.top0, tw.left0, tw.z10]}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/images/back.png')} style={{ height: hp(3), width: hp(3) }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[tw.textXl, tw.fontBold, tw.textCenter, { color: '#272527' }]}>Add Income</Text>
                </View>
                <Image source={require('../../assets/images/accounting.png')} style={styles.aimg} />

                <View style={[tw.mX2, { marginVertical: hp(3) }]}>
                    <Text style={[tw.textLg, tw.fontBold, { color: '#5e5c5e', marginTop: hp(1.5)}]}>How Much?</Text>
                    <TextInput  value={incomeAmount}
                    onChangeText={setIncomeAmount} keyboardType='numeric' style={[tw.p3, tw.bgWhite, tw.roundedFull, { marginTop: hp(1.5), fontSize: hp(2.5), paddingLeft: hp(3) }]}/>
                </View>

                <View>
                    <TouchableOpacity style={[tw.mY6, tw.roundedFull, tw.itemsCenter, tw.justifyCenter, { backgroundColor: '#fd1641', marginTop: hp(5) }]} onPress={handleAddIncome}>
                        <Text style={[tw.textCenter, tw.textWhite, tw.textLg, tw.fontBold, tw.p3]}>Add Income</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}