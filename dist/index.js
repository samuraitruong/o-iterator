"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function iterate(data, paths, parents, callback) {
    if (data == null) {
        return;
    }
    var currentPaths = __spreadArrays(paths);
    var parentsObject = __spreadArrays(parents);
    var value = data;
    callback(data, value, paths, parentsObject);
    if (value && Array.isArray(value)) {
        value.forEach(function (item) {
            iterate(item, currentPaths, parentsObject, callback);
        });
    }
    if (value && typeof value === "object" && !Array.isArray(value)) {
        parentsObject.push(value);
        Object
            .keys(value)
            .forEach(function (item) {
            iterate(value[item], currentPaths.concat([item]), parentsObject, callback);
        });
    }
}
exports.iterate = iterate;
//# sourceMappingURL=index.js.map