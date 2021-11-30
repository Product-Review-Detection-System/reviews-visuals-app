import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    LogBox

} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Colors } from "../Styles/Color";

LogBox.ignoreAllLogs();

const slides = [
    {
        key: 1,
        text: 'Welcome to A.I Based Product Review Detection System',
        details: 'We are A.I powered fake review detection system we uses advance machine learning algorithm to check/verify products reviews',
        image: require('../../assets/review.png'),
        backgroundColor: '#59b2ab',
    },
    // {
    //   key: 2,
    //   text: 'Upload Photo',
    //   details: 'Upload a photo* of the piece you’d like framed from your desktop, mobile device, or Instagram.',
    //   image: require('../../../assets/upload_icon.png'),
    //   backgroundColor: '#febe29',
    // },
    // {
    //   key: 3,
    //   text: 'Full Custom Framing',
    //   details: 'A great fit for uniquely sized items or extra special pieces! We offer custom framing for any size of project. Schedule a home visit with one of our expert designers.',
    //   image: require('../../../assets/frame.png'),
    //   backgroundColor: '#22bcb5',
    // },
    // {
    //   key: 4,
    //   text: 'Get Delivered',
    //   details: 'Get deliver your farme on time.  One of our framing professionals will personally pick-up and deliver your finished product. ',
    //   image: require('../../../assets/get_deliver.png'),
    //   backgroundColor: '#22bcb5',
    // }
];

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const renderItem = ({ item }) => {

    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.image}
                    style={styles.imageStyle}
                />
                <View style={{ marginTop: '5%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {item.text}
                    </Text>
                    <Text style={{ marginTop: '3%', textAlign: 'center', marginHorizontal: '8%', color: 'grey' }}>
                        {item.details}
                    </Text>
                </View>
            </View>
        </View>
    );
}


const WelcomeScreen = () => {

    const StarIcon = (props) => (
        // <EvilIcons name='chevron-right' size={hp('6%')} color="white"  />
        <View></View>
    );

    const navigation = useNavigation();

    return (
        <>
            <StatusBar barStyle="white" backgroundColor={Colors.mainColor} />
            <View style={styles.container}>
                <View style={styles.introView}>
                    <AppIntroSlider
                        keyExtractor={item => item.key.toString()}
                        disableVirtualization
                        showNextButton={false}
                        renderItem={renderItem}
                        data={slides}
                    // dotStyle={styles.dotStyle}
                    // activeDotStyle={styles.activeDotStyle}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.ButtonStyle}>


                    <Text style={{ color: 'white', fontSize: hp('2.7%'), fontWeight: 'bold' }}>
                        GET STARTED
                    </Text>

                </TouchableOpacity>
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    introView: {
        height: height / 1.4,
        width: 300,
        marginTop: height / 15
    },
    dotStyle: {
        backgroundColor: 'grey',
        marginTop: -height / 3,
    },
    activeDotStyle: {
        marginTop: -height / 3,
        backgroundColor: '#FF9800',
        width: 20
    },
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 5.1,
        height: height / 10,
        borderRadius: 30,
        backgroundColor: 'black',
        marginTop: '10%',

    },
    imageStyle: {
        height: height / 2,
        width: width,
        resizeMode: 'contain'
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
});



export default WelcomeScreen;