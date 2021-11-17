import React from "react";

export default class MatchScroll extends React.Component<any, any> {
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
    this.element?.current?.scrollTo({
      top:
        ((this.element.current.scrollHeight - window.innerHeight) *
          this.state.scroll) /
        100,
      behavior: this.props.smoothScroll ? "smooth" : "auto",
    });
    this.timeout = setTimeout(() => {
      this.element?.current?.scrollTo({
        top:
          ((this.element.current.scrollHeight - window.innerHeight) *
            this.state.scroll) /
          100,
        behavior: this.props.smoothScroll ? "smooth" : "auto",
      });
      this.timeout = null;
    }, 100);
  }

  handleUpdate = () => {
    if (this.props.scroll !== this.state.scroll) {
      this.setState({
        scroll: this.props.scroll,
      });
      this.updateScroll();
    }
  };

  componentDidUpdate() {
    if (!this.state.isActive) {
      this.handleUpdate();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div
        ref={this.element}
        style={{ ...this.props.style, overflow: "scroll" }}
        onMouseEnter={() => {
          this.setState({ isActive: true });
        }}
        onMouseLeave={() => {
          this.setState({ isActive: false });
        }}
        onScroll={(e: any) => {
          if (this.state.isActive) {
            this.setState({
              scroll:
                100 *
                (e.target.scrollTop /
                  (e.target.scrollHeight - window.innerHeight)),
            });

            let fractionToTop =
              100 *
              (e.target.scrollTop /
                (e.target.scrollHeight - window.innerHeight));
            this.props.updateLength(fractionToTop);
          }
        }}>
        {this.props.children}
      </div>
    );
  }
}
