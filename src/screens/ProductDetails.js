import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from "../Styles/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProductDetails = ({ navigation, route }) => {

    const { itemObject } = route.params;

    const [postiveReview, setPositiveReview] = useState([])
    const [negativeReview, setNegativeReview] = useState([])
    const [allReviews, setAllReviews] = useState([])
    // console.log("Hello prodiuct is: ", JSON.stringify(itemObject))
    useEffect(() => {
        // console.log("We called it: ",JSON.parse(itemObject))

        const MyData = JSON.parse(itemObject)

        // console.log("My Data", MyData.data.result.predictions)
        const mainArray = MyData.data.result.predictions
        setAllReviews(MyData.data.result.predictions)
        const positiveReviewsAre = mainArray.filter((item) => item > 0.5)
        setPositiveReview(positiveReviewsAre)

        const negativeReviewsAre = mainArray.filter((item) => item < 0.5)
        // console.log("Negative are: ", negativeReviewsAre)
        setNegativeReview(negativeReviewsAre)




    }, [])

    const GetPercentage = () => {
        const total = allReviews.length
        const myValue = 70
        const percentageIS = (myValue*100)/total
        return percentageIS
    }


    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.buttonContainer}
            // onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>
                    {allReviews.length}
                </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row'}}>
                <AnimatedCircularProgress
                    size={100}
                    width={10}
                    fill={GetPercentage}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                        (fill) => (
                            <Text>
                                {/* {this.state.fill} */}
                                {allReviews.length}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <AnimatedCircularProgress
                    size={100}
                    width={10}
                    fill={80}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                        (fill) => (
                            <Text>
                                {/* {this.state.fill} */}
                                {allReviews.length}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
            </View>
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

export default ProductDetails;