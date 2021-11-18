import React from "react";
declare type ContainerProps = {
    height?: string;
    width?: string;
    style?: any;
    smoothScroll: boolean;
};
declare type ContainerStates = {
    scroll: number;
};
export default class AwesomeColumns extends React.Component<ContainerProps, ContainerStates> {
    containerStyle: any;
    constructor(props: any);
    updateScroll: (length: number) => void;
    renderChildren: () => any;
    render(): JSX.Element;
}
declare type ColumnProps = {
    style?: any;
    columns?: number;
    reverse?: boolean;
    padding: string;
};
export declare class Column extends React.Component<ColumnProps, null> {
    columnStyle: any;
    childStyle: any;
    constructor(props: any);
    render(): JSX.Element;
}
export {};
