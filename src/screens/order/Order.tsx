import { autobind } from 'core-decorators'
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Header from '../../components/Header'
import UI from '../../stores/UI'
import { colorStyles } from '../../styles/ColorStyles'
import { OrderItem } from '../../components/OrderItem'
interface Props {
	componentId: string;
	testID?: string;
}
export default class Order extends React.Component<Props> {
	static get options() {
		return {
			topBar: {
				visible: false
			},
			bottomTabs: {
				visible: false
			}
		}
	}
	constructor(props: any) {
		super(props)
	}
	componentDidMount() {
		this.fetchData()
	}
	async fetchData() {
		// Dishes.clear()
		// await Dishes.fetchData(this.props.id_restaurant)
	}
	componentDidAppear() {
		this.updateOptions();
	}
	@autobind
	updateOptions() {
		const opts = Order.options;
		Navigation.mergeOptions(this.props.componentId, opts);
	}
	UNSAFE_componentWillMount() {
		UI.addScreen(this);
	}
	componentWillUnmount() {
		UI.removeScreen(this);
	}
	render() {

		return (
			<View style={{ backgroundColor: colorStyles.mercury, flex: 1 }}>
				<Header />
				<View style={styles.container}>
					<Text style={{ fontWeight: '200' }}>Địa điểm giao hàng </Text>
					<Text style={{ fontWeight: '700', paddingVertical: 3, fontSize: 20 }}>LandMarrk 72 </Text>
					<View style={{ flexDirection: 'row', marginTop: 8 }}>
						<TouchableOpacity style={styles.wrapButton}>
							<Text style={styles.note}>Ghi chú</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.wrapButton}>
							<Text style={styles.note}>Thay đổi địa điểm</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={[styles.container, { marginTop: 10 }]}>
					<View style={{ flexDirection: 'row' }}>
						<Text>13123</Text>
						<View style={{ marginLeft: 20 }}>
							<Text style={{ fontWeight: '700' }}>Giao hàng</Text>
							<Text>Giao hàng trong 26 phút</Text>
						</View>
					</View>
				</View>
				<View style={styles.wrapBill}>
					<Text style={{ fontSize: 16, fontWeight: '700', paddingBottom: 15 }}>Tóm tắt thanh toán</Text>
					<View style={{ borderBottomWidth: 0.5, paddingBottom: 10, marginBottom: 10 }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text>Phí giao hàng</Text>
							<Text>Phí giao hàng</Text>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ paddingVertical: 12 }}>Phí dịch vụ</Text>
							<Text style={{ paddingVertical: 12 }}>Phí dịch vụ</Text>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text>Phí đơn hàng</Text>
							<Text>Phí đơn hàng</Text>
						</View>
					</View>
					<Text>Tổng thanh toán</Text>
				</View>
				{/* <OrderItem /> */}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	wrapBill: {
		backgroundColor: colorStyles.white,
		borderWidth: 0.5,
		borderColor: colorStyles.grayChateau,
		paddingHorizontal: 15,
		paddingVertical: 30,
		margin: 10,
		borderRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	container: {
		padding: 13,
		backgroundColor: colorStyles.white,
		// backgroundColor: colorStyles.mercury,
		// marginTop: 10
	},
	wrapButton: {
		backgroundColor: colorStyles.white,
		padding: 3,
		paddingHorizontal: 8,
		borderWidth: 0.5,
		borderRadius: 20,
		marginRight: 7,
		borderColor: colorStyles.doveGray
	},
	note: {
		fontWeight: '500'
	}
})