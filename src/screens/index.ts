import { Navigation } from 'react-native-navigation'
import Home from './home/Home'
import LoginScreen from './authen/Login'
import RegisterScreen from './authen/Register'
import AccountScreen from './account/AccountScreen'
import Header from '../components/Header'
import RestaurantFood from './product/RestaurantFood'
import CategoryFood from './product/CategoryFood'
import UI from '../stores/UI'
export const HOME_SCREEN = 'internapp.HomeScreen'
export const LOGIN_SCREEN = 'internapp.LoginScreen'
export const REGISTER_SCREEN = 'internapp.RegisterScreen'
export const ACCOUNT_SCREEN = 'internapp.AccountScreen'
export const DETAIL_PRODUCT_SCREEN = 'internapp.DetailProductScreen'
export const CATEGORY_FOOD_SCREEN = 'internapp.CategoryFood'
export const HEADER = 'component.Header'
export const Screens = new Map()
// screen 
Screens.set(HOME_SCREEN, Home);
Screens.set(LOGIN_SCREEN, LoginScreen);
Screens.set(REGISTER_SCREEN, RegisterScreen);
Screens.set(ACCOUNT_SCREEN, AccountScreen)
Screens.set(DETAIL_PRODUCT_SCREEN, RestaurantFood)
Screens.set(CATEGORY_FOOD_SCREEN, CategoryFood)
export const startApp = () => {
	return Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'ROOT',
				children: [
					{
						stack: {
							id: "HOME_SCREEN",
							children: [
								{
									component: {
										name: HOME_SCREEN,
										// options: {
										// 	topBar: {
										// 		visible: false
										// 	}
										// }
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
										name: LOGIN_SCREEN
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
										name: REGISTER_SCREEN
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
										name: ACCOUNT_SCREEN
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
	})
}

export const DetailProductScreen = (id_restaurant: number) => {
	// console.log({ Ui: <string>UI.componentId })
	// console.log({ id: id })
	Navigation.push(<string>UI.componentId, {
		component: {
			name: DETAIL_PRODUCT_SCREEN,
			passProps: {
				id_restaurant: id_restaurant
			}
		}
	})
}
export const CategoryFoodScreen = (categoryId: number) => {
	Navigation.push(<string>UI.componentId, {
		component: {
			name: CATEGORY_FOOD_SCREEN,
			passProps: {
				categoryId: categoryId
			}
		}
	})
}