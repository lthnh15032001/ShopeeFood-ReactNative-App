import { Navigation } from 'react-native-navigation'
import { types } from 'mobx-state-tree'

const DishModel = types
	.model('Dish', {
		dish_type_id: types.number,
		dish_type_name: types.string,
		dishes: types.optional(types.array(
			types.model({
				id: types.number,
				description: types.optional(types.string, ""),
				price: types.model({
					text: types.string,
					unit: types.string,
					value: types.number
				}),
				is_active: types.boolean,
				photos: types.array(types.model({
					width: types.number,
					height: types.number,
					value: types.string
				})),
				// option: types.array(types.model({
				// 	name: types.string,
				// 	price: types.model({
				// 		text: types.string,
				// 		unit: types.string,
				// 		value: types.number,
				// 	})
				// })),
				quantity: types.number,
				name: types.string,
			})
		), [])


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
export default DishModel;

