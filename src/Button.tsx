import React from 'react';
import './Button.scss';

export enum ButtonStyle {
    Primary = "primary",
    Default = "default",
}

export function Button(props: {buttonStyle?: ButtonStyle, children?}) {
    let className = "button";
    if (props.buttonStyle) {
        className += " " + props.buttonStyle;
    }
    return (
        <button className={className}>
            {props.children}
        </button>
    );
}