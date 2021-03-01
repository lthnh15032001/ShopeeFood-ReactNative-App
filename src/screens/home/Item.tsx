import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colorStyles } from '../../styles/ColorStyles'
export const Item = (props : any) => {
	const { item, index } = props
	return (
		<View style={styles.container}>
			<View style={styles.radius}>
				<Image
					style={styles.tinyLogo}
					source={require('../../assets/Hamburger.png')}
					resizeMode='contain'
				/>
			</View>
			<Text style={styles.textUnderbox}>
				{item.name}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginRight: 14,
		marginVertical: 10,
		padding: 13,
		backgroundColor: colorStyles.pomegranate,
		height: 120,
		borderRadius: 60,
		width: 80,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textUnderbox: {
		color: colorStyles.white,
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