import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import { Navigation } from "react-native-navigation";
import { Icon } from '../components'
import { colorStyles } from '../styles/ColorStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
interface HeaderProps {
	isTitle?: boolean,
	isRightButton?: boolean,
	isLeft?: boolean
}
const Header = (props: HeaderProps) => {
	const renderLeftComponent = () => {
		return <TouchableOpacity onPress={() => console.log("dat")}>
			<Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
		</TouchableOpacity>
	}
	const renderTitle = () => {
		return <TouchableOpacity>
			<TextInput
				style={styles.textinput}
				placeholder="Tìm kiếm"
				value="Lanmark 72 Ha Noi"
			/>
		</TouchableOpacity>
	}
	const renderRightComponent = () => {
		return <TouchableOpacity onPress={() => console.log("dat")}>
			<Icon Ionicons name='ios-cart-outline' color={colorStyles.curiousBlue} size={28} />
		</TouchableOpacity>
	}
	return (
		<SafeAreaView style={[styles.headerContainer]} >
			<StatusBar
				barStyle='light-content'
				backgroundColor="transparent"
				translucent={true}
			/>
			<View style={styles.header}>
				{renderLeftComponent()}
				{renderTitle()}
				{renderRightComponent()}
			</View>
		</SafeAreaView>

	)
}
const styles = StyleSheet.create({
	textinput: {
		// borderWidth: 0.25,
		paddingVertical: 7,
		paddingHorizontal: 70,
		borderRadius: 27,
		backgroundColor: '#f5f5f6',
	},
	headerContainer: {
		// paddingTop: 45,
		// paddingLeft: 15,
		// paddingRight: 15,
		justifyContent: 'flex-end',
		backgroundColor: colorStyles.white,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2,
		paddingBottom: 13

	},
	header: {
		height: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	}
})

Header.propTypes = {
	title: PropTypes.string,
	onClose: PropTypes.func,
	leftComponent: PropTypes.element,
	rightComponent: PropTypes.element,
	testID: PropTypes.string,
	accessibilityLabel: PropTypes.string,
	leftOnPress: PropTypes.func,
	menuType: PropTypes.number,
	defaultHeader: PropTypes.string,
};
export default Header