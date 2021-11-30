import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, } from 'react-native';
import { Button, Modal, Divider, Flex, Spinner } from "native-base";
import { Colors } from '../Styles/Color';
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const LoadingProcess = ({ title, subHeading }) => {



    const [indeterminate, setIndeterminate] = useState(false)

    useEffect(() => {

        setIndeterminate(true)

    }, [])
    return (

        <Modal.Content maxWidth={wp('90%')}>
            {/* <Modal.Header>Payment Process</Modal.Header> */}
            <Modal.Body style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <Image
                    style={{ height: 120, width: 120 }}
                    source={require('../../assets/Background/activityCompleted.png')}
                /> */}
                <View>
                    <Text
                        style={{ fontSize: 20, marginVertical: 5, color: Colors.mainColor, textAlign: 'center' }}>
                        {/* Proccessing Payment */}
                        {title}
                    </Text>
                    <Text style={{ marginBottom: 20, textAlign: 'center', color: 'black', }}>
                        {/* Please wait while we are processing your payment */}
                        {subHeading}
                        {/* Easy Paisa Customers to “Approve” transaction from EasyPaisa App under “My Approvals” */}
                    </Text>

                    <Progress.Bar style={{ backgroundColor: 'white' }}
                        width={wp('70%')} indeterminate={indeterminate}
                        color={Colors.mainColor}
                        borderRadius={1}
                    />
                </View>
            </Modal.Body>
        </Modal.Content>

    );
}

export default LoadingProcess;