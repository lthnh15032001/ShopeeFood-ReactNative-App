import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Navigation } from "react-native-navigation";
import { Header } from '../../components/Header'
import { Icon, Container } from '../../components/'
import { colorStyles } from '../../styles/ColorStyles'
import { HomeScrollHeader } from './HomeScrollHeader'
const BackButton = () => <Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
export const Home = ({ props }) => {
	Navigation.registerComponent('HeaderComponent', () => Header)
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


	// < TouchableOpacity onPress = {() => Navigation.popTo('LOGIN_SCREEN')}>
	// 			<Text>CLICK</Text>
	// 			<Icon AntDesign size={20} color={colorStyles.grayChateau} name="arrowright" />
	// 		</TouchableOpacity > 