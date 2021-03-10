import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Text, StyleSheet, View } from 'react-native'
import { HomeScrollHeader } from './HomeScrollHeader'
import Restaurants from '../../stores/Restaurant'
import { autobind } from 'core-decorators';
import UI from '../../stores/UI'
import Header from '../../components/Header'
import { observer } from 'mobx-react'
interface Props {
	componentId: string;
	testID?: string;
}
@observer
export default class Home extends React.Component<Props> {
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
		Restaurants.fetchData()
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
		if (Restaurants.isLoading) {
			return (
				<View style={{
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1
				}}>
					<Text>12323</Text>
				</View>
			)
		} else {
			return (
				<>
					<Header />
					<View style={styles.container} >
						<HomeScrollHeader
							props={this.props} />
					</View>
				</>
			)
		}

	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 0,
		paddingHorizontal: 13
	},
})


// export default Home
{/* {
						<FlatList
							data={JSON.parse(JSON.stringify(restaurants))}
							renderItem={({ item, index }) => {
								console.log(item)
								// return <Text>{index}</Text>;
								return (
									<StoreItems
										image={item.photos[4]}
									/>

								)
							}}
							keyExtractor={(item, index) => index.toString()}
							style={{ flex: 1 }}
						/>
						// return x.photos.map((item, index) => {
						// 	console.log({item: item})
						// 		return (<Image
						// 			source={{ uri: item.value }}
						// 			// width={item.width}
						// 			// height={item.height}
						// 			style={{
						// 				width: item.width,
						// 				height: item.height
						// 			}}
						// 		/>)
						// })
					} */}