import React from "react";
import MatchScroll from "./ColumnTypes/MatchScroll";

type ContainerProps = {
  height?: string;
  width?: string;
  style?: any;
  smoothScroll: boolean;
};

type ContainerStates = {
  scroll: number;
};
export default class AwesomeColumns extends React.Component<
  ContainerProps,
  ContainerStates
> {
  containerStyle: any;
  constructor(props: any) {
    super(props);

    this.state = {
      scroll: 0,
    };

    // AwesomeColumns style
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

  // componentDidMount() {}

  // Update scroll position
  updateScroll = (length: number) => {
    this.setState({
      scroll: length,
    });
  };

  // Render the Columns
  renderChildren = () => {
    return React.Children.map(this.props.children, (child: any) => {
      const props: any = child?.props;
      return (
        <MatchScroll
          style={props.style && props.style}
          smoothScroll={this.props.smoothScroll ? true : false}
          updateScroll={this.updateScroll}
          scroll={this.state.scroll}>
          {child}
        </MatchScroll>
      );
    });
  };

  render() {
    return (
      <div className="AwesomeColumnsContainer" style={this.containerStyle}>
        {this.renderChildren()}
      </div>
    );
  }
}

// Column
type ColumnProps = {
  style?: any;
  columns?: number;
  reverse?: boolean;
  padding: string;
};

export class Column extends React.Component<ColumnProps, null> {
  columnStyle: any;
  childStyle: any;

  constructor(props: any) {
    super(props);
    // Column style
    this.columnStyle = {
      ...props.style,
      gridColumn: this.props.columns
        ? `span ${this.props.columns}`
        : this.props.style?.gridColumn
        ? this.props.style.gridColumn
        : "",
    };

    // ChildStyle
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
      <div className="AwesomeColumn" style={this.columnStyle}>
        <div className="AwesomeColumnContent" style={this.childStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
