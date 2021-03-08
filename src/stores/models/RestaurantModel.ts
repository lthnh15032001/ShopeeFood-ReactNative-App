import { Navigation } from 'react-native-navigation'
import { types } from 'mobx-state-tree'
const photoArray = types.model({
	url: types.string,
	width: types.number,
	height: types.number
})
const ratingModel = types.model({
	total_review: types.number,
	avg: types.number,
})
const RestaurantModel = types
	.model('Restaurant', {
		id: types.string,
		created: types.optional(types.number, 0),
		restaurant_id: types.string,
		label: types.optional(types.array(photoArray), []),
		photos: types.optional(types.array(photoArray), []),
		address: types.string,
		name: types.string,
		categories: types.array(types.string),
		phones: types.array(types.string),
		restaurant_status: types.number,
		rating: types.array(ratingModel),
		cuisines: types.array(types.string),
		operating: types.model({
			color: types.string,
			close_time: types.string,
			open_time: types.string
		}),
		promotion: types.array(types.model({
			group: types.number,
			text: types.string,
			icon: types.string,
		}))
	})
	.views(self => ({

	}))
	.actions((self) => {
		const set = () => {
			return "Dt"
		}
		return {
			set
		}
	})
export default RestaurantModel;
