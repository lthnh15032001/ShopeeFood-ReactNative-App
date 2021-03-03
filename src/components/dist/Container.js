"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Container = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
exports.Container = function (props) {
    var children = props.children;
    return (react_1["default"].createElement(react_native_1.View, { style: [styles.container, __assign({}, props)] }, children && children));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
