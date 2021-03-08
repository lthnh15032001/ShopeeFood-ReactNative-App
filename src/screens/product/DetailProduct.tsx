import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import UI from '../../stores/UI'
import Header from '../../components/Header'
import { Navigation } from 'react-native-navigation'
import { autobind } from 'core-decorators';
interface Props {
	componentId: string;
	testID?: string;
}

export default class DetailProduct extends React.Component<Props> {
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
	componentDidAppear() {
		this.updateOptions();
	}
	@autobind
	updateOptions() {
		const opts = DetailProduct.options;
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
			<>
				{/* <Header /> */}
				<View style={styles.wrapBackimage}>
					<Image
						source={{ uri: 'https://images.foody.vn/res/g90/890058/prof/s400x216/foody-upload-api-foody-mobile-foody-upload-api-foo-190226114155.jpg' }}
						style={[styles.backdrop, {
							width: '100%',
							height: 216
						}]}
						resizeMode='cover'
					/>
					<View style={{  position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}>
						<Text>Le Thành Đạt</Text>
					</View>
				</View>
			</>
		)
	}
}
const styles = StyleSheet.create({
	wrapBackimage: {
		// width: '100%',
		flex:1,
		backgroundColor: 'white'
	},
	backdrop: {
		position: 'relative',
		top: 0,
		left: 0,
		right: 0
	},
})