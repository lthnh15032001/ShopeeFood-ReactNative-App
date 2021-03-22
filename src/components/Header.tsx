import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import { Navigation } from "react-native-navigation";
import { Icon } from '../components'
import { colorStyles } from '../styles/ColorStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import UI from '../stores/UI'
import { observer } from 'mobx-react'
import Orders from '../stores/Orders'
interface HeaderProps {
	componentId?: string,
	handleBack?: Function,
	type?: number,
	titleName? : string
}
const Header = observer((props: HeaderProps) => {
	// console.log({component: UI.previousComponentIdScreen})
	// console.log({component: UI.componentId})
	// console.log({ handleBack: props.handleBack })
	useEffect(() => {

	}, [props.componentId])
	const renderLeftComponent = () => {
		// console.log(props.componentId)
		return <TouchableOpacity onPress={() => {
			{ props.handleBack ? props.handleBack() : Navigation.popTo(props.componentId as string) }
			// console.log(props.componentId)
		}
		}
		>
			<Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
		</TouchableOpacity>
	}
	const renderTitle = (type = 3) => {
		if (type == 2) {
			return <Text style={{
				fontSize: 18,
				fontWeight: '600',
				paddingLeft: 10,
			}}>{props.titleName}</Text>;
		} else {
			return <TouchableOpacity>
				<TextInput
					style={styles.textinput}
					placeholder="Tìm kiếm"
					value="Lanmark 72 Ha Noi"
				/>
			</TouchableOpacity>
		}
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
			<View style={[styles.header, { justifyContent: props.type ? 'flex-start' : 'space-around', marginLeft: props.type === 2 ? 10 : 0 }]}>
				{
					props.type === 2 ?
						<>
							{renderLeftComponent()}
							{renderTitle(props.type)}
						</> :
						<>
							{renderLeftComponent()}
							{renderTitle()}
							{renderRightComponent()}
						</>
				}
				{/* {renderLeftComponent()}
				{renderTitle()}
				{renderRightComponent()} */}
			</View>
		</SafeAreaView>

	)
})
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