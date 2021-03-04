import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native'
import { types, flow, applySnapshot } from 'mobx-state-tree';
import CodePush from 'react-native-code-push';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Settings from './models/Settings'
const { width, height } = Dimensions.get('window');

const Screens = new Set();

const UI = types
	.model('UI', {
		componentId: types.maybe(types.string),
		settings: types.optional(Settings, {}),
		layout: types.optional(
			types.model('UILayout', {
				width: types.optional(types.number, width),
				height: types.optional(types.number, height),
				bottomTabsHeight: types.optional(types.number, 0),
				topBarHeight: types.optional(types.number, 0),
				statusBarHeight: types.optional(types.number, 0),
				inset: types.optional(types.number, 0),
			}),
			{},
		),
		preview: types.optional(
			types.model('Preview', {
				componentName: types.maybe(types.string),
				active: types.optional(types.boolean, false),
			}),
			{},
		),
	})
	.views(self => ({
		font(size: number) {
			return {
				fontFamily: self.settings.appearance.fontFamilyBody,
				fontSize: self.settings.appearance.useSystemFontSize ? size : size + self.settings.appearance.fontSize - 3,
			}
		}
	}))
	.actions(self => ({
		addScreen(screen: any) {
			Screens.add(screen)
		},

		removeScreen(screen: any) {
			Screens.delete(screen);
		},
		updateScreens() {
			Screens.forEach((screen: any) => {
				if (screen.updateOptions) {
					screen.updateOptions();
				}
			});
		},
		restartApp() {
			return CodePush.restartApp(false);
		},
		hydrate() {
			return flow(function* () {
				try {
					const data = yield AsyncStorage.getItem('UI.settings');
					if (data) {
						applySnapshot(UI.settings, JSON.parse(data));
					}

					let useFirstRun = false;
					try {
						// const ref = firebase.firestore().collection('settings');
						// const doc = yield ref.doc('1.0.1').get();
						// useFirstRun = doc.exists && doc.data().settings;
					} catch (err) {
						useFirstRun = Date.now() < 1532664000449;
					}

					if (UI.settings.isFirstRun) {
						if (useFirstRun) {
							UI.settings.appearance.largeShowThumbnail = false;
							// UI.settings.general.browserOpenIn = 'safari';
						}
						UI.settings.isFirstRun = false;
					}

					(self as any).apply();
				} catch (err) { }
				return;
			})();
		},
	})).create()

export default UI;
