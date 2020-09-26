import React from 'react';
import './styles/Button.scss';

type ButtonProps = {
    children?: JSX.Element[] | string,
}

export function Button(props: ButtonProps) {
    return (
        <button className="button">
            {props.children}
        </button>
    );
}