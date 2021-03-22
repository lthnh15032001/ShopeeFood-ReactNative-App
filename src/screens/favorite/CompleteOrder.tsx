import React, { useEffect } from 'react'
import { Navigation } from 'react-native-navigation'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Header from '../../components/Header'
import { autobind } from 'core-decorators'
import UI from '../../stores/UI'
import { Icon } from '../../components'
import Empty from '../../components/Empty'
import { observer } from 'mobx-react'
interface Props {
	componentId: string,
}
@observer
export default class CompleteOrder extends React.Component<Props> {
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
	componentDidAppear() {
		this.updateOptions();
	}
	@autobind
	updateOptions() {
		const opts = CompleteOrder.options;
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
				<Header type={2} titleName="Đơn hàng" />
				{/* <V iew style={styles.container}>
					<View style={{
						flexDirection: 'row',
						alignItems: 'flex-end',
						justifyContent: 'space-between',
						marginBottom: 10

					}}>
						<Text style={{
							fontSize: 23,
							fontWeight: '600',
							flexDirection: 'row'
						}}>Yêu Thích</Text>
						<TouchableOpacity style={{
							flexDirection: 'row'
						}}>
							<Text style={{
								fontWeight: '300',
								marginRight: 5,
								fontSize: 14
							}}>Thêm nữa</Text>
							<Icon size={18} AntDesign name="right" />
						</TouchableOpacity>
					</View>
					<FlatList
						data={JSON.parse(JSON.stringify(MarkRestaurants.restaurantFavorite))}
						scrollEventThrottle={16}
						// onScroll={
						// 	Animated.event([
						// 		{ nativeEvent: { contentOffset: { y: scrollY } } }
						// 	], { useNativeDriver: false })
						// }
						ListEmptyComponent={<Empty message="No Favorite Found" />}
						renderItem={({ item, index }) => {
							return (
								<RestaurantItem
									item={item}
									index={index}
									props={this.props}
									favorite={true}
								// fetchData={fetchData}
								/>
							)
						}}
						keyExtractor={(item, index) => index.toString()}
						showsVerticalScrollIndicator={false}
					/>
				</View> */}
			</>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
})