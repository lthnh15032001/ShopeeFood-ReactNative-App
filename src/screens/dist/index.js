"use strict";
exports.__esModule = true;
exports.startApp = exports.Screens = exports.ACCOUNT_SCREEN = exports.REGISTER_SCREEN = exports.LOGIN_SCREEN = exports.HOME_SCREEN = void 0;
var Home_1 = require("./home/Home");
var Login_1 = require("./authen/Login");
var Register_1 = require("./authen/Register");
var AccountScreen_1 = require("./account/AccountScreen");
var react_native_navigation_1 = require("react-native-navigation");
exports.HOME_SCREEN = 'internapp.HomeScreen';
exports.LOGIN_SCREEN = 'internapp.LoginScreen';
exports.REGISTER_SCREEN = 'internapp.RegisterScreen';
exports.ACCOUNT_SCREEN = 'internapp.AccountScreen';
exports.Screens = new Map();
exports.Screens.set(exports.HOME_SCREEN, Home_1["default"]);
exports.Screens.set(exports.LOGIN_SCREEN, Login_1["default"]);
exports.Screens.set(exports.REGISTER_SCREEN, Register_1["default"]);
exports.Screens.set(exports.ACCOUNT_SCREEN, AccountScreen_1["default"]);
exports.startApp = function () {
    var tabs = [
        {
            stack: {
                id: "HOME_SCREEN",
                children: [
                    {
                        component: {
                            name: exports.HOME_SCREEN,
                            options: {
                                topBar: {
                                    animate: true,
                                    title: {
                                        component: {
                                            id: "HeaderComponent",
                                            name: "HeaderComponent",
                                            // alignment: 'center',
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
                    },
                ],
                options: {
                    bottomTab: {
                        text: 'Home',
                        icon: require('../assets/HomeSelect.png'),
                        selectedIconColor: 'black',
                        selectedTextColor: 'black'
                    },
                    layout: {
                        backgroundColor: 'black'
                    }
                }
            }
        },
        {
            stack: {
                id: "LOGIN_SCREEN",
                children: [
                    {
                        component: {
                            name: exports.LOGIN_SCREEN,
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
                        text: 'Đã lưu',
                        icon: require('../assets/heart.png'),
                        selectedIconColor: 'black',
                        selectedTextColor: 'black'
                    }
                }
            }
        },
        {
            stack: {
                id: "REGISTER_SCREEN",
                children: [
                    {
                        component: {
                            name: exports.REGISTER_SCREEN,
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
                        text: 'Đơn hàng',
                        icon: require('../assets/Vector.png'),
                        selectedIconColor: 'black',
                        selectedTextColor: 'black',
                        iconWidth: 20,
                        iconHeight: 20
                    }
                }
            }
        },
        {
            stack: {
                id: "ACCOUNT_SCREEN",
                children: [
                    {
                        component: {
                            name: exports.ACCOUNT_SCREEN,
                            options: {
                                topBar: {
                                    animate: true,
                                    // title: {
                                    // 	text: "Login"
                                    // },
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
                        text: 'Tôi',
                        icon: require('../assets/user.png'),
                        selectedIconColor: 'black',
                        selectedTextColor: 'black'
                    }
                }
            }
        },
    ];
    return react_native_navigation_1.Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'ROOT',
                children: tabs
            }
        }
    });
};
