import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Navigation } from "react-native-navigation";

export const Header = (props) => {
    // console.log({ propsLogin: props })
    return (
        <View>
            <Text>{props.title && props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})