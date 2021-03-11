import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { autobind } from 'core-decorators';
import Header from '../../components/Header'
import UI from '../../stores/UI'
import Restaurants from '../../stores/Restaurant'
import { observer } from 'mobx-react'
import { InfoItemProduct } from '../home/InfoItemProduct'
interface Props {
	componentId: string,
	categoryId: number
}
@observer
export default class CategoryFood extends React.Component<Props> {
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
		Restaurants.fetchDataByCategoryId(this.props.categoryId)
	}
	componentDidAppear() {
		this.updateOptions();
	}
	@autobind
	updateOptions() {
		const opts = CategoryFood.options;
		Navigation.mergeOptions(this.props.componentId, opts);
	}
	UNSAFE_componentWillMount() {
		UI.addScreen(this);
	}
	componentWillUnmount() {
		UI.removeScreen(this);
	}
	render() {
		console.log({ Restaurants: JSON.parse(JSON.stringify(Restaurants.restaurants)) })
		return (
			<>
				<Header />
				<View>
					<Text>
						{this.props.categoryId}
					</Text>
					<FlatList
						data={JSON.parse(JSON.stringify(Restaurants.restaurants))}
						renderItem={({ item, index }) => {
							return (
								<InfoItemProduct
									item={item}
									index={index}
									props={this.props}
								/>
							)
						}}

						keyExtractor={(item, index) => index.toString()}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</>
		)
	}
}