import React, { useEffect } from 'react'
import { Navigation } from 'react-native-navigation'
import { Text, StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native'
import { Container } from '../../components'
import { HomeScrollHeader } from './HomeScrollHeader'
import { baseApi } from '../../api/BaseApi'
import { data } from '../../craw/get_browsing_infos2'
import { StoreItems } from '../../components'
import { applyThemeOptions } from '../../styles';
import { autobind } from 'core-decorators';
import UI from '../../stores/UI'
import Header from '../../components/Header'
interface Props {
	componentId: string;
	testID?: string;
}
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
	}

	UNSAFE_componentWillMount() {
		UI.addScreen(this);
	}
	componentDidMount() {
		// when(
		//   () => Account.user && Account.user.id !== null,
		//   this.updateOptions,
		// );
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
		console.log('updateOptions', opts);
		Navigation.mergeOptions(this.props.componentId, opts);
	}
	render() {
		// console.log(this.props.componentId)
		return (
			<>
				<Header />
				<View style={styles.container} >
					<HomeScrollHeader props={this.props} />
					{
						// <FlatList
						// 	data={data.reply.delivery_infos}
						// 	renderItem={({ item, index }) => {
						// 		return (
						// 			<StoreItems
						// 				image={item.photos[4]}
						// 			/>

						// 		)
						// 	}}
						// 	keyExtractor={(item, index) => index.toString()}
						// 	style={{ flex: 1 }}
						// />
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
					}
				</View>
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


// export default Home