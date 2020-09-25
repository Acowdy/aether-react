import React from 'react';
import './styles/Card.scss';

type CardProps = {children?: JSX.Element | string}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            {props.children}
        </div>
    );
}