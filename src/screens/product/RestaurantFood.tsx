import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import UI from '../../stores/UI'
import Header from '../../components/Header'
import { Navigation } from 'react-native-navigation'
import { autobind } from 'core-decorators';
import Dishes from '../../stores/Dishes'
import { GroupFood } from './GroupFood'
import Empty from '../../components/Empty'
import { observer } from 'mobx-react'
import { BlurView } from '@react-native-community/blur';
import { colorStyles } from '../../styles/ColorStyles'
import { Icon } from '../../components/Icon'
import { OrderItem } from '../../components/OrderItem'
interface Props {
	componentId: string;
	testID?: string;
	id_restaurant: number,
	restaurantInfo: any
}
@observer
export default class RestaurantFood extends React.Component<Props> {
	static get options() {
		return {
			topBar: {
				visible: false
			}
		}
	}
	constructor(props: any) {
		super(props)
	}
	componentDidMount() {
		this.fetchData()
	}
	async fetchData() {
		await Dishes.fetchData(this.props.id_restaurant)
	}
	componentDidAppear() {
		this.updateOptions();
	}
	@autobind
	updateOptions() {
		const opts = RestaurantFood.options;
		Navigation.mergeOptions(this.props.componentId, opts);
	}
	UNSAFE_componentWillMount() {
		UI.addScreen(this);
	}
	componentWillUnmount() {
		UI.removeScreen(this);
	}
	render() {
		return (
			<>
				<View style={styles.wrapBackimage}>

					<Image
						source={{ uri: this.props.restaurantInfo.photos[8].value }}
						style={[styles.backdrop, {
							width: '100%',
							height: 230
						}]}
						resizeMode='cover'
						blurRadius={0.5}
					/>
					<TouchableOpacity style={{
						position: 'absolute',
						top: 40,
						left: 20,
						right: 0,
						bottom: 0
					}}>
						<Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.white} size={40} />
					</TouchableOpacity>
				</View>

				<FlatList
					data={JSON.parse(JSON.stringify(Dishes.dishes))}
					ListHeaderComponent={() => <View style={styles.wrapName}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
							<Text style={styles.name}>{this.props.restaurantInfo.name}</Text>

							<TouchableOpacity onPress={() => {

							}}>
								<Icon AntDesign name="heart" size={21} />
							</TouchableOpacity>
						</View>
						<View style={{ marginTop: 3, flexDirection: 'row', }}>
							<View style={{ flexDirection: 'row', alignItems: 'baseline', }}>
								<Icon AntDesign name='star' color={colorStyles.saffron} size={21} />
								<Text style={{ paddingLeft: 5 }}>{this.props.restaurantInfo.rating.avg} - 1.5km</Text>
							</View>
						</View>
					</View>}
					renderItem={({ item, index }) => {
						return (
							<GroupFood
								groupItem={item}
								groupIndex={index}
							/>
						)
					}}
					ListEmptyComponent={<Empty message="No Food Provide" />}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
				/>
				<OrderItem />
			</>
		)
	}
}
const styles = StyleSheet.create({
	wrapName: {
		paddingHorizontal: 13,
		paddingVertical: 10
	},
	name: {
		fontWeight: '700',
		fontSize: 20,
	},
	wrapBackimage: {
		// width: '100%',
		// flex: 1,
		backgroundColor: 'white'
	},
	backdrop: {
		position: 'relative',
		top: 0,
		left: 0,
		right: 0
	},
})