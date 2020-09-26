import React from 'react';
import { Button, ButtonStyle } from './Button'
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
            <div className="row-header">
                {props.label}
            </div>
            <div className="row-data">
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
                <Button buttonStyle={ButtonStyle.Primary}>Primary</Button>
                <Button buttonStyle={ButtonStyle.Secondary}>Secondary</Button>
                <Button buttonStyle={ButtonStyle.Danger}>Danger</Button>
            </GalleryRow>
        </Gallery>
    );
}