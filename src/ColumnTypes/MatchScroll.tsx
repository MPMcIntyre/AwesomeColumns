import React from "react";

type MatchScrollProps = {
  scroll: number;
  scrollResolution?: number;
  style?: any;
  updateScroll: (value: number) => void;
  setLastActive: (element: any) => void;
  lastActive: any;
};

type MatchScrollStates = {
  scroll: number;
  isActive: boolean;
};

export default class MatchScroll extends React.Component<
  MatchScrollProps,
  MatchScrollStates
> {
  element: any; // React useRef hook for element
  timeout: any;
  constructor(props: any) {
    super(props);
    this.state = {
      scroll: this.props.scroll,
      isActive: false,
    };
    this.element = React.createRef();
    this.timeout = null;
  }

  updateScroll() {
    this.element.current.scrollTo({
      top:
        ((this.element.current.scrollHeight - window.innerHeight) *
          this.state.scroll) /
        100,
      behavior: "auto",
    });
  }

  waitForChange = () => {
    let fractionToTop =
      (100 * this.element.current.scrollTop) /
      (this.element.current.scrollHeight - window.innerHeight);

    // This variable is created to account for scroll resolution problems near the start and end
    let updateValue = this.props.scroll;

    // isUpdated tests the current position relative to the previous state, and takes into account scroll res
    let isUpdated;
    if (this.props.scrollResolution) {
      if (this.props.scroll >= 100 - this.props.scrollResolution) {
        isUpdated = false;
        updateValue = 100;
      } else if (this.props.scroll <= this.props.scrollResolution) {
        isUpdated = false;
        updateValue = 0;
      } else {
        isUpdated =
          Math.abs(fractionToTop - this.state.scroll) <=
          this.props.scrollResolution;
      }
    } else {
      isUpdated = fractionToTop === this.state.scroll / 100;
    }

    let isSynced = this.state.scroll === this.props.scroll;
    let lastActive = this.element.current === this.props.lastActive;

    if (!isUpdated && isSynced) {
      // Update props.scroll to move other columns
      lastActive && this.props.updateScroll(fractionToTop);
      this.setState({
        scroll: fractionToTop,
      });
    } else if (!isSynced) {
      // Set state and scroll the column
      this.setState({
        scroll: updateValue,
      });
      this.updateScroll();
    }

    // Create RAF loop
    requestAnimationFrame(this.waitForChange);
  };

  componentDidMount() {
    this.waitForChange();
  }

  render() {
    return (
      <div
        className="AwesomeColumn"
        ref={this.element}
        style={{ ...this.props.style, overflow: "auto" }}
        onWheel={() => {
          this.props.setLastActive(this.element.current);
        }}
        onTouchMove={() => {
          this.props.setLastActive(this.element.current);
        }}>
        {this.props.children}
      </div>
    );
  }
}
