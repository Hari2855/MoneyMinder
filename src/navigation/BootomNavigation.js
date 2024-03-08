import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import HomeScreen from '../screens/HomeScreen';
import Graph from '../screens/Grapg';
import Wallet from '../screens/Wallet';
import AddExpenseScreen from '../screens/Add';

enableScreens();
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {


  return (
    <View style={styles.container}>
      <Bottom.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {backgroundColor: '#ffffff', height: 60, width: '100%', alignSelf: 'center',borderTopWidth: 0},
          tabBarLabelStyle: { fontSize: 12, fontWeight: '500', bottom: 8},
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = require('../../assets/images/home.png');
            } else if (route.name === 'Graph') {
              iconName = require('../../assets/images/square.png');
            } else if (route.name === 'Add') {
              iconName = require('../../assets/images/add.png');
            }
            else if (route.name === 'Wallet') {
                iconName = require('../../assets/images/wallet.png');
              }
            return (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={iconName}
                  style={[
                    styles.img,
                    { tintColor: focused ? '#fd1641' : 'gray' },
                  ]}
                />
              </View>
            );
          },
          tabBarActiveTintColor: '#FFC107',
          tabBarInactiveTintColor: '#ffffff',
          tabBarHideOnKeyboard: true
        })}
      >
        <Bottom.Screen name="Home" component={HomeScreen} />
        <Bottom.Screen name="Graph" component={Graph} />
        <Bottom.Screen name="Add" component={AddExpenseScreen} />
        <Bottom.Screen name="Wallet" component={Wallet} />
      </Bottom.Navigator>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  img: {
    height: hp(3.5),
    width: hp(3.5),
  },
});
