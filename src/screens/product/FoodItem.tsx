import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from '../../components/Icon'
import { colorStyles } from '../../styles/ColorStyles'
interface Props {
	foodItem: any,
	foodIndex: any,
}
export const FoodItem = (props: Props) => {
	const { foodItem, foodIndex } = props
	return (
		<>
			<View style={{
				borderBottomWidth: 0.6,
				borderBottomColor: colorStyles.mercury,
				marginBottom: 10,
				flexDirection: 'row',
				// backgroundColor: 'yellow'
			}}>
				<View style={{
					marginBottom: 12,
					flexDirection: 'row',
					width: '60%',
					// backgroundColor: 'blue'
				}}>
					<Image
						style={{
							width: foodItem.photos[0].width - 20,
							height: foodItem.photos[0].height - 20
						}}
						source={{ uri: foodItem.photos[0].value }}
					/>
					<View style={{ paddingLeft: 8 }}>
						<Text style={{ fontWeight: '600', fontSize: 15, marginBottom: 3 }}>{foodItem.name}</Text>
						<Text style={{ marginBottom: 3 }}>
							<Text style={{ textDecorationLine: 'line-through', fontSize: 16 }}>
								{foodItem.discount_price && foodItem.discount_price.text}
							</Text>
							{foodItem.discount_price.text && <View style={{ paddingHorizontal: 5, alignItems: 'baseline' }}>
								<Icon AntDesign name="arrowright" />
							</View>}
							<Text style={{ fontSize: 16 }}>
								{foodItem.price.text}
							</Text>
						</Text>
						{foodItem.description.length >= 1 &&
							<Text style={{ fontSize: 15, marginBottom: 8 }}>{foodItem.description}</Text>
						}
						<View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
							<Icon AntDesign name="shoppingcart" color={colorStyles.grayChateau} />
							<Text style={{ marginLeft: 6 }}>{foodItem.display_total_order}</Text>
						</View>
					</View>
				</View>
				<View style={{ width: '40%', marginLeft: 110, justifyContent: 'center' }}>
					<Icon Ionicons name='md-add-circle' size={35} color={colorStyles.apple} />
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({

})