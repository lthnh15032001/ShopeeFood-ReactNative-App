import React from 'react'

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colorStyles } from '../styles/ColorStyles'
import { OrderScreen } from '../screens/'
export const OrderItem = () => {
	return (
		<TouchableOpacity style={{
			position: 'absolute',
			bottom: 20,
			marginHorizontal: 15,
			right: 0,
			left: 0,
			paddingHorizontal: 30,
			paddingVertical: 5,
			backgroundColor: colorStyles.apple,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			borderRadius: 30,
			elevation: 5,
		}}
			onPress={() => OrderScreen()}
		>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<View>
					<Text style={{ fontWeight: '800', color: colorStyles.white }}>1 món</Text>
					<Text style={{ fontWeight: '400', color: colorStyles.white }}>Cơm zăn phfong và Cơm dang Thành Đạt</Text>
				</View>
				<View style={{ justifyContent: 'center', marginLeft: 10 }}>
					<Text style={{ fontWeight: '800', color: colorStyles.white }}>29.000đ</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({

})