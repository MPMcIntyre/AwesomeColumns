import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export default class MatchScroll extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdate = () => {
            if (this.props.scroll !== this.state.scroll) {
                this.setState({
                    scroll: this.props.scroll,
                });
                this.updateScroll();
            }
        };
        this.state = {
            scroll: this.props.scroll,
            isActive: false,
        };
        this.element = React.createRef();
        this.timeout = null;
    }
    updateScroll() {
        var _a, _b;
        (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
            top: ((this.element.current.scrollHeight - window.innerHeight) *
                this.state.scroll) /
                100,
            behavior: this.props.smoothScroll ? "smooth" : "auto",
        });
        this.timeout = setTimeout(() => {
            var _a, _b;
            (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
                top: ((this.element.current.scrollHeight - window.innerHeight) *
                    this.state.scroll) /
                    100,
                behavior: this.props.smoothScroll ? "smooth" : "auto",
            });
            this.timeout = null;
        }, 100);
    }
    componentDidUpdate() {
        if (!this.state.isActive) {
            this.handleUpdate();
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    render() {
        return (_jsx("div", Object.assign({ ref: this.element, style: Object.assign(Object.assign({}, this.props.style), { overflow: "scroll" }), onMouseEnter: () => {
                this.setState({ isActive: true });
            }, onMouseLeave: () => {
                this.setState({ isActive: false });
            }, onScroll: (e) => {
                if (this.state.isActive) {
                    this.setState({
                        scroll: 100 *
                            (e.target.scrollTop /
                                (e.target.scrollHeight - window.innerHeight)),
                    });
                    let fractionToTop = 100 *
                        (e.target.scrollTop /
                            (e.target.scrollHeight - window.innerHeight));
                    this.props.updateLength(fractionToTop);
                }
            } }, { children: this.props.children }), void 0));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF0Y2hTY3JvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9Db2x1bW5UeXBlcy9NYXRjaFNjcm9sbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixNQUFNLENBQUMsT0FBTyxPQUFPLFdBQVksU0FBUSxLQUFLLENBQUMsU0FBbUI7SUFHaEUsWUFBWSxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQTZCZixpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07aUJBQzFCLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUM7UUFuQ0EsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDekIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxZQUFZOztRQUNWLE1BQUEsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPLDBDQUFFLFFBQVEsQ0FBQztZQUM5QixHQUFHLEVBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDcEIsR0FBRztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1NBQ3RELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTs7WUFDN0IsTUFBQSxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLE9BQU8sMENBQUUsUUFBUSxDQUFDO2dCQUM5QixHQUFHLEVBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDcEIsR0FBRztnQkFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTTthQUN0RCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBV0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLENBQ0wsNEJBQ0UsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ2pCLEtBQUssa0NBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUUsUUFBUSxFQUFFLFFBQVEsS0FDaEQsWUFBWSxFQUFFLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFDRCxZQUFZLEVBQUUsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQyxFQUNELFFBQVEsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNaLE1BQU0sRUFDSixHQUFHOzRCQUNILENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTO2dDQUNqQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDbEQsQ0FBQyxDQUFDO29CQUVILElBQUksYUFBYSxHQUNmLEdBQUc7d0JBQ0gsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVM7NEJBQ2pCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN4QztZQUNILENBQUMsZ0JBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLFlBQ2hCLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRiJ9