import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Colors } from "../Styles/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const ProductDetails = ({ navigation, route }) => {

    const { itemObject } = route.params;

    const [postiveReview, setPositiveReview] = useState([])
    const [negativeReview, setNegativeReview] = useState([])
    const [allReviews, setAllReviews] = useState([])

    const [completeResult, setCompleteResult] = useState('')
    // console.log("Hello prodiuct is: ", JSON.stringify(itemObject))
    useEffect(() => {
        // console.log("We called it: ",JSON.parse(itemObject))

        const MyData = JSON.parse(itemObject)

        console.log("Image is: ", MyData.data.result.itemPic)
        setCompleteResult(MyData.data)
        // console.log("My Data", MyData.data.result.predictions)
        const mainArray = MyData.data.result.predictions
        setAllReviews(MyData.data.result.predictions)
        const positiveReviewsAre = mainArray.filter((item) => item > 0.5)
        setPositiveReview(positiveReviewsAre)

        const negativeReviewsAre = mainArray.filter((item) => item < 0.5)
        // console.log("Negative are: ", negativeReviewsAre)
        setNegativeReview(negativeReviewsAre)




    }, [])

    useEffect(() => {
        if (completeResult) {
            // console.log("Complete result is: ", completeResult.result.reviews)

        }
    }, [completeResult])

    const GetPercentage = (review) => {
        const total = allReviews.length
        const myValue = review
        const percentageIS = (myValue * 100) / total
        return percentageIS
    }


    return (
        <View style={styles.container}>
            <ScrollView >
                {completeResult ?
                    <>
                        <Image
                            source={{ uri: completeResult.result.itemPic }}
                            style={{ height: 200, resizeMode: 'contain', width: 200 }}

                        />
                        <View>
                            <Text style={{ color: 'black', fontSize: hp('3%'), textAlign: 'center', fontWeight: 'bold' }}>
                                {completeResult.result.itemTitle}
                            </Text>
                        </View>
                    </>
                    :
                    null
                }

                <View style={{ marginLeft: 20, flexDirection: 'row', width: wp('80%'), justifyContent: 'space-between', marginTop: hp('3%') }}>
                    <View style={{ alignItems: 'center' }}>
                        <AnimatedCircularProgress
                            size={100}
                            width={10}
                            fill={GetPercentage(postiveReview.length)}
                            tintColor='green'
                            backgroundColor={Colors.secondaryBackground}
                        >
                            {
                                () => (
                                    <Text>
                                        {/* {this.state.fill} */}
                                        {postiveReview.length}
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={{ marginTop: 20, }}>
                            Positve Predictions
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <AnimatedCircularProgress
                            size={100}
                            width={10}
                            fill={GetPercentage(negativeReview.length)}
                            tintColor={Colors.mainColor}
                            backgroundColor={Colors.secondaryBackground}
                        >
                            {
                                () => (
                                    <Text>
                                        {/* {this.state.fill} */}
                                        {negativeReview.length}
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={{ marginTop: 20 }}>
                            Negative Predictions
                        </Text>
                    </View>
                </View>


                {allReviews.length > 0 ?
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Reviews Prediction Graph</Text>
                        <LineChart
                            data={{
                                labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
                                datasets: [
                                    {
                                        data: allReviews
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            // yAxisLabel="$"
                            // yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#e26a00",
                                backgroundGradientFrom: "#fb8c00",
                                backgroundGradientTo: "#ffa726",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                    :
                    null
                }
                <Text style={{ fontWeight: 'bold', fontSize: hp('3%'), color: 'black' }}>
                    Reviews of products
                </Text>

                {completeResult ?
                    <>
                        {completeResult.result.reviews.map((value, index) => {
                            return (
                                <View key={index} style={{ marginTop: 10 }}>
                                    <Text style={{ color: 'black' }}> <Text style={{ fontWeight: 'bold' }}>
                                        {index}:</Text> {value}</Text>
                                    <Text>------------------------------------------------------</Text>
                                </View>
                            )
                        })}
                    </>
                    :
                    null
                }


            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
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