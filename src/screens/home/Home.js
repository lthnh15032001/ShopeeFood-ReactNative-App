import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Navigation } from "react-native-navigation";
import { Header } from '../../components/Header'
import { Icon, Container } from '../../components/'
import { colorStyles } from '../../styles/ColorStyles'

export const Home = ({ props }) => {
	Navigation.registerComponent('HeaderComponent', () => Header)
	const BackButton = () => <Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
	Navigation.registerComponent('BackButton', () => BackButton)
	Navigation.mergeOptions(props.componentId, {
		topBar: {
			animate: true,
			title: {
				component: {
					id: 'HeaderComponent',
					name: 'HeaderComponent',
					alignment: 'center',
					passProps: {
						title: "Home"
					}
				}
			},
			rightButtons: [
				{
					text: 'next',
					id: 'saveMembers'
				},
				{
					// icon: require('../../img/ic_find.png'),
					id: 'search'
				}
			],
			leftButtons: [
				{
					id: 'cancel',
					text: 'back',
					component: {
						name: 'BackButton',
						id: 'BackButton'
					}
					// icon: require('../../img/ic_close.png')
				}
			]
		}
	})
	return (
		<Container style={styles.container}>
			<Text>Main Categories</Text>
		</Container>
	)
}
const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center'
	}
})


	// < TouchableOpacity onPress = {() => Navigation.popTo('LOGIN_SCREEN')}>
	// 			<Text>CLICK</Text>
	// 			<Icon AntDesign size={20} color={colorStyles.grayChateau} name="arrowright" />
	// 		</TouchableOpacity > 