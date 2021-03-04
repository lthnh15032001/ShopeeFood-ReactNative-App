import { Navigation } from 'react-native-navigation'
import Home from './home/Home'
import LoginScreen from './authen/Login'
import RegisterScreen from './authen/Register'
import AccountScreen from './account/AccountScreen'
import Header from '../components/Header'
export const HOME_SCREEN = 'internapp.HomeScreen'
export const LOGIN_SCREEN = 'internapp.LoginScreen'
export const REGISTER_SCREEN = 'internapp.RegisterScreen'
export const ACCOUNT_SCREEN = 'internapp.AccountScreen'
export const HEADER = 'component.Header'
export const Screens = new Map()
// screen 
Screens.set(HOME_SCREEN, Home);
Screens.set(LOGIN_SCREEN, LoginScreen);
Screens.set(REGISTER_SCREEN, RegisterScreen);
Screens.set(ACCOUNT_SCREEN, AccountScreen)
// component
Screens.set(HEADER, Header)
export const startApp = () => {
	const tabs = [
		{
			stack: {
				id: "HOME_SCREEN",
				children: [
					{
						component: {
							name: HOME_SCREEN,
						}
					}
				]
			}
		},
		{
			stack: {
				id: "LOGIN_SCREEN",
				children: [
					{
						component: {
							name: LOGIN_SCREEN,
							// options: {
							// 	topBar: {
							// 		animate: true,
							// 		title: {
							// 			text: "Login"
							// 		},
							// 		rightButtons: [
							// 			{
							// 				text: 'next',
							// 				id: 'saveMembers'
							// 			},
							// 			{
							// 				id: 'search'
							// 			}
							// 		],
							// 		leftButtons: [
							// 			{
							// 				id: 'cancel',
							// 				text: 'back'
							// 			}
							// 		]
							// 	}
							// }
						}
					}
				],
				options: {
					bottomTab: {
						text: 'Đã lưu',
						icon: require('../assets/heart.png'),
						selectedIconColor: 'black',
						selectedTextColor: 'black'
					}
				}
			}
		},
		{
			stack: {
				id: "REGISTER_SCREEN",
				children: [
					{
						component: {
							name: REGISTER_SCREEN,
							// options: {
							// 	topBar: {
							// 		animate: true,
							// 		title: {
							// 			text: "Login"
							// 		},
							// 		rightButtons: [
							// 			{
							// 				text: 'next',
							// 				id: 'saveMembers'
							// 			},
							// 			{
							// 				id: 'search'
							// 			}
							// 		],
							// 		leftButtons: [
							// 			{
							// 				id: 'cancel',
							// 				text: 'back'
							// 			}
							// 		]
							// 	}
							// }
						}
					}
				],
				options: {
					bottomTab: {
						text: 'Đơn hàng',
						icon: require('../assets/Vector.png'),
						selectedIconColor: 'black',
						selectedTextColor: 'black',
						iconWidth: 20,
						iconHeight: 20
					}
				}
			}
		},
		{
			stack: {
				id: "ACCOUNT_SCREEN",
				children: [
					{
						component: {
							name: ACCOUNT_SCREEN,
							options: {
								topBar: {
									animate: true,
									// title: {
									// 	text: "Login"
									// },
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
						text: 'Tôi',
						icon: require('../assets/user.png'),
						selectedIconColor: 'black',
						selectedTextColor: 'black'
					}
				}
			}
		},
	]
	return Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'ROOT',
				children: tabs
			}
		}
	})
}

