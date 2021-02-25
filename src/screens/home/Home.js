import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Navigation } from "react-native-navigation";
import { Header } from '../../components/Header'
Navigation.registerComponent('HeaderComponent', () => Header)
export const Home = ({ props }) => {
    // console.log({ props: props.componentId })
    Navigation.mergeOptions(props.componentId, {
        topBar: {
            animate: true,
            title: {
                component: {
                    id: 'HeaderComponent',
                    name: 'HeaderComponent',
                    alignment: 'center',
                    passProps: {
                        title: "Home"
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
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Navigation.popTo('LOGIN_SCREEN')}>
                <Text>CLICK</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
