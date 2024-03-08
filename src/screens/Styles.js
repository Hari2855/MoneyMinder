import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center', 
        position: 'relative'
    },
    img: {
        height: hp(40),
        width: hp(40),
        top: hp(10),
    },
    text: {
        color: '#333',
        fontSize: hp(4),
        fontWeight: '500',
    },
    button: {
        width: wp(90),
        height: hp(7),
        backgroundColor: '#fd1641',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(2),
        marginTop: hp(8)
    },
    text1: {
        color: '#ffffff',
        fontSize: hp(3),
        fontWeight: '500'
    },
    text2: {
        color: '#333',
        marginTop: hp(2),
        fontSize: hp(2.2),
        fontWeight: '500'
    },
    container1: {
        width: wp(93),
        height: hp(65),
        backgroundColor: '#ffffff',
        marginTop: hp(5),
        borderRadius: hp(4),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: hp(2.5)
    },
    text3: {
        color: '#ffffff',
        fontSize: hp(3.5),
        fontWeight: '500',
        marginTop: hp(7)
    },
    text4: {
        alignSelf: 'flex-end',
        color: 'black',
        bottom: hp(3),
        marginRight: hp(1)
    },
    textor: {
        fontSize: hp(3),
        color: 'gray',
        marginTop: hp(3),
        fontWeight: '400'
    },
    input: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: hp(2),
        color: '#333',
        fontWeight: '500',
        marginTop: hp(8)
    },
    button1: {
        height: hp(6),
        width: hp(15),
        borderRadius: hp(2.3),
        backgroundColor: '#fd1641',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        marginLeft: hp(3),
        borderWidth: 1.5,
        borderColor: '#ffffff',
        height: hp(5),
        width: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(3),
        marginTop: hp(2),
        alignSelf: 'flex-start'
    },

    view: {
        height: hp(50),
        width: wp(95),
        backgroundColor: '#ffffff',
        marginTop: hp(5),
        borderRadius: hp(5)
    },
    forgate: {
        marginTop: hp(3), 
        fontSize: hp(3.8), 
        alignSelf: 'center', 
        color: 'black' 
    },
    message: {
        fontStyle: 'normal', 
        alignSelf: 'center', 
        color: 'black',
    },
    texte: {
        color: 'black',
        fontSize: hp(2.5),
        marginTop: hp(5),
        marginLeft: hp(3)
    },
    bc: {
        height: hp(2.5),
        width: hp(2.5),
        tintColor: '#ffffff'
    },
    container2: {
        marginHorizontal: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1),
        justifyContent: 'space-between'
    },
    img2: {
        height: hp(7),
        width: hp(7),
        borderRadius: hp(5),
        marginLeft: wp(2),
        borderWidth: 1,
        borderColor: '#fd1641'
    },
    bell: {
        height: hp(5),
        width: hp(5),
        marginRight: hp(1),
        tintColor: '#fd1641'
    },
    textn: {
        fontSize: hp(2.1),
        color: 'gray'
    },
    card: {
        height: hp(25),
        width: hp(45),
        alignSelf: 'center',
        marginTop: hp(2),
        backgroundColor: '#28293c',
        borderRadius: hp(3)
    },
    tbalance: {
        width: wp(80),
        height: hp(8),
        alignSelf: 'center',
        marginTop: hp(2),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tbt: {
        fontSize: hp(2.2),
        color: '#ffffff',
        fontWeight: '400'
    },
    more: {
        height: hp(4),
        width: hp(4),
        tintColor: '#ffffff'
    },
    icontaine: {
        height: hp(3),
        width: hp(3),
        backgroundColor: '#575466',
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrow: {
        height: hp(2.2),
        width: hp(2.2),
        tintColor: '#ffffff'
    },
    tit: {
        color: '#ffffff',
        fontWeight: '400',
        fontSize: hp(2.1)
    },
    rupee: {
        color: '#ffffff',
        fontSize: hp(3),
        fontWeight: '500',
        marginLeft: hp(0.5)

    },
    tc: {
        fontSize: hp(3),
        color: '#575466',
        fontWeight: '600',
        marginLeft: hp(2.5),
        marginTop: hp(3)
    },
    date: {
        flexDirection: 'row',
        marginLeft: hp(2.7),
        marginTop: hp(1),
        alignItems: 'center'
    },
    day: {
        fontSize: hp(2.5),
        color: '#575466',
        fontWeight: '600'
    },
    tr: {
       color: '#b4b3b4' ,
       marginLeft: hp(1),
       fontSize: hp(2.3),
       fontWeight: '400'
    },
    cart: {
        height: hp(12),
        width: wp(90),
        backgroundColor: '#f8f8f8',
        alignSelf: 'center',
        borderRadius: hp(3),
        marginTop: hp(2),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: hp(1)
    },
    imgc: {
        height: hp(7),
        width: hp(7),
        backgroundColor: '#fce5c3',
        borderRadius: hp(2.2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartimg: {
        height: hp(5),
        width: hp(5)
    },
    storetext: {
        fontSize: hp(2.3),
        color: '#575466',
        fontWeight: '600',
        marginLeft: hp(2),
        marginTop: hp(0.5)
    },
    tt: {
        fontSize: hp(1.7), 
        color: '#8e8d8e', 
        fontWeight: '400',
        marginLeft: hp(2)
    },
    container3: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        marginTop: hp(2),
        borderTopRightRadius: hp(5),
        borderTopLeftRadius: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    mcontainer: {
        width: '90%',
        height: hp(5),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    rimg: {
        width: hp(4),
        height: hp(4),
        tintColor: '#ffffff'
    },
    exp: {
        color: '#ffffff',
        fontSize: hp(2.7),
        fontWeight: '500'
    },
    rcontainer: {
        alignSelf: 'flex-start',
        marginLeft: hp(2.5),
        marginTop: hp(10)
    },
    que: {
        color: '#ffffff',
        fontSize: hp(2.3),
        fontWeight: '500'
    },
    input1: {
        fontSize: hp(5),
        color: '#ffffff',
        fontWeight: '500',
        width: '90%',
        marginLeft: hp(0.5)
    },
    scontainer: {
        width: wp(90),
        height: hp(7),
        borderWidth: 1.5,
        borderColor: '#ededed',
        borderRadius: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(5)
    },
    cimg: {
        height: hp(3),
        width: hp(3),
        tintColor: '#989899',
        marginLeft: hp(2)
    },
    textc: {
        fontSize: hp(2.4),
        color: '#959495',
        marginLeft: hp(2)
    },
    button2: {
        width: wp(90),
        height: hp(7),
        backgroundColor: '#fd1641',
        alignSelf: 'center',
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(15)
    },
    buttontext: {
        fontSize: hp(2.7),
        color: '#ffffff', 
        fontWeight: '500'
    },
    aimg: {
        height: hp(50),
        width: hp(50)
    }
})

export default styles