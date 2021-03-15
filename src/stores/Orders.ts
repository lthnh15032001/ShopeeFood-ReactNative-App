import { Navigation } from 'react-native-navigation'
import DishModel from './models/DishModel'
import RestaurantModel from './models/RestaurantModel'
import Services from '../services/Services'
import { types, unprotect } from 'mobx-state-tree'
import { flow } from 'mobx'
const OrderType = types
	.model('Category', {
		orders: types.optional(types.array(DishModel), []),
		isLoading: types.optional(types.boolean, false),
		restaurant: types.optional(types.array(RestaurantModel), [])
	})
	.views(self => ({
		get getOrders() {
			return self.orders
		}
	}))
	.actions(self => ({
		fetchData: flow(function* (id: number) {
			self.isLoading = true;

			self.isLoading = false
		}),
		clear() {
			self.orders.clear()
		},
		addSingleDishes(data: any) {
			self.orders.push(data)
		},

	}))
const Orders = OrderType.create()
unprotect(Orders)
export default Orders;
