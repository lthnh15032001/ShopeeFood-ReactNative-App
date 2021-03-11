import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { colorStyles } from '../../styles/ColorStyles'
import { CategoryFoodScreen } from '../'
export const Item = (props: any) => {
	const { item, index } = props
	return (
		<TouchableOpacity
			onPress={() => {
				CategoryFoodScreen(item.id)
			}}
			style={[styles.container, { backgroundColor: index === 0 ? colorStyles.pomegranate : colorStyles.white }]}>
			<View style={[styles.radius, { backgroundColor: index === 0 ? colorStyles.white : colorStyles.mercury }]}>
				<Image
					style={{
						width: 30,
						height: 30
					}}
					source={{ uri: item.tab_icon[0].value }}
					resizeMode='contain'
				/>
			</View>
			<Text style={[styles.textUnderbox, { color: index === 0 ? colorStyles.white : colorStyles.black }]}>
				{item.name}
			</Text>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	container: {
		marginRight: 14,
		marginVertical: 10,
		padding: 3,
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
		fontWeight: '700',
		fontSize: 13,
		marginBottom: 10
	},
	radius: {
		backgroundColor: colorStyles.white,
		borderRadius: 50,
		padding: 7,
		marginBottom: 10
	}
})