import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { colorStyles } from '../../styles/ColorStyles'
export const Item = (props: any) => {
	const { item, index } = props
	return (
		<TouchableOpacity
			onPress={() => {
				
			}}
		style={[styles.container, { backgroundColor: index === 0 ? colorStyles.pomegranate : colorStyles.white }]}>
			<View style={[styles.radius, { backgroundColor: index === 0 ? colorStyles.white : colorStyles.mercury }]}>
				<Image
					style={styles.tinyLogo}
					source={require('../../assets/Hamburger.png')}
					resizeMode='contain'
				/>
			</View>
			<Text style={[styles.textUnderbox, {color: index === 0 ? colorStyles.white : colorStyles.black}]}>
				{item.name}
			</Text>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	container: {
		marginRight: 14,
		marginVertical: 10,
		padding: 13,
		// backgroundColor: colorStyles.pomegranate,
		height: 120,
		borderRadius: 60,
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	textUnderbox: {
		fontWeight: '800',
		fontSize: 13,
		marginBottom: 10
	},
	tinyLogo: {
		width: 40,
		height: 40,
	},
	radius: {
		backgroundColor: colorStyles.white,
		borderRadius: 50,
		padding: 7,
		marginBottom: 10
	}
})