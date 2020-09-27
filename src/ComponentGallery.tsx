import React from 'react';
import { Button, ButtonStyle } from './Button';
import { TextInput } from './TextInput';
import './styles/ComponentGallery.scss';

function Gallery(props) {
    return (
        <div className="gallery">
            {props.children}
        </div>
    );
}

function GalleryRow(props) {
    return (
        <div className="row">
            <div className="row-header">
                {props.label}
            </div>
            <div className="row-data">
                <div className="row-elements-wrapper">
                    {props.children}
                </div>
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
                <Button buttonStyle={ButtonStyle.Primary} disabled>Disabled</Button>
                <Button buttonStyle={ButtonStyle.Secondary} disabled>Disabled</Button>
                <Button buttonStyle={ButtonStyle.Danger} disabled>Disabled</Button>
            </GalleryRow>
            <GalleryRow label="Text inputs">
                <div style={{maxWidth: "500px"}}>
                    <TextInput/>
                </div>
            </GalleryRow>
        </Gallery>
    );
}