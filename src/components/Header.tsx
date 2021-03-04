import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Navigation } from "react-native-navigation";
import { Icon } from '../components'
import { colorStyles } from '../styles/ColorStyles'
interface HeaderProps {
	isTitle?: boolean,
	isRightButton?: boolean,
	isLeft?: boolean
}
const Header = (props: HeaderProps) => {
	const renderItem = () => {
		if (props.isTitle) {
			return <TouchableOpacity>
				<TextInput
					style={styles.textinput}
					placeholder="Tìm kiếm"
					value="Lanmark 72 Ha Noi"
				/>
			</TouchableOpacity>
		} else if (props.isRightButton) {
			return (
				<TouchableOpacity onPress={() => console.log("dat")}>
					<Icon Ionicons name='ios-cart-outline' color={colorStyles.curiousBlue} size={28} />
				</TouchableOpacity>
				)
		} else {
			return (
				<TouchableOpacity onPress={() => console.log("dat")}>
					<Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
				</TouchableOpacity>)
		}
	}
	return renderItem()
}
const styles = StyleSheet.create({
	textinput: {
		// borderWidth: 0.25,
		paddingVertical: 7,
		paddingHorizontal: 70,
		borderRadius: 27,
		backgroundColor: '#f5f5f6'
	},
	container: {

	},
	headerText: {
		fontSize: 18,
		fontWeight: '900'
	}
})
export default Header