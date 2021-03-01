import React from 'react'

import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon } from '../../components'
import { colorStyles } from '../../styles/ColorStyles'
export const InfoItemProduct = () => {
	return (
		<View>
			<View style={styles.wrapImage}>
				<Image
					source={require('../../assets/thumbail.jpg')}
					style={styles.imageThumbnail}
				/>
				<View style={styles.timeEstimate}>
					<Text style={styles.textEstimate}>25-30 min</Text>
				</View>
			</View>
			<View style={styles.wrapInfo}>
				<Text style={styles.nameProduct}>Burgers Story</Text>
				<View style={styles.childWrap}>
					<Icon AntDesign name='star' color={colorStyles.black} size={21} />
					<Text style={styles.starNumber}>4.7</Text>
					<Text style={styles.category}>Burgers </Text>
					<Icon Entypo name='dot-single' />
					<Text style={styles.category2}> Snacks</Text>
					<Icon Entypo name='dot-single' />
					<Text style={styles.category2}> $$$</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

	wrapImage: {
		width: '100%',
		// height: 160,
		aspectRatio: 2,
		marginTop: 10
	},
	imageThumbnail: {
		flex: 1,
		alignSelf: 'stretch',
		width: undefined,
		height: undefined,
		borderRadius: 40
	},
	wrapInfo: {
		marginTop: 15,
	},
	nameProduct: {
		fontSize: 25,
		paddingBottom: 5
	},
	timeEstimate: {
		backgroundColor: colorStyles.white,
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 40,
		padding: 17,
		borderTopRightRadius: 30
	},
	textEstimate: {
		fontWeight: '600',
		fontSize: 18
	},
	childWrap: {
		flexDirection: 'row',
		alignItems: 'baseline',
		marginTop: 7
	},
	starNumber: { fontSize: 21, paddingLeft: 9 },
	category: {
		fontSize: 21,
		paddingLeft: 20
	},
	category2: {
		fontSize: 21,
	}
})