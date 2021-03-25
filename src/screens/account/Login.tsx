import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import auth, { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';
import { Navigation } from 'react-native-navigation';
import { Icon } from '../../components';
import { colorStyles } from '../../styles/ColorStyles';

export const Login = (props: any) => {
	// const authForDefaultApp = firebase.auth().signInWithEmailAndPassword('lthnh15032001@gmail.com','5384264328').then(res =>{
	// 	console.log(res.user)
	// })
	// console.log({ auth: authForDefaultApp })
	useEffect(() => {
		Navigation.mergeOptions(props.componentId, {
			topBar: {
				visible: false
			}
		})
	}, [])
	return (
		<View style={styles.container}>
			<View style={{ position: 'absolute', top: 60, right: 40 }}>
				<Text>Đăng nhập</Text>
			</View>
			<Image
				source={require('../../assets/Shipper.png')}
				style={{ width: 200, height: 200 }}
				resizeMode="contain" />
			<View >
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Welcome to Raw Shipp.</Text>
			</View>
			<View style={styles.wrapButton}>
				<View style={{ width: '100%', }}>
					<TextInput style={styles.button} placeholder="Email" />
				</View>
				<View style={{ width: '100%', }}>
					<TextInput
						secureTextEntry={true}
						style={styles.button}
						placeholder="Password" />
				</View>
			</View>
			<TouchableOpacity style={{ marginTop: 20 }} >
				<Text style={[{ color: colorStyles.sushi, fontSize: 17, fontWeight: 'bold' }]}>Đăng nhập</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ marginTop: 20 }} >
				<Text style={[{ color: colorStyles.sushi, fontSize: 17, fontWeight: 'bold' }]}>Đăng ký</Text>
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	wrapButton: {
		marginTop: 10,
		width: 350,
	},
	button: {
		marginTop: 10,
		borderWidth: 0.5,
		// paddingHorizontal: 140,
		width: '83%',
		alignSelf: 'center',
		paddingVertical: 18,
		borderRadius: 6,
		paddingHorizontal: 10,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},


})