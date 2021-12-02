import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Colors } from "../Styles/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import LoadingProcess from "../components/LoadingProcess";
import { Alert, useToast, Modal as NativeModal } from "native-base";
import ProfileCard from "../components/ProfileCard";

const Home = (props) => {

    const URL = 'https://www.daraz.pk/products/redmi-10-4gb-ram128gb-rom-helio-processor-i249489318-s1467433383.html?spm=a2a0e.searchlistcategory.list.1.1e9615c66kdA9Y&search=1'

    const [searchText, setSearchText] = useState('')

    const [loading, setLoading] = useState(false)
    const [displayError, setDisplayError] = useState('')

    const postRequest = () => {
        setDisplayError('')
        setLoading(true)

        if (searchText) {
            console.log("I am called [please waiyt")

            axios.post('https://api057.herokuapp.com/api/v1/', {
                web_address: searchText
            })
                .then(function (response) {
                    console.log("Suucesss")
                    console.log(response);
                    // props.navigation.navigate('ProductDetails', {
                    //     itemIs: response
                    // })
                    setLoading(false)

                    const ResquestData = JSON.stringify(response)
                    props.navigation.navigate('ProductDetails', {
                        itemObject: ResquestData,
                        // comingfrom: 'tasks'
                    })
                })
                .catch(function (error) {
                    console.log("Failed")
                    console.log(error);
                    setLoading(false)
                    setDisplayError('Something went wrong')
                });
        }
        else {
            setDisplayError('Please Enter URL')
            setLoading(false)
        }


        console.log("DOnt have run")
    }

    return (

        <KeyboardAvoidingView onPress={Keyboard.dismiss} style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={{ width: wp('90%'), marginTop: hp('4%') }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>
                        Product URL
                    </Text>

                    <NativeModal isOpen={loading} onClose={() => console.log("Not close")}>
                        <LoadingProcess title='Loading' subHeading='Please wait a moment' />
                    </NativeModal>

                    <TextInput
                        placeholder="Enter Product URL"
                        style={{
                            backgroundColor: 'white',
                            padding: 10,
                            marginTop: 5,
                            marginBottom: 10,
                            width: wp('90%'),
                            height: hp('25%'),
                            fontSize: hp('2.3'),
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: Colors.mainColor,
                            color: '#333333',
                            alignItems: 'flex-start',
                            textAlignVertical: 'top'
                            // 

                        }}
                        onChangeText={text => {
                            // setSubmissionTitle(text)
                            setDisplayError('')
                            setSearchText(text)
                        }}
                        value={searchText}
                        autoCapitalize='none'
                        // keyboardType='email-address'
                        autoCorrect={false}
                        numberOfLines={8}
                        multiline={true}
                        maxLength={500}

                    />

                    {
                        displayError ?
                            <View style={{ marginTop: hp('2%'), alignItems: 'center' }}>
                                <Alert w="90%" status="error">
                                    <Alert.Icon />
                                    {/* <Alert.Title>Login Error</Alert.Title> */}
                                    <Text style={{ fontFamily: 'Mali-Medium' }}>
                                        {displayError}
                                    </Text>
                                </Alert>
                            </View>
                            :
                            null
                    }

                    <TouchableOpacity onPress={() => postRequest()}
                        style={styles.ButtonStyle}>
                        <Text style={{ color: 'white', fontSize: hp('2.7%'), fontWeight: 'bold' }}>
                            START
                        </Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 20, width: wp('90%') }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: hp('3%') }}>
                            How it work ?
                        </Text>
                        <Text>
                            we are a platform in which the user can validate the product he/she wants to buy online. User can paste URL of the product to the application and hence we run AI models on the server for the resultant validation of the product on the basis of some factors i.e., Reviews, comments & ratings. User can product’s validation by means of Percentage.
                        </Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: hp('3%') }}>
                            About Team
                        </Text>
                    </View>
                    <View style={{ marginTop: hp('2%') }}>
                        <ProfileCard
                            name='Fahad Shaikh (GL)'
                            imageURL={require('../../assets/Fahad.jpeg')}
                            regNumber='550BCS/18-S/9'
                        />
                        <ProfileCard
                            name='Hassan Zakiullah'
                            imageURL={require('../../assets/Hassan.jpeg')}
                            regNumber='588BCS/18-S/9'
                        />
                        <ProfileCard
                            name='Hassan Parwani'
                            imageURL={require('../../assets/Parwani.jpeg')}
                            regNumber='560BCS/18-S/9'
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}



const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'

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
    ButtonStyle: {
        backgroundColor: Colors.mainColor,
        marginHorizontal: '5%',
        height: hp('8%'),
        marginTop: hp('5%'),
        borderColor: 'white',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 15

    },
    signupText: {
        flexDirection: 'row',
        marginTop: (Dimensions.get('window').height) / 29,
        marginBottom: '20%',
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