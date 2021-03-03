"use strict";
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var components_1 = require("../../components");
var HomeScrollHeader_1 = require("./HomeScrollHeader");
exports.Home = function (_a) {
    var props = _a.props;
    // useEffect(() => {
    // 	callApi()
    // }, [])
    // const callApi = (): any => {
    // 	const url = baseApi.makeUrl('users')
    // 	console.log({ url: url })
    // 	const data = baseApi.getWithoutToken(url)
    // 	console.log({ data: data })
    // }
    return (react_1["default"].createElement(components_1.Container, { style: styles.container },
        react_1["default"].createElement(react_native_1.Text, { style: styles.titleHome },
            "Main ", "\n",
            "Categories"),
        react_1["default"].createElement(HomeScrollHeader_1.HomeScrollHeader, null)));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    titleHome: {
        fontSize: 32,
        fontWeight: '500'
    }
});
