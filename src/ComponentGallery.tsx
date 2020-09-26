import React from 'react';
import { Button } from './Button'
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
            </GalleryRow>
        </Gallery>
    );
}