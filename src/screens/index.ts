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
import MapOrderView from './order/MapOrderView'
export const HOME_SCREEN = 'internapp.HomeScreen'
export const LOGIN_SCREEN = 'internapp.LoginScreen'
export const REGISTER_SCREEN = 'internapp.RegisterScreen'
export const ACCOUNT_SCREEN = 'internapp.AccountScreen'
export const RESTAURANT_FOOD_SCREEN = 'internapp.RestaurantFood'
export const CATEGORY_FOOD_SCREEN = 'internapp.CategoryFood'
export const ORDER_SCREEN = 'internapp.OrderScreen'
export const HEADER = 'component.Header'
export const SHOW_ORDER_DETAIL_MODAL = 'internapp.ShowOrderDetailModal'
export const MAP_ORDER_VIEW = 'internapp.MapOrderView'
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
Screens.set(MAP_ORDER_VIEW, MapOrderView)
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
										id: HOME_SCREEN,
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
										id: LOGIN_SCREEN,
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
										id: REGISTER_SCREEN,
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
										id: ACCOUNT_SCREEN,
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
interface HandleBackProps {
	handleBack?: Function
}
export const OrderScreen = (props: HandleBackProps) => {
	// console.log(props)
	Navigation.push(<string>UI.componentId, {
		component: {
			id: ORDER_SCREEN,
			name: ORDER_SCREEN,
			passProps: {
				handleBack: props && props
			}
		},
	})
}
export const DetailProductScreen = (id_restaurant: number, restaurantInfo: any) => {
	// console.log({ Ui: <string>UI.componentId })
	// console.log({ id: id })
	Navigation.push(<string>UI.componentId, {
		component: {
			name: RESTAURANT_FOOD_SCREEN,
			id: RESTAURANT_FOOD_SCREEN,
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
			id: CATEGORY_FOOD_SCREEN,
			passProps: {
				categoryId: categoryId
			}
		}
	})
}
export const MapOrderViewScreen = (componentId: string) => {
	Navigation.push(<string>UI.componentId, {
		component: {
			name: MAP_ORDER_VIEW,
			id: MAP_ORDER_VIEW,
			passProps: {
				prevComponentId: componentId
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