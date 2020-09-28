import React from 'react';
import './styles/Card.scss';

type CardProps = {
    children?: React.ReactNode,
    backgroundImage?: string,
    backgroundImageAltText?: string,
    width?: string,
    height?: string,
}

export function CardTitle({children}: {children?: React.ReactNode}) {
    return (
        <div className="card-title">
            {children}
        </div>
    );
}

export function CardBody({children}: {children?: React.ReactNode}) {
    return (
        <div className="card-body">
            {children}
        </div>
    );
}

export function Card(props: CardProps) {
    let className = "card";
    if (props.backgroundImage) {
        className += " card-image";
    }
    return (
        <div className={className} style={{width: props.width, height: props.height}}>
            {props.backgroundImage
                ? <img
                    className="background-image"
                    src={props.backgroundImage}
                    alt={props.backgroundImageAltText} />
                : ''}
            {props.children}
        </div>
    );
}