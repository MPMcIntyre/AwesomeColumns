import React from "react";
import MatchScroll from "./ColumnTypes/MatchScroll";

export default class AwesomeColumns extends React.Component<any, any> {
  containerStyle: any;
  constructor(props: any) {
    super(props);

    this.state = {
      scroll: this.props.scroll ? this.props.scroll : 0,
      ghostDivLength: 0,
      ghostDivWidth: 0,
    };

    this.containerStyle = {
      ...this.props.style,
      position: "relative",
      overflow: "scroll",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(10px, 1fr))",
      width: this.props.width
        ? this.props.width
        : this.props.style?.width
        ? this.props.style.width
        : "100%",
      height: this.props.height
        ? this.props.height
        : this.props.style?.height
        ? this.props.style.height
        : "100vh",
    };
  }

  componentDidMount() {
    this.setState({
      currentScrollHeight: 0,
    });
  }

  updateLength = (length: number) => {
    this.setState({
      currentScrollHeight: length,
    });
  };

  renderChildren = () => {
    return React.Children.map(this.props.children, (child: any, i: number) => {
      // if (React.isValidElement(child)) {
      const props: any = child?.props;
      // if (React.Children.count(props.children) > 1) {
      //   React.Children.forEach(child, (subChild: any) => {});
      // }
      return (
        <MatchScroll
          style={props.style && props.style}
          smoothScroll={this.props.smoothScroll ? true : false}
          index={i}
          updateLength={this.updateLength}
          scroll={this.state.currentScrollHeight}>
          {child}
        </MatchScroll>
      );
      // }
    });
  };

  render() {
    return <div style={this.containerStyle}>{this.renderChildren()}</div>;
  }
}

type ColumnProps = {
  style?: any;
  columns?: number;
  reverse?: boolean;
  padding: string;
};

export class Column extends React.Component<ColumnProps, any> {
  columnStyle: any;
  childStyle: any;

  constructor(props: any) {
    super(props);
    this.columnStyle = { ...props.style };

    this.childStyle = {
      display: "grid",
      alignContent: "center",
      padding: this.props?.padding ? this.props.padding : "0.5rem",
      transform: this.props.reverse ? "rotate(-180deg)" : "",
    };
  }

  // componentDidUpdate() {}
  // componentDidMount() {}

  render() {
    return (
      <div style={this.columnStyle}>
        <div style={this.childStyle}>{this.props.children}</div>
      </div>
    );
  }
}
