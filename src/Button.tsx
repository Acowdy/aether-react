import React from 'react';
import './styles/Button.scss';

export enum ButtonStyle {
    Primary,
    Secondary,
    Danger,
}

type ButtonProps = {
    children?: React.ReactNode,
    buttonStyle?: ButtonStyle,
    disabled?: boolean,
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
        <button className={className} disabled={props.disabled}>
            {props.children}
        </button>
    );
}