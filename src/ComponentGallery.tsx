import React from 'react';
import { Button, ButtonStyle } from './Button'
import Card from './Card'
import './styles/ComponentGallery.scss';

function Gallery(props) {
    return (
        <div className="gallery">
            {props.children}
        </div>
    )
}

function GalleryRow(props) {
    return (
        <div className="row">
            <div className="label">
                {props.label}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default function ComponentGallery(props) {
    return (
        <Gallery>
            <GalleryRow label="Buttons">
                <Button>Default</Button>
                <Button buttonStyle={ButtonStyle.Filled}>Filled</Button>
                <Button buttonStyle={ButtonStyle.Outline}>Outline</Button>
                <Button buttonStyle={ButtonStyle.Flat}>Flat</Button>
            </GalleryRow>
            <GalleryRow label="Cards">
                <Card>Hello world!</Card>
            </GalleryRow>
        </Gallery>
    );
}