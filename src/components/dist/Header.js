"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var components_1 = require("../components");
var ColorStyles_1 = require("../styles/ColorStyles");
exports.Header = function (props) {
    var renderItem = function () {
        if (props.isTitle) {
            return react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                react_1["default"].createElement(react_native_1.TextInput, { style: styles.textinput, placeholder: "T\u00ECm ki\u1EBFm", value: "Lanmark 72 Ha Noi" }));
        }
        else if (props.isRightButton) {
            return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log("dat"); } },
                react_1["default"].createElement(components_1.Icon, { Ionicons: true, name: 'ios-cart-outline', color: ColorStyles_1.colorStyles.curiousBlue, size: 28 })));
        }
        else {
            return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return console.log("dat"); } },
                react_1["default"].createElement(components_1.Icon, { Ionicons: true, name: 'ios-chevron-back-sharp', color: ColorStyles_1.colorStyles.curiousBlue, size: 28 })));
        }
    };
    return renderItem();
};
var styles = react_native_1.StyleSheet.create({
    textinput: {
        // borderWidth: 0.25,
        paddingVertical: 7,
        paddingHorizontal: 70,
        borderRadius: 27,
        backgroundColor: '#f5f5f6'
    },
    container: {},
    headerText: {
        fontSize: 18,
        fontWeight: '900'
    }
});
