"use strict";
exports.__esModule = true;
exports.rootStack = void 0;
var react_native_navigation_1 = require("react-native-navigation");
var authen_1 = require("../screens/authen");
var Header_1 = require("../components/Header");
// const BackButton = (): any => {
// 	return (
// 		<TouchableOpacity onPress={() => console.log("dat")}>
// 			<Icon Ionicons name='ios-chevron-back-sharp' color={colorStyles.curiousBlue} size={28} />
// 		</TouchableOpacity>
// 	)
// }
react_native_navigation_1.Navigation.registerComponent('LOGIN_SCREEN', function () { return authen_1.Login; });
react_native_navigation_1.Navigation.registerComponent('REGISTER_SCREEN', function () { return authen_1.Register; });
react_native_navigation_1.Navigation.registerComponent('HeaderComponent', function () { return Header_1.Header; });
exports.rootStack = function (root) {
    return react_native_navigation_1.Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'BOTTOM_TAB_LAYOUT',
                children: [
                    {
                        // component: {
                        // 	id: "REGISTER_SCREEN",
                        // 	name: "REGISTER_SCREEN",
                        // 	options  : {}
                        // }
                        stack: {
                            id: 'HOME_TAB',
                            children: [
                                {
                                    component: {
                                        id: "ROOT",
                                        name: root,
                                        options: {
                                            topBar: {
                                                animate: true,
                                                title: {
                                                    component: {
                                                        id: "HeaderComponent",
                                                        name: "HeaderComponent",
                                                        alignment: 'center',
                                                        passProps: {
                                                            isTitle: true
                                                        }
                                                    }
                                                },
                                                rightButtons: [
                                                    {
                                                        id: "HeaderComponent",
                                                        component: {
                                                            name: "HeaderComponent",
                                                            passProps: {
                                                                isRightButton: true
                                                            }
                                                        }
                                                    }
                                                ],
                                                leftButtons: [
                                                    {
                                                        id: "HeaderComponent",
                                                        component: {
                                                            name: "HeaderComponent",
                                                            passProps: {
                                                                isLeft: true
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: 'tab1',
                                    icon: require('../assets/ic_close.png')
                                },
                                layout: {
                                    backgroundColor: 'black'
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            id: 'AUTHEN_STACK',
                            children: [
                                {
                                    component: {
                                        id: 'LOGIN_SCREEN',
                                        name: 'LOGIN_SCREEN',
                                        options: {
                                            topBar: {
                                                animate: true,
                                                title: {
                                                    text: "Login"
                                                },
                                                rightButtons: [
                                                    {
                                                        text: 'next',
                                                        id: 'saveMembers'
                                                    },
                                                    {
                                                        id: 'search'
                                                    }
                                                ],
                                                leftButtons: [
                                                    {
                                                        id: 'cancel',
                                                        text: 'back'
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: 'tab2',
                                    icon: require('../assets/ic_close.png')
                                }
                            }
                        }
                    }
                ]
            }
        }
    });
};
