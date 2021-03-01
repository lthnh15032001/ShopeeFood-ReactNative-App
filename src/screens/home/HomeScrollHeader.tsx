import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { Icon } from '../../components'
import { colorStyles } from '../../styles/ColorStyles'
import { Item } from './Item'
import { InfoItemProduct } from './InfoItemProduct'
export const HomeScrollHeader = () => {
	const testData = [
		{
			name: 'Burgers',
		},
		{
			name: 'Pizza',
		},
		{
			name: 'Snacks',
		},
		{
			name: 'Sushi',
		},
		{
			name: 'Burgers',
		},
		{
			name: 'Burgers',
		},
		{
			name: 'Pizza',
		}
	]
	return (
		<>
			<FlatList
				data={testData}
				renderItem={({ item, index }) => {
					return (
						<Item
							item={item}
							index={index}
						/>
					)
				}}
				keyExtractor={(item, index) => index.toString()}
				style={styles.FlatList}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
			/>
			<InfoItemProduct />
			{/* <InfoItemProduct /> */}
		</>
	)
}

const styles = StyleSheet.create({
	FlatList: {
		color: 'black',
		maxHeight: 150
	}

})