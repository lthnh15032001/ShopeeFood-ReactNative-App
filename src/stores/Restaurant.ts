import { Navigation } from 'react-native-navigation'
import { protect, unprotect, types } from 'mobx-state-tree'
import { flow } from 'mobx'
import RestaurantModel from './models/RestaurantModel'
import Services from '../services/Services'
const RestaurantsType = types
	.model('Restaurant', {
		// type: 
		isLoading: types.optional(types.boolean, false),
		restaurants: types.optional(types.array(RestaurantModel), []),
		error: types.optional(types.boolean, false)
	})
	.views(self => ({
		get pageRestaurant() {
			return self.restaurants
		}
	}))
	.actions(self => ({
		fetchData: flow(function* () {
			self.isLoading = true;
			try {
				Services.getRestaurant(20).then(res => {
					console.log({ res: res })
					self.restaurants = res
				})
			}
			catch (e) {
				console.log(e)
			}
			self.isLoading = false
		}),
		addSingleRestaurant(data: any) {
			self.restaurants.push(data)
		},

	}))
const Restaurants = RestaurantsType.create()
unprotect(Restaurants)
export default Restaurants;
