import React from 'react';
import './styles/Button.scss';

export enum ButtonStyle {
    Primary,
    Secondary,
    Danger,
}

type ButtonProps = {
    children?: JSX.Element[] | string,
    buttonStyle?: ButtonStyle,
}

export function Button(props: ButtonProps) {
    let className = "button";
    switch (props.buttonStyle) {
        case ButtonStyle.Primary:
            className += "-primary";
            break;
        case ButtonStyle.Danger:
            className += "-danger";
            break;
    }
    return (
        <button className={className}>
            {props.children}
        </button>
    );
}