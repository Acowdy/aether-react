import React from 'react';
import { Button } from './Button'
import './ComponentGallery.scss';

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
                <Button>Button</Button>
            </GalleryRow>
        </Gallery>
    );
}