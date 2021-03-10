import React from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Icon } from '../../components'
import { colorStyles } from '../../styles/ColorStyles'
import { DetailProductScreen } from '../'
interface Props {
	props: any,
	item: any,
	index: any
}
export const InfoItemProduct = (props: Props) => {
	const { props: propsItem, item, index } = props
	console.log({ item: item, index: index })
	return (
		<TouchableOpacity style={styles.container}>
			<View style={{ flexDirection: 'row' }}>
				<Image source={{ uri: item.photos[1].value }} style={{
					width: item.photos[1].width,
					height: item.photos[1].height
				}} />
				<View style={styles.wrapInfo}>
					<Text style={styles.name}>{item.name}</Text>
					<Text style={styles.address}>{item.address.length >= 35 ? item.address.slice(0, 35) + "..." : item.address}</Text>
					<View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 3 }}>
						<Icon AntDesign name='star' color={colorStyles.saffron} size={21} />
						<Text style={styles.rating}>{item.rating.avg} -</Text>
						<Text style={styles.cuisines}>{item.cuisines.map((x: string, i: number) => `${x} ${item.cuisines.length >= 2 ? item.cuisines.length != i + 1 ? "," : "" : ""}`)}</Text>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 2, alignItems: 'baseline' }}>
						<View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
							<Icon EvilIcons name="tag" size={25} color="black" />
							<Text style={styles.priceRange}>Tối thiểu: {item.min_order_value.resource_args[0]}</Text>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
							<Icon MaterialIcons name="attach-money" size={18} color="black" />
							<Text style={styles.priceRange}>Giá: {item.price_range.resource_args[0]}</Text>
						</View>
					</View>
					<View>
						
					</View>
				</View>
			</View>
		</TouchableOpacity>
		// <TouchableOpacity
		// 	onPress={() => {
		// 		DetailProductScreen(propsItem.componentId)
		// 	}}
		// 	style={styles.container}>
		// 	<View style={styles.wrapImage}>
		// 		<Image
		// 			source={{uri : item.photos[3].value}}
		// 			style={styles.imageThumbnail}
		// 		/>
		// 		<View style={styles.timeEstimate}>
		// 			<Text style={styles.textEstimate}>25-30 min</Text>
		// 		</View>
		// 	</View>
		// 	<View style={styles.wrapInfo}>
		// 		<Text style={styles.nameProduct}>{item.name}</Text>
		// 		<View style={styles.childWrap}>
		// 			<Icon AntDesign name='star' color={colorStyles.black} size={21} />
		// 			<Text style={styles.starNumber}>{item.rating.avg}</Text>
		// 			<Text style={styles.category}>{item.categories[0]} </Text>
		// 			<Icon Entypo name='dot-single' />
		// 			<Text style={styles.category2}> Snacks</Text>
		// 			<Icon Entypo name='dot-single' />
		// 			<Text style={styles.category2}> $$$</Text>
		// 		</View>
		// 	</View>
		// </TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 10
	},
	wrapInfo: {
		marginLeft: 8
	},
	name: {
		fontWeight: '700',
		fontSize: 16
	},
	address: {
		marginTop: 6
	},
	rating: {
		marginLeft: 6
	},
	cuisines: {
		marginLeft: 6,
		fontWeight: '500'
	},
	priceRange: {
		marginRight: 7,
	}
	// wrapImage: {
	// 	width: '100%',
	// 	// height: 160,
	// 	aspectRatio: 2,
	// 	// marginTop: 10
	// },
	// imageThumbnail: {
	// 	flex: 1,
	// 	alignSelf: 'stretch',
	// 	width: undefined,
	// 	height: undefined,
	// 	borderRadius: 40
	// },
	// wrapInfo: {
	// 	marginTop: 15,
	// },
	// nameProduct: {
	// 	fontSize: 25,
	// 	paddingBottom: 5
	// },
	// timeEstimate: {
	// 	backgroundColor: colorStyles.white,
	// 	position: 'absolute',
	// 	bottom: 0,
	// 	borderBottomLeftRadius: 40,
	// 	padding: 17,
	// 	borderTopRightRadius: 30
	// },
	// textEstimate: {
	// 	fontWeight: '600',
	// 	fontSize: 18
	// },
	// childWrap: {
	// 	flexDirection: 'row',
	// 	alignItems: 'baseline',
	// 	marginTop: 7
	// },
	// starNumber: { fontSize: 21, paddingLeft: 9 },
	// category: {
	// 	fontSize: 21,
	// 	paddingLeft: 20
	// },
	// category2: {
	// 	fontSize: 21,
	// }
})