import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container } from '../../components'
import { HomeScrollHeader } from './HomeScrollHeader'
export const Home = ({ props } : any) => {
	return (
		<Container style={styles.container}>
			<Text style={styles.titleHome}>Main {`\n`}Categories</Text>
			<HomeScrollHeader />
		</Container>
	)
}
const styles = StyleSheet.create({
	container: {

	},
	titleHome: {
		fontSize: 32,
		fontWeight: '500'
	}
})