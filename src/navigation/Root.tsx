import React from 'react'
import { Navigation } from "react-native-navigation";
import { Login, Register } from '../screens/authen'
import { Detail_Product } from '../components'

import { Header } from '../components/Header'
// const BackButton = (): any => {
// 	return (
// 		<TouchableOpacity onPress={() => console.log("dat")}>
// 			<Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
// 		</TouchableOpacity>
// 	)
// }

Navigation.registerComponent('LOGIN_SCREEN', () => Login);
Navigation.registerComponent('REGISTER_SCREEN', () => Register);
Navigation.registerComponent('HeaderComponent', () => Header)
Navigation.registerComponent('DETAIL_PRODUCT', () => Detail_Product)
export const rootStack = (root: any) => {
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
													component: {
														id: "HeaderComponent",
														name: "HeaderComponent",
														alignment: 'center',
														passProps: {
															isTitle: true,
														}
													}
												},
												rightButtons: [
													{
														id: "HeaderComponent",
														component: {
															name: "HeaderComponent",
															passProps: {
																isRightButton: true
															}
														}
													}
												],
												leftButtons: [
													{
														id: "HeaderComponent",
														component: {
															name: "HeaderComponent",
															passProps: {
																isLeft: true
															}
														}
													}
												]
											}
										}
									}
								},
								
							],
							options: {
								bottomTab: {
									text: 'Home',
									icon: require('../assets/HomeSelect.png'),
									selectedIconColor: 'black',
									selectedTextColor: 'black'
								},
								layout: {
									backgroundColor: 'black'
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
							id: 'REGISTER_SCREEN',
							children: [
								{
									component: {
										id: 'REGISTER_SCREEN',
										name: 'REGISTER_SCREEN',
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
							id: 'REGISTER_SCREEN',
							children: [
								{
									component: {
										id: 'REGISTER_SCREEN',
										name: 'REGISTER_SCREEN',
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
									text: 'Tôi',
									icon: require('../assets/user.png'),
									selectedIconColor: 'black',
									selectedTextColor: 'black'
								}
							}
						}
					},
				]
			}
		}
	});
}
