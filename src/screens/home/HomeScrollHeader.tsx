import React, { useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Animated, ViewProps } from 'react-native'
import { Icon } from '../../components'
import { Item } from './Item'
import { InfoItemProduct } from './InfoItemProduct'

export const HomeScrollHeader = ({props} : any) => {
	// console.log(props)
	const scrollY = useRef(new Animated.Value(0)).current
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
	const FlatListHeight = 150
	const titleHeight = 48
	const flatlistHeaderHeight = scrollY.interpolate({
		inputRange: [0, FlatListHeight],
		outputRange: [FlatListHeight, FlatListHeight - FlatListHeight],
		extrapolate: 'clamp'
	})
	const titleHeightScroll = scrollY.interpolate({
		inputRange: [0, titleHeight],
		outputRange: [titleHeight, titleHeight - titleHeight],
		extrapolate: 'clamp'
	})
	return (
		<View>
			<Animated.View style={{
				zIndex: 10,
			}}>
				<Animated.View
					style={{
						height: titleHeightScroll,
					}}
				>
					<Text style={{
						fontSize: 32,
						fontWeight: '500',
						paddingTop: 10
					}}>Main Categories</Text>
				</Animated.View>
				<Animated.View
					style={{
						height: flatlistHeaderHeight
					}}
				>
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
						showsHorizontalScrollIndicator={false}
						horizontal={true}
					/>
				</Animated.View>
			</Animated.View>
			<FlatList
				data={testData}
				scrollEventThrottle={16}
				onScroll={
					Animated.event([
						{ nativeEvent: { contentOffset: { y: scrollY } } }
					], { useNativeDriver: false })
				}
				renderItem={({ item, index }) => {
					return (
						<InfoItemProduct props={props} />
					)
				}}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	FlatListStyle: {
		// maxHeight: 200,
		// backgroundColor: 'black'
	},

})