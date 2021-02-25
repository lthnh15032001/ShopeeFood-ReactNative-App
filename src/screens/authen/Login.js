import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { Navigation } from "react-native-navigation";

export const Login = (props) => {
    Navigation.mergeOptions(props.componentId, {
        topBar: {
            animate: true,
            title: {
                component: {
                    id: 'HeaderComponent',
                    name: 'HeaderComponent',
                    alignment: 'center',
                    passProps: {
                        title : "Login"
                    }
                }
            },
            rightButtons: [
                {
                    text: 'next',
                    id: 'saveMembers'
                },
                {
                    // icon: require('../../img/ic_find.png'),
                    id: 'search'
                }
            ],
            leftButtons: [
                {
                    id: 'cancel',
                    text: 'back'
                    // icon: require('../../img/ic_close.png')
                }
            ]
        }
    })
    return (
        <View>
            <Text>LOginnnnn</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})