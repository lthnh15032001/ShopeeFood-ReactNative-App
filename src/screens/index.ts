import { Navigation } from 'react-native-navigation'
import Home from './home/Home'
import LoginScreen from './authen/Login'
import RegisterScreen from './authen/Register'
import AccountScreen from './account/AccountScreen'
// import Header from '../components/Header'
import RestaurantFood from './product/RestaurantFood'
import CategoryFood from './product/CategoryFood'
import Order from './order/Order'
import UI from '../stores/UI'
import ShowOrderDetailModal from './order/ShowOrderDetailModal'
export const HOME_SCREEN = 'internapp.HomeScreen'
export const LOGIN_SCREEN = 'internapp.LoginScreen'
export const REGISTER_SCREEN = 'internapp.RegisterScreen'
export const ACCOUNT_SCREEN = 'internapp.AccountScreen'
export const RESTAURANT_FOOD_SCREEN = 'internapp.RestaurantFood'
export const CATEGORY_FOOD_SCREEN = 'internapp.CategoryFood'
export const ORDER_SCREEN = 'internapp.OrderScreen'
export const HEADER = 'component.Header'
export const SHOW_ORDER_DETAIL_MODAL = 'internapp.ShowOrderDetailModal'
export const Screens = new Map()
// screen 
Screens.set(HOME_SCREEN, Home);
Screens.set(LOGIN_SCREEN, LoginScreen);
Screens.set(REGISTER_SCREEN, RegisterScreen);
Screens.set(ACCOUNT_SCREEN, AccountScreen)
Screens.set(RESTAURANT_FOOD_SCREEN, RestaurantFood)
Screens.set(CATEGORY_FOOD_SCREEN, CategoryFood)
Screens.set(ORDER_SCREEN, Order)
Screens.set(SHOW_ORDER_DETAIL_MODAL, ShowOrderDetailModal)
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
export const OrderScreen = () => {
	Navigation.push(<string>UI.componentId, {
		component: {
			name: ORDER_SCREEN,
		}
	})
}
export const DetailProductScreen = (id_restaurant: number, restaurantInfo: any) => {
	// console.log({ Ui: <string>UI.componentId })
	// console.log({ id: id })
	Navigation.push(<string>UI.componentId, {
		component: {
			name: RESTAURANT_FOOD_SCREEN,
			passProps: {
				id_restaurant: id_restaurant,
				restaurantInfo: restaurantInfo
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
// export const showOrderDetail = () => Navigation.showModal({
// 	stack: {
// 		children: [
// 			{
// 				component: {
// 					name: SHOW_ORDER_DETAIL_MODAL
// 				}
// 			}
// 		]
// 	}
// })