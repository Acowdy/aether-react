import React from 'react';
import { Button, ButtonStyle } from './Button';
import { TextInput } from './TextInput';
import { Card, CardTitle, CardBody } from './Card';
import './styles/ComponentGallery.scss';
import image from './autumn.jpg';

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
                <div style={{maxWidth: "250px", width: "100%"}}>
                    <TextInput/>
                </div>
                <div style={{maxWidth: "250px", width: "100%"}}>
                    <TextInput disabled/>
                </div>
            </GalleryRow>
            <GalleryRow label="Cards">
                <Card width="180px">
                    This is a card!
                </Card>
                <Card width="180px">
                    <CardTitle>
                        Documents
                    </CardTitle>
                </Card>
                <Card width="180px">
                    <CardTitle>
                        Title
                    </CardTitle>
                    <CardBody>
                        Body text
                    </CardBody>
                </Card>
                <Card backgroundImage={image}
                      backgroundImageAltText="Autumn scene"
                      width="180px"
                      height="180px">
                    <CardTitle>
                        Autumn
                    </CardTitle>
                </Card>
            </GalleryRow>
        </Gallery>
    );
}