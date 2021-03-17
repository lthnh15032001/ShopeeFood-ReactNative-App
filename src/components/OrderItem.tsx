import React, { useRef } from 'react'

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colorStyles } from '../styles/ColorStyles'
import { OrderScreen } from '../screens/'
import Orders from '../stores/Orders'
import { observer } from 'mobx-react'
// import { showOrderDetail } from '../screens'
import RBSheet from "react-native-raw-bottom-sheet";
import ShowOrderDetailModal from '../screens/order/ShowOrderDetailModal'
export const OrderItem = observer(() => {
	// console.log(JSON.parse(JSON.stringify(Orders.orders)), JSON.parse(JSON.stringify(Orders.restaurant)))
	const refRBSheet = useRef();
	const orders = JSON.parse(JSON.stringify(Orders.orders))
	const restaurant = JSON.parse(JSON.stringify(Orders.restaurant))
	return (
		<>
			{
				orders.length === 0 ? <Text></Text> : <TouchableOpacity
					style={{
						position: 'absolute',
						bottom: 20,
						marginHorizontal: 15,
						right: 0,
						left: 0,
						paddingHorizontal: 30,
						paddingVertical: 5,
						backgroundColor: colorStyles.apple,
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						borderRadius: 30,
						elevation: 5,
					}}
					onPress={() => refRBSheet.current.open()}
				>
					<View>
						<RBSheet
							ref={refRBSheet}
							closeOnPressBack={true}
							dragFromTopOnly={true}
							height={700}
							// closeOnDragDown={true}
							// closeOnPressMask={false}
							customStyles={{
								wrapper: {
									backgroundColor: "transparent"
								},
								draggableIcon: {
									backgroundColor: "#000"
								}
							}}
						>
							<ShowOrderDetailModal
								payment={true}
							refRBSheet={() => refRBSheet.current.close()}/>
						</RBSheet>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View>
							<Text style={{ fontWeight: '800', color: colorStyles.white }}>{orders && orders.length} món</Text>
							<Text style={{ fontWeight: '400', color: colorStyles.white }}>{restaurant && restaurant.name}</Text>
						</View>
						<View style={{ justifyContent: 'center', marginLeft: 10 }}>
							<Text style={{ fontWeight: '800', color: colorStyles.white }}>{Intl.NumberFormat().format(Orders.totalPrice)} {Orders.orders[0].price.unit}</Text>
						</View>
					</View>
				</TouchableOpacity>
			}
		</>
	)
})

const styles = StyleSheet.create({

})