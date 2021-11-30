import React from "react";
import MatchScroll from "./ColumnTypes/MatchScroll";

type ContainerProps = {
  height?: string;
  width?: string;
  style?: any;

  scrollResolution?: number;
  onBottom?: () => void;
  onTop?: () => void;
  onScroll?: (length: number) => void;
};

type ContainerStates = {
  scroll: number;
  lastActive: any;
  isAtLimit: boolean;
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
      lastActive: null,
      isAtLimit: true,
    };

    // AwesomeColumns style
    this.containerStyle = {
      ...this.props.style,
      position: "relative",
      overflow: "hidden",
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

  // Last component to update
  setLastActive = (element: any) => {
    this.setState({ lastActive: element });
  };

  // Update scroll position
  updateScroll = (length: number) => {
    this.setState({
      scroll: length,
    });

    // Run edge function if the scroll position is at the edge (obv)
    // The state 'isAtLimit' ensures that the function is not continuously run
    if (length === 100 && this.props.onBottom) {
      if (!this.state.isAtLimit) {
        this.props.onBottom();
        this.setState({ isAtLimit: true });
      }
    } else if (length === 0 && this.props.onTop) {
      if (!this.state.isAtLimit) {
        this.props.onTop();
        this.setState({ isAtLimit: true });
      }
    } else {
      // If we are not at the top or bottom limits, set the state to false
      this.setState({ isAtLimit: false });
    }
    // On scroll function
    if (this.props.onScroll) this.props.onScroll(length);
  };

  // Render the Columns
  renderChildren = () => {
    return React.Children.map(this.props.children, (child: any) => {
      const props: any = child?.props;
      return (
        <MatchScroll
          style={props.style && props.style}
          scrollResolution={
            this.props.scrollResolution && this.props.scrollResolution
          }
          updateScroll={this.updateScroll}
          setLastActive={this.setLastActive}
          lastActive={this.state.lastActive}
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
  reverse?: boolean;
  padding?: string;
};

export class Column extends React.Component<ColumnProps, any> {
  columnStyle: any;
  childStyle: any;

  constructor(props: any) {
    super(props);

    // Column style
    this.columnStyle = {
      ...props.style,
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
      <div className="AwesomeColumnContent" style={this.columnStyle}>
        <div className="AwesomeColumnSubContent" style={this.childStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
