import React from 'react';
import './styles/Card.scss';

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

type CardProps = {
    children?: React.ReactNode,
    backgroundImage?: string,
    backgroundImageAltText?: string,
    width?: string,
    height?: string,
    href?: string,
}

export function Card(props: CardProps) {
    let className = "card";
    if (props.backgroundImage) {
        className += " card-image";
    }
    let elem = props.href ? "a" : "div";
    let style = {width: props.width, height: props.height};
    let background: React.ReactNode = '';
    if (props.backgroundImage) {
        background =
            <img
                className="background-image"
                src={props.backgroundImage}
                alt={props.backgroundImageAltText} />;
    }
    return React.createElement(
        elem,
        {className, style, href: props.href},
        background,
        props.children,
    );
}