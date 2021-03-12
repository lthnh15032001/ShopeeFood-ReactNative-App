import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
// const styles = require('./Empty.styl');

interface Props {
	key?: string;
	message: string;
}

@observer
export default class Empty extends React.Component<Props> {
	render() {
		const { message } = this.props;
		return (
			<View style={styles.host}>
				<Text style={styles.message}>{message}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	host: {
		width: '100%',
		paddingTop: 32,
		paddingBottom: 32,
	},

	message: {
		fontFamily: 'System',
		fontSize: 17,
		fontStyle: 'italic',
		textAlign: 'center',
		color: '#969798',
	}

})