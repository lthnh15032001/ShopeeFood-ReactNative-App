import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { colorStyles } from '../../styles/ColorStyles';
interface Props {
	componentId: string,
}
const AddressEdit = (props: Props) => {
	useEffect(() => {
		Navigation.mergeOptions(props.componentId, {
			topBar: {
				title: {
					text: "Thay đổi địa chỉ"
				}
			}
		})
	}, [])
	return (
		<View style={styles.container}>
			<Text style={{ backgroundColor: colorStyles.mercury, padding: 10 }}>Địa chỉ*</Text>
			<View>
				<TextInput placeholder="Toà nhà, Số tầng (Không bắt buộc)" style={styles.input}></TextInput>
			</View>
			<View>
				<TextInput placeholder="Toà nhà, Số tầng (Không bắt buộc)" style={styles.input}></TextInput>
			</View>
			<View>
				<TextInput placeholder="Toà nhà, Số tầng (Không bắt buộc)" style={styles.input}></TextInput>
			</View>
			<View>
				<TextInput placeholder="Toà nhà, Số tầng (Không bắt buộc)" style={styles.input}></TextInput>
			</View>
			<View>
				<TextInput placeholder="Toà nhà, Số tầng (Không bắt buộc)" style={styles.input}></TextInput>
			</View>

		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		// padding: 10,
		// backgroundColor: colorStyles.mercury,
		flex: 1,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: colorStyles.mercury,
		paddingVertical: 15,
		paddingHorizontal: 10
	}
})
export default AddressEdit;