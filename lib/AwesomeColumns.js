import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import MatchScroll from "./ColumnTypes/MatchScroll";
export default class AwesomeColumns extends React.Component {
    constructor(props) {
        var _a, _b;
        super(props);
        this.updateLength = (length) => {
            this.setState({
                currentScrollHeight: length,
            });
        };
        this.renderChildren = () => {
            return React.Children.map(this.props.children, (child, i) => {
                if (React.isValidElement(child)) {
                    const props = child === null || child === void 0 ? void 0 : child.props;
                    // if (React.Children.count(props.children) > 1) {
                    //   React.Children.forEach(child, (subChild: any) => {});
                    // }
                    return (_jsx(MatchScroll, Object.assign({ style: props.style && props.style, smoothScroll: this.props.smoothScroll ? true : false, index: i, updateLength: this.updateLength, scroll: this.state.currentScrollHeight }, { children: child }), void 0));
                }
            });
        };
        this.state = {
            scroll: this.props.scroll ? this.props.scroll : 0,
            ghostDivLength: 0,
            ghostDivWidth: 0,
        };
        this.containerStyle = Object.assign(Object.assign({}, this.props.style), { position: "relative", overflow: "scroll", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(10px, 1fr))", width: this.props.width
                ? this.props.width
                : ((_a = this.props.style) === null || _a === void 0 ? void 0 : _a.width)
                    ? this.props.style.width
                    : "100%", height: this.props.height
                ? this.props.height
                : ((_b = this.props.style) === null || _b === void 0 ? void 0 : _b.height)
                    ? this.props.style.height
                    : "100vh" });
    }
    componentDidMount() {
        this.setState({
            currentScrollHeight: 0,
        });
    }
    render() {
        return _jsx("div", Object.assign({ style: this.containerStyle }, { children: this.renderChildren() }), void 0);
    }
}
export class Column extends React.Component {
    constructor(props) {
        var _a;
        super(props);
        this.columnStyle = Object.assign({}, props.style);
        this.childStyle = {
            display: "grid",
            alignContent: "center",
            padding: ((_a = this.props) === null || _a === void 0 ? void 0 : _a.padding) ? this.props.padding : "0.5rem",
            transform: this.props.reverse ? "rotate(-180deg)" : "",
        };
    }
    // componentDidUpdate() {}
    // componentDidMount() {}
    render() {
        return (_jsx("div", Object.assign({ style: this.columnStyle }, { children: _jsx("div", Object.assign({ style: this.childStyle }, { children: this.props.children }), void 0) }), void 0));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXdlc29tZUNvbHVtbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Bd2Vzb21lQ29sdW1ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBb0IsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxXQUFXLE1BQU0sMkJBQTJCLENBQUM7QUFFcEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxjQUFlLFNBQVEsS0FBSyxDQUFDLFNBQW1CO0lBRW5FLFlBQVksS0FBVTs7UUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBaUNmLGlCQUFZLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNaLG1CQUFtQixFQUFFLE1BQU07YUFDNUIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsbUJBQWMsR0FBRyxHQUFHLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQVUsRUFBRSxDQUFTLEVBQUUsRUFBRTtnQkFDdkUsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMvQixNQUFNLEtBQUssR0FBUSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsS0FBSyxDQUFDO29CQUNoQyxrREFBa0Q7b0JBQ2xELDBEQUEwRDtvQkFDMUQsSUFBSTtvQkFDSixPQUFPLENBQ0wsS0FBQyxXQUFXLGtCQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQ2pDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BELEtBQUssRUFBRSxDQUFDLEVBQ1IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQy9CLE1BQU0sRUFBRSxJ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