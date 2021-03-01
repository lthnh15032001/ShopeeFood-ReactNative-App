import React from 'react'
import { Navigation } from "react-native-navigation";
import { Login, Register } from '../screens/authen'
import { Icon } from '../components'
import { colorStyles } from '../styles/ColorStyles'
import { TouchableOpacity } from 'react-native';
// import { Header } from '../components/Header'
const BackButton = () : any => {
	return (
		<TouchableOpacity onPress={() => console.log("dat")}>
			<Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
		</TouchableOpacity>
	)
}

Navigation.registerComponent('LOGIN_SCREEN', () => Login);
Navigation.registerComponent('REGISTER_SCREEN', () => Register);
// Navigation.registerComponent('HeaderComponent', () => Header)
Navigation.registerComponent('BackButton', () => BackButton)
export const rootStack = (root : any) => {
	return Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'BOTTOM_TAB_LAYOUT',
				children: [
					{
						stack: {
							id: 'HOME_TAB',
							children: [
								{
									component: {
										id: "ROOT",
										name: root,
										options: {
											topBar: {
												animate: true,
												title: {
													text: "Home"
												},
												rightButtons: [
													{
														text: 'next',
														id: 'saveMembers'
													},
													{
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
													}
												]
											}
										}
									}
								}
							],
							options: {
								bottomTab: {
									text: 'tab1',
									icon: require('../assets/ic_close.png'),
								}
							}
						}
					},
					{
						stack: {
							id: 'AUTHEN_STACK',
							children: [
								{
									component: {
										id: 'LOGIN_SCREEN',
										name: 'LOGIN_SCREEN',
										options: {
											topBar: {
												animate: true,
												title: {
													text: "Login"
												},
												rightButtons: [
													{
														text: 'next',
														id: 'saveMembers'
													},
													{
														id: 'search'
													}
												],
												leftButtons: [
													{
														id: 'cancel',
														text: 'back'
													}
												]
											}
										}
									}
								}
							],
							options: {
								bottomTab: {
									text: 'tab2',
									icon: require('../assets/ic_close.png'),
								}
							}
						}
					}
				]
			}
		}
	});
}
