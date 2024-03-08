import React from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setTitle, setAmount, setCategory } from '../redux/action'
import { Categories } from '../components/Categories';
import { Alert, Image, ScrollView, Settings, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { tw } from 'react-native-tailwindcss';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './Styles';

function AddExpense({ title, amount, category, setTitle, setAmount, setCategory, addExpense }) {
    const navigation = useNavigation();

    const handleAddExpense = () => {
        if (title && amount && category) {
            addExpense();
            navigation.goBack();
        } else {
            Alert.alert('Data not filled');
        }
    };

    return (
        <ScrollView>
            <View style={[tw.flex, tw.justifyBetween, tw.hFull, tw.mX4]}>
                <View>
                    <View style={[tw.relative, tw.mT5]}>
                        <View style={[tw.absolute, tw.top0, tw.left0, tw.z10]}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/images/back.png')} style={{ height: hp(3), width: hp(3) }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[tw.textXl, tw.fontBold, tw.textCenter, { color: '#272527' }]}>Add Expense</Text>
                    </View>
                    <Image source={require('../../assets/images/accounting.png')} style={styles.aimg} />

                    <View style={[tw.mX2, { marginVertical: hp(3) }]}>
                        <Text style={[tw.textLg, tw.fontBold, { color: '#5e5c5e' }]}>For What?</Text>
                        <TextInput style={[tw.p3, tw.bgWhite, tw.roundedFull, { marginTop: hp(1.5), fontSize: hp(2.5), paddingLeft: hp(3) }]} value={title} onChangeText={value => setTitle(value)} />
                        <Text style={[tw.textLg, tw.fontBold, { color: '#5e5c5e', marginTop: hp(1.5)}]}>How Much?</Text>
                        <TextInput keyboardType='numeric' style={[tw.p3, tw.bgWhite, tw.roundedFull, { marginTop: hp(1.5), fontSize: hp(2.5), paddingLeft: hp(3) }]} value={amount} onChangeText={value => setAmount(value)} />
                    </View>

                    <View style={[tw.mX2,]}>
                        <Text style={[tw.textLg, tw.fontBold, { color: '#5e5c5e' }]}>Category</Text>
                        <View style={[tw.flexRow, tw.flexWrap, tw.itemsCenter, { marginTop: hp(1) }]}>
                            {Categories.map(cat => {
                                return (
                                    <TouchableOpacity
                                        key={cat.value}
                                        style={[tw.roundedFull, tw.bgWhite, tw.p3, tw.mB3, tw.mR2, { backgroundColor: cat.value == category ? '#a1d3b4' : '#ffffff' }]} onPress={() => setCategory(cat.value)}>
                                        <Text>{cat.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={handleAddExpense} style={[tw.mY6, tw.roundedFull, tw.itemsCenter, tw.justifyCenter, { backgroundColor: '#fd1641' }]}>
                            <Text style={[tw.textCenter, tw.textWhite, tw.textLg, tw.fontBold, tw.p3]}>Add Expense</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const mapStateToProps = state => ({
    title: state.expense.title,
    amount: state.expense.amount,
    category: state.expense.category,
});

const mapDispatchToProps = dispatch => ({
    setTitle: title => dispatch(setTitle(title)),
    setAmount: amount => dispatch(setAmount(amount)),
    setCategory: category => dispatch(setCategory(category)),
    deleteExpense: () => dispatch(deleteExpense()),
    updateExpense: (title, amount, category) => dispatch(updateExpense(title, amount, category)),
    addExpense: () => {
        // Dispatch an action here to add expense if needed
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
