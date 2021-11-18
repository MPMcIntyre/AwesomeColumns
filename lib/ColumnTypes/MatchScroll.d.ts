import React from "react";
declare type MatchScrollProps = {
    scroll: number;
    smoothScroll: boolean;
    style: any;
    updateScroll: (value: number) => void;
};
export default class MatchScroll extends React.Component<MatchScrollProps, any> {
    element: any;
    timeout: any;
    constructor(props: any);
    updateScroll(): void;
    handleUpdate: () => void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
