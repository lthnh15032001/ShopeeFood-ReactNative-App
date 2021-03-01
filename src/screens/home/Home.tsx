import React, { useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container } from '../../components'
import { HomeScrollHeader } from './HomeScrollHeader'
import { baseApi } from '../../api/BaseApi'
export const Home = ({ props }: any) => {
	useEffect(() => {
		callApi()
	}, [])
	const callApi = (): any => {
		const url = baseApi.makeUrl('users')
		console.log({ url: url })
		const data = baseApi.getWithoutToken(url)
		console.log({ data: data })
	}
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