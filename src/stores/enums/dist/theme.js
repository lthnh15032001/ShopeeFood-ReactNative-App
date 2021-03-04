"use strict";
exports.__esModule = true;
exports.themes = void 0;
var mobx_state_tree_1 = require("mobx-state-tree");
exports.themes = {
    light: 'Default (light)',
    dark: 'Default (dark)',
    piggy: 'Piggy (dark)',
    piggyLight: 'Piggy (light)',
    glowfish: 'Glowfish'
};
exports["default"] = mobx_state_tree_1.types.enumeration('Theme', Object.keys(exports.themes));
