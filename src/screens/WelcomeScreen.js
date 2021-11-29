import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from "../Styles/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

const WelcomeScreen = (props) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => props.navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Let's go to Home
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',

    },
    BackgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },
    heading: {
        marginLeft: '10%'
    },
    text: {
        fontSize: hp('4%'),
        marginBottom: 10,
        // color: Colors.DarkText,
        // fontFamily: 'Bungee-Regular',

    },
    navButton: {
        marginTop: 15,
        fontWeight: 'bold',
    },
    navButtonText: {
        fontSize: hp('2.2%'),
        // color: Colors.DarkText,
        marginTop: hp('5%'),
        textAlign: 'center'
    },
    forgetButton: {
        textAlign: 'center',
        // fontFamily: 'Mali-Medium',
        // color: Colors.Background,
        marginTop: '3%'
    },
    buttonContainer: {
        width: wp('90%'),
        marginTop: hp('3%'),
        borderRadius: hp('1.5%'),
        borderWidth: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBC8EE'
    },
    buttonText: {
        fontSize: hp('4%'),
        // color: Colors.Background,
        // fontFamily: 'Bungee-Regular',

    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: wp('90%'),
        height: hp('7%'),
        fontSize: hp('2.3'),
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#C0C0C0',
        color: '#333333',

    },
    redBorder: {
        borderColor: 'red'
    }
});

export default WelcomeScreen;