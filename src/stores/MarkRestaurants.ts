import { Navigation } from 'react-native-navigation'
import { types, unprotect } from 'mobx-state-tree'
import RestaurantModel from './models/RestaurantModel'
// import DishModel from './models/Dish\bModel'
import OrderType from './models/OrdersModel'
const orderTypes = types.model({
	restaurantId: types.number,
	dishesOrder: types.optional(types.array(OrderType), [])
})
const MarkRestaurantTypes = types
	.model('MarkRestaurant', {
		orderComplete: types.optional(types.array(orderTypes), []),
		restaurantFavorite: types.optional(types.array(RestaurantModel), [])
	})
	.views(self => ({

	}))
	.actions(self => ({
		clear() {
			self.orderComplete.clear();
		},
		add(orderComplete: any,) {
			self.orderComplete.push(orderComplete);
		},
		addFavorite(favorite: any) {
			const isExist = self.restaurantFavorite.findIndex((x, i) => {
				return favorite.id === x.id
			})
			// console.log(isExist)
			isExist < 0 ? self.restaurantFavorite.push(favorite) : self.restaurantFavorite.splice(isExist, 1)

		}
	}))

const MarkRestaurant = MarkRestaurantTypes.create()
unprotect(MarkRestaurant)
export default MarkRestaurant;
