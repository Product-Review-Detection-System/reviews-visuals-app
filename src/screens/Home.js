import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Colors } from "../Styles/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';


const Home = (props) => {

    const URL = 'https://www.daraz.pk/products/redmi-10-4gb-ram128gb-rom-helio-processor-i249489318-s1467433383.html?spm=a2a0e.searchlistcategory.list.1.1e9615c66kdA9Y&search=1'

    const [searchText, setSearchText] = useState('')

    const postRequest = () => {

        console.log("I am called [please waiyt")

        axios.post('https://api057.herokuapp.com/api/v1/', {
            web_address: URL
        })
            .then(function (response) {
                console.log("Suucesss")
                console.log(response);
                // props.navigation.navigate('ProductDetails', {
                //     itemIs: response
                // })

                const ResquestData = JSON.stringify(response)
                props.navigation.navigate('ProductDetails', {
                    itemObject: ResquestData,
                    // comingfrom: 'tasks'
                })
            })
            .catch(function (error) {
                console.log("Failed")
                console.log(error);
            });

        console.log("DOnt have run")
    }

    return (
        <View>
            <TextInput
                placeholder="Email"
                style={{
                    backgroundColor: 'white',
                    padding: 10,
                    marginTop: 5,
                    marginBottom: 10,
                    width: wp('90%'),
                    height: hp('8%'),
                    fontSize: hp('2.3'),
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: '#D04F3A',
                    color: '#333333',
                    // 

                }}
                onChangeText={text => {
                    // dispatch(input({ key: 'email', value: text }))
                    // setErrors({})
                    // dispatch(input({ key: 'error', value: null }))
                    // setDisplayError('')
                    setSearchText(text)
                }}
                value={searchText}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
                autoFocus={true}
            // placeholderTextColor={errors.email ? '#D04F3A' : '#C0C0C0'}
            // placeholderTextColor='#C0C0C0'
            />

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => postRequest()}
            >
                <Text style={styles.buttonText}>
                    Start Detection
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
        color: Colors.DarkText,
        fontFamily: 'Bungee-Regular',

    },
    navButton: {
        marginTop: 15,
        fontWeight: 'bold',
    },
    navButtonText: {
        fontSize: hp('2.2%'),
        color: Colors.DarkText,
        marginTop: hp('5%'),
        textAlign: 'center'
    },
    forgetButton: {
        textAlign: 'center',
        fontFamily: 'Mali-Medium',
        color: Colors.Background,
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
        fontSize: hp('2.8%'),
        color: Colors.Background,
        fontFamily: 'Bungee-Regular',

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

export default Home;