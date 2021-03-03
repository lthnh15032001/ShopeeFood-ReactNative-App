"use strict";
exports.__esModule = true;
exports.StoreItems = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
exports.StoreItems = function (props) {
    return (react_1["default"].createElement(react_native_1.Image, { source: { uri: props.value }, 
        // index={index}
        style: {
            width: props.width,
            height: props.height,
            flex: 1
        } }));
};
