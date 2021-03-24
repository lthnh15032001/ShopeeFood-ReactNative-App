import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { CategoryGroupHeader } from './CategoryGroupHeader'
import Restaurants from '../../stores/Restaurant'
import Categories from '../../stores/Category'
import { autobind } from 'core-decorators';
import UI from '../../stores/UI'
import Header from '../../components/Header'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { OrderItem } from '../../components/OrderItem'
// import Toast from 'react-native-simple-toast';
interface Props {
	componentId: string;
	testID?: string;
}
@observer
export default class Home extends React.Component<Props> {
	@observable
	isLoading = false
	static get options() {
		return {
			bottomTab: {
				text: 'Home',
				icon: require('../../assets/HomeSelect.png'),
				selectedIconColor: 'black',
				selectedTextColor: 'black'
			},
			layout: {
				backgroundColor: 'black'
			},
			topBar: {
				visible: false
			}
		}
	}
	constructor(props: any) {
		super(props);
		Navigation.events().bindComponent(this);
	}

	UNSAFE_componentWillMount() {
		UI.addScreen(this);
	}
	componentDidMount() {
		this.fetchData()
	}
	async fetchData(index = 0) {
		this.isLoading = true
		const dataCategory = JSON.parse(JSON.stringify(Categories.categories))
		if (dataCategory[index]) {
			Restaurants.fetchDataByCategoryId(dataCategory[Categories.isSelect].id)
			// console.log({ haveindex: Categories.isSelect })
		}
		else {
			await Categories.fetchData()
			Restaurants.fetchDataByCategoryId(1000000);
			Categories.clearSelect()
			// console.log(Categories.isSelect)
		}
		this.isLoading = false
	}
	componentDidAppear() {
		this.updateOptions();
	}
	componentWillUnmount() {
		UI.removeScreen(this);
	}
	@autobind
	updateOptions() {
		const opts = Home.options;
		Navigation.mergeOptions(this.props.componentId, opts);
	}
	render() {
		// Toast.showWithGravity('This is a toast.');
		// Toast.show('This is a long toast.', Toast.LONG);
		return (
			<>
				<Header />
				{this.isLoading ?
					<View style={{
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1
					}}>
						<ActivityIndicator size="large" color="#00ff00" />
					</View>
					: <View style={styles.container} >
						<CategoryGroupHeader
							props={this.props}
							fetchData={this.fetchData}
						/>
					</View>}
				<OrderItem screens={this.props.componentId} />
			</>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 0,
		paddingHorizontal: 13
	},
})