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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.baseApi = void 0;
var react_native_navigation_1 = require("react-native-navigation");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var url_join_1 = require("url-join");
var ENABLE_LOG = false;
var writeLog = function (_a) {
    var url = _a.url, model = _a.model, response = _a.response, responseJson = _a.responseJson;
    // console.group(url);
    // console.log("model", model);
    // console.log("response", response);
    // console.log("responseJson", responseJson);
    // console.groupEnd();
};
var getAccessToken = function (anonymus) { return __awaiter(void 0, void 0, void 0, function () {
    var strToken, token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, async_storage_1["default"].getItem("token")];
            case 1:
                strToken = _a.sent();
                if (!strToken && !anonymus) {
                    // window.location.href = "#/login";
                    react_native_navigation_1.Navigation.popTo('LOGIN_SCREEN');
                    return [2 /*return*/, ''];
                }
                token = strToken && JSON.parse(strToken);
                if (token)
                    return [2 /*return*/, token.access_token];
                return [2 /*return*/, ''];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                // window.location.href = "#/login";
                react_native_navigation_1.Navigation.popTo('LOGIN_SCREEN');
                return [2 /*return*/, ''];
            case 3: return [2 /*return*/];
        }
    });
}); };
var call = function (_a) {
    var url = _a.url, method = _a.method, _b = _a.model, model = _b === void 0 ? {} : _b, _c = _a.contentType, contentType = _c === void 0 ? "application/json" : _c, _d = _a.anonymus, anonymus = _d === void 0 ? false : _d;
    return __awaiter(void 0, void 0, void 0, function () {
        var headers, request, response, responseJson, e_2, e_3;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 6, , 7]);
                    headers = {
                        Authorization: "Bearer " + getAccessToken(anonymus),
                        Accept: contentType,
                        "Content-Type": contentType
                    };
                    if (anonymus) {
                        if (headers.Authorization)
                            delete headers.Authorization;
                    }
                    request = {
                        method: method,
                        headers: headers
                    };
                    if (method === "POST" || method === "PUT") {
                        if (contentType === "application/json")
                            request.body = JSON.stringify(model);
                        if (contentType === "multipart/form-data") {
                            delete request.headers["Content-Type"];
                            request.body = model;
                        }
                    }
                    return [4 /*yield*/, fetch(url, request)];
                case 1:
                    response = _e.sent();
                    // globalService.startLoadingBar()
                    ENABLE_LOG && console.group(url);
                    ENABLE_LOG && console.log("model", model);
                    ENABLE_LOG && console.log("response", response);
                    if (!response.ok) {
                        if (response.status === 401) {
                            // window.location.href = "#/login"
                            // toastService.confirm({
                            //     content: "Permission required! Please login again!", onConfirm: () => {
                            //         window.location.href = "/#/login"
                            //     }
                            // })
                            react_native_navigation_1.Navigation.popTo('LOGIN_SCREEN');
                        }
                        else
                            console.error({ content: response.status });
                        return [2 /*return*/, { success: false }];
                    }
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, response.json()];
                case 3:
                    responseJson = _e.sent();
                    ENABLE_LOG && console.log("responseJson", responseJson);
                    ENABLE_LOG && console.groupEnd();
                    if (responseJson.message)
                        console.error({ content: responseJson.message });
                    if (responseJson.error || responseJson.success === false) {
                        return [2 /*return*/, { success: false, data: responseJson }];
                    }
                    if (Array.isArray(responseJson)) {
                        return [2 /*return*/, { success: true, records: responseJson }];
                    }
                    return [2 /*return*/, __assign({ success: true }, responseJson)];
                case 4:
                    e_2 = _e.sent();
                    console.log("error", e_2);
                    return [2 /*return*/, { success: true }];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_3 = _e.sent();
                    console.log("error", e_3);
                    return [2 /*return*/, { success: false }];
                case 7: return [2 /*return*/];
            }
        });
    });
};
var baseUrl = "https://asia-east2-crafty-haiku-278603.cloudfunctions.net/reactshopping";
exports.baseApi = {
    makeUrl: function () {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i] = arguments[_i];
        }
        return url_join_1["default"].apply(void 0, __spreadArrays([baseUrl], parts));
    },
    get: function (url) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, call({ url: url, method: "GET" })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    getWithoutToken: function (url) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, call({ url: url, method: "GET", anonymus: true })];
    }); }); },
    post: function (_a) {
        var url = _a.url, model = _a.model;
        return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, call({ url: url, method: "POST", model: model })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        }); });
    },
    postWithoutToken: function (_a) {
        var url = _a.url, model = _a.model;
        return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, call({ url: url, method: "POST", model: model, anonymus: true })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        }); });
    },
    postMultipartFormdata: function (_a) {
        var url = _a.url, model = _a.model;
        return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, call({ url: url, method: "POST", model: model, contentType: "multipart/form-data" })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        }); });
    },
    put: function (_a) {
        var url = _a.url, model = _a.model;
        return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, call({ url: url, method: "PUT", model: model })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        }); });
    },
    "delete": function (_a) {
        var url = _a.url, model = _a.model;
        return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, call({ url: url, method: "DELETE", model: model })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        }); });
    }
};
