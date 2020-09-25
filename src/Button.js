import React from 'react';
import './Button.scss';

export function Button(props) {
    return (
        <button className="button">
            {props.children}
        </button>
    )
}