var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React from "react";
import MatchScroll from "./ColumnTypes/MatchScroll";
var AwesomeColumns = /** @class */ (function (_super) {
    __extends(AwesomeColumns, _super);
    function AwesomeColumns(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        // componentDidMount() {}
        // Update scroll position
        _this.updateScroll = function (length) {
            _this.setState({
                scroll: length,
            });
        };
        // Render the Columns
        _this.renderChildren = function () {
            return React.Children.map(_this.props.children, function (child) {
                var props = child === null || child === void 0 ? void 0 : child.props;
                return (React.createElement(MatchScroll, { style: props.style && props.style, smoothScroll: _this.props.smoothScroll ? true : false, updateScroll: _this.updateScroll, scroll: _this.state.scroll }, child));
            });
        };
        _this.state = {
            scroll: 0,
        };
        // AwesomeColumns style
        _this.containerStyle = __assign(__assign({}, _this.props.style), { position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(10px, 1fr))", width: _this.props.width
                ? _this.props.width
                : ((_a = _this.props.style) === null || _a === void 0 ? void 0 : _a.width)
                    ? _this.props.style.width
                    : "100%", height: _this.props.height
                ? _this.props.height
                : ((_b = _this.props.style) === null || _b === void 0 ? void 0 : _b.height)
                    ? _this.props.style.height
                    : "100vh" });
        return _this;
    }
    AwesomeColumns.prototype.render = function () {
        return (React.createElement("div", { className: "AwesomeColumnsContainer", style: this.containerStyle }, this.renderChildren()));
    };
    return AwesomeColumns;
}(React.Component));
export default AwesomeColumns;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        // Column style
        _this.columnStyle = __assign({}, props.style);
        // ChildStyle
        _this.childStyle = {
            display: "grid",
            alignContent: "center",
            padding: ((_a = _this.props) === null || _a === void 0 ? void 0 : _a.padding) ? _this.props.padding : "0.5rem",
            transform: _this.props.reverse ? "rotate(-180deg)" : "",
        };
        return _this;
    }
    // componentDidUpdate() {}
    // componentDidMount() {}
    Column.prototype.render = function () {
        return (React.createElement("div", { className: "AwesomeColumnContent", style: this.columnStyle },
            React.createElement("div", { className: "AwesomeColumnSubContent", style: this.childStyle }, this.props.children)));
    };
    return Column;
}(React.Component));
export { Column };
