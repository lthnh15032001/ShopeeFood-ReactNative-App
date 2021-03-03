import React, { useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native'
import { Container } from '../../components'
import { HomeScrollHeader } from './HomeScrollHeader'
import { baseApi } from '../../api/BaseApi'
import { data } from '../../craw/get_browsing_infos2'
import { StoreItems } from '../../components'
const Home = ({ props }: any) => {
	// useEffect(() => {
	// 	callApi()
	// }, [])
	// const callApi = (): any => {
	// 	const url = baseApi.makeUrl('users')
	// 	console.log({ url: url })
	// 	const data = baseApi.getWithoutToken(url)
	// 	console.log({ data: data })
	// }
	return (
		<View style={styles.container}>
			<HomeScrollHeader props={props} />
			{/* <View style={{width: 200, height: 200, backgroundColor : 'yellow'}}> */}
			{/* </View> */}
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
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 0,
		paddingHorizontal: 13
	},
})


export default Home