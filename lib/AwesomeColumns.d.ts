import React from "react";
export default class AwesomeColumns extends React.Component<any, any> {
    containerStyle: any;
    constructor(props: any);
    componentDidMount(): void;
    updateLength: (length: number) => void;
    renderChildren: () => any;
    render(): JSX.Element;
}
declare type ColumnProps = {
    style?: any;
    columns?: number;
    reverse?: boolean;
    padding: string;
};
export declare class Column extends React.Component<ColumnProps, any> {
    columnStyle: any;
    childStyle: any;
    constructor(props: any);
    render(): JSX.Element;
}
export {};
