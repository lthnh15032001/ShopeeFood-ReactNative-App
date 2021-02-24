import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
export const Container = (props) => {
    const { children } = props
    return (
        <View style={styles.container}>
            {children && children}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
})