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
var MatchScroll = /** @class */ (function (_super) {
    __extends(MatchScroll, _super);
    function MatchScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUpdate = function () {
            if (_this.props.scroll !== _this.state.scroll) {
                _this.setState({
                    scroll: _this.props.scroll,
                });
                _this.updateScroll();
            }
        };
        _this.handleScroll = function (e) {
            if (_this.state.isActive) {
                _this.setState({
                    scroll: 100 *
                        (e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)),
                });
                var fractionToTop = 100 *
                    (e.target.scrollTop / (e.target.scrollHeight - window.innerHeight));
                _this.props.updateScroll(fractionToTop);
            }
        };
        _this.state = {
            scroll: _this.props.scroll,
            isActive: false,
        };
        _this.element = React.createRef();
        _this.timeout = null;
        return _this;
    }
    MatchScroll.prototype.updateScroll = function () {
        var _this = this;
        var _a, _b;
        (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
            top: ((this.element.current.scrollHeight - window.innerHeight) *
                this.state.scroll) /
                100,
            behavior: this.props.smoothScroll ? "smooth" : "auto",
        });
        this.timeout = setTimeout(function () {
            var _a, _b;
            (_b = (_a = _this.element) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
                top: ((_this.element.current.scrollHeight - window.innerHeight) *
                    _this.state.scroll) /
                    100,
                behavior: _this.props.smoothScroll ? "smooth" : "auto",
            });
            _this.timeout = null;
        }, 100);
    };
    MatchScroll.prototype.componentDidUpdate = function () {
        if (!this.state.isActive) {
            this.handleUpdate();
        }
    };
    MatchScroll.prototype.componentWillUnmount = function () {
        clearTimeout(this.timeout);
    };
    MatchScroll.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "AwesomeColumn", ref: this.element, style: __assign(__assign({}, this.props.style), { overflow: "scroll" }), onMouseEnter: function () {
                _this.setState({ isActive: true });
            }, onMouseLeave: function () {
                _this.setState({ isActive: false });
            }, onTouchStart: function () {
                _this.setState({ isActive: true });
            }, onTouchEnd: function () {
                _this.setState({ isActive: false });
            }, onTouchMove: this.handleScroll, onScroll: this.handleScroll }, this.props.children));
    };
    return MatchScroll;
}(React.Component));
export default MatchScroll;
