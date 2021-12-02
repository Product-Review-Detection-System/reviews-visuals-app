import React from 'react';
import { View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileCard = ({ name, regNumber, imageURL }) => {


    return (

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>

            <Image
                style={{ height: 100, width: 100, borderRadius: 20, marginRight: 20 }}
                source={imageURL}
            />
            <View>
                <Text style={{ color: 'black', fontSize: hp('2%'), textAlign: 'center' }}>
                    {name}
                </Text>

                <Text>
                    {'\n'} {regNumber}
                </Text>

            </View>
        </View>
    )
}
export default ProfileCard;