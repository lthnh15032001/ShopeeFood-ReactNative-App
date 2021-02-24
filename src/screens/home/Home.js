import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
export const Home = () => {
    return (
        <View style={styles.container}>
            <Text >
                12
            </Text>
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