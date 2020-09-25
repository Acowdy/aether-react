import React from 'react';
import './styles/Button.scss';

export enum ButtonStyle {
    Outline = "outline",
    Filled = "filled",
    Flat = "flat",
}

type ButtonProps = {
    children?: JSX.Element[] | string,
    buttonStyle?: ButtonStyle,
}

export function Button(props: ButtonProps) {
    let className;
    switch (props.buttonStyle) {
        case ButtonStyle.Filled:
            className = "button-filled";
            break;
        case ButtonStyle.Flat:
            className = "button-flat";
            break;
        default:
            className = "button-outline";
            break;
    }
    return (
        <button className={className}>
            {props.children}
        </button>
    );
}