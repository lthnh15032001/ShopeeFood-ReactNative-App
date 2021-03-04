import React from 'react'
import { View, Text } from 'react-native'
import { HEADER } from '../../screens'
import UI from '../../stores/UI'
// export const Detail_Product = () => {
// 	return (
// 		<View></View>
// 	)
// }
interface Props {
	componentId: string;
	testID?: string;
}

export default class DetailProduct extends React.Component<Props> {
	// static get options() {
	// 	return {
	// 		topBar: {
	// 			animate: true,
	// 			title: {
	// 				component: {
	// 					name: HEADER,
	// 					// alignment: 'center',
	// 					passProps: {
	// 						isTitle: true,
	// 					}
	// 				}
	// 			},
	// 			rightButtons: [
	// 				{
	// 					component: {
	// 						name: HEADER,
	// 						passProps: {
	// 							isRightButton: true
	// 						}
	// 					}
	// 				}
	// 			],
	// 			leftButtons: [
	// 				{
	// 					component: {
	// 						name: HEADER,
	// 						passProps: {
	// 							isLeft: true
	// 						}
	// 					}
	// 				}
	// 			]
	// 		},
	// 		bottomTab: {
	// 			text: 'Home',
	// 			icon: require('../../assets/HomeSelect.png'),
	// 			selectedIconColor: 'black',
	// 			selectedTextColor: 'black'
	// 		},
	// 		layout: {
	// 			backgroundColor: 'black'
	// 		}
	// 	}
	// }
	constructor(props: any) {
		super(props)
	}
	UNSAFE_componentWillMount() {
		UI.addScreen(this);
	}
	render() {
		return (
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Text>adasd</Text>
			</View>
		)
	}
}