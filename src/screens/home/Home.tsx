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
		// this.state = {
		// 	restaurants
		// }
	}

	UNSAFE_componentWillMount() {
		UI.addScreen(this);
	}
	componentDidMount() {
		this.fetchData()
		// const dataCategory = JSON.parse(JSON.stringify(Categories.categories))
		// Restaurants.fetchDataByCategoryId(dataCategory[1].id) 
	}
	async fetchData(isClear?: boolean, index = 0) {
		this.isLoading = true
		// console.log(this.isLoading)
		// console.log({ Categoriesloading: Categories.isLoading })
		// console.log({ Categoriesloading: Categories.isLoading })
		const dataCategory = JSON.parse(JSON.stringify(Categories.categories))
		// console.log({ index: index })
		// console.log({ Restaurantsloading: Restaurants.isLoading })
		if (dataCategory[index]) {
			Restaurants.fetchDataByCategoryId(dataCategory[Categories.isSelect].id)
			console.log({ haveindex: Categories.isSelect })
			// isClear ? Categories.clearSelect() : ""
		}
		else {
			await Categories.fetchData()
			Restaurants.fetchDataByCategoryId(1000000);
			Categories.clearSelect()
			console.log(Categories.isSelect)
			// console.log("clearrrrrr")
		}
		// console.log({ Restaurantsloading: Restaurants.isLoading })
		this.isLoading = false
		// console.log(this.isLoading)
	}
	componentDidAppear() {
		this.updateOptions();
		this.fetchData()

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
		// console.log({ loading: this.isLoading })
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