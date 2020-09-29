import React from 'react';
import { Button, ButtonStyle } from './Button';
import { TextInput } from './TextInput';
import { Card, CardTitle, CardBody } from './Card';
import './styles/ComponentGallery.scss';
import image from './autumn.jpg';

function GalleryRow(props) {
    return (
        <div className="gallery-row">
            {props.children}
        </div>
    );
}

export default function ComponentGallery(props) {
    return (
        <div className="gallery">
            <h3>Buttons</h3>
            <GalleryRow>
                <Button>Default</Button>
                <Button buttonStyle={ButtonStyle.Primary}>Primary</Button>
                <Button buttonStyle={ButtonStyle.Secondary}>Secondary</Button>
                <Button buttonStyle={ButtonStyle.Danger}>Danger</Button>
                <Button buttonStyle={ButtonStyle.Primary} disabled>Disabled</Button>
                <Button buttonStyle={ButtonStyle.Secondary} disabled>Disabled</Button>
                <Button buttonStyle={ButtonStyle.Danger} disabled>Disabled</Button>
            </GalleryRow>

            <h3>Text inputs</h3>
            <GalleryRow>
                <div style={{maxWidth: "250px", width: "100%"}}>
                    <TextInput/>
                </div>
                <div style={{maxWidth: "250px", width: "100%"}}>
                    <TextInput disabled/>
                </div>
            </GalleryRow>

            <h3>Cards</h3>
            <GalleryRow>
                <Card width="180px">
                    This is a card!
                </Card>
                <Card width="180px">
                    <CardTitle>
                        Title
                    </CardTitle>
                    <CardBody>
                        Body text
                    </CardBody>
                </Card>
                <Card width="180px">
                    <CardTitle>
                        Documents
                    </CardTitle>
                </Card>
                <Card backgroundImage={image}
                        backgroundImageAltText="Autumn scene"
                        width="180px"
                        height="180px"
                        href="https://en.wikipedia.org/wiki/Autumn">
                    <CardTitle>
                        Autumn
                    </CardTitle>
                </Card>
            </GalleryRow>

            <article>
                <h3>Article</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui orci, vehicula sed aliquam eu, laoreet sed magna. Vivamus efficitur interdum tortor et fringilla. Mauris sollicitudin pretium pulvinar. Proin porttitor dignissim neque sed sollicitudin. Morbi vehicula venenatis arcu, sed rutrum velit hendrerit eget. Donec vitae risus porta, semper velit sed, aliquam velit. Sed elementum, dui efficitur pharetra commodo, lorem lectus posuere dolor, ac euismod velit dui vel ipsum. Nam tempus magna vitae justo sollicitudin, sed sollicitudin neque vulputate. Duis mattis viverra pretium. Duis rutrum elementum finibus. Vestibulum pharetra ultricies congue. Morbi hendrerit urna vitae nulla euismod egestas. Maecenas ut elit molestie, sollicitudin quam et, accumsan est. Pellentesque orci magna, commodo a neque quis, ultrices congue odio. Integer ut semper sapien. In a gravida ante.</p>

                <h4>Sub-heading</h4>
                <p>Vivamus et turpis nibh. In dictum tortor nec ultricies venenatis. In hac habitasse platea dictumst. Pellentesque tincidunt ligula ac velit tempor placerat. Aenean eget eleifend est, et gravida mauris. Sed maximus vestibulum diam eget porta. Curabitur condimentum arcu nunc, sed gravida ligula pellentesque quis. Nulla nec nisl non risus condimentum dictum.</p>

                <p>In hac habitasse platea dictumst. Nulla facilisi. Sed sed sapien neque. Suspendisse finibus est eros, at vehicula nibh semper eu. Donec gravida, quam nec pellentesque fermentum, libero est porta velit, ac aliquam metus ligula nec ligula. Maecenas commodo bibendum purus, a ornare nulla sodales eu. Aliquam maximus efficitur nisl sit amet cursus. Morbi ligula nisi, elementum at pulvinar et, tincidunt quis lorem. Mauris nec magna id eros iaculis imperdiet et at augue. Nam augue neque, dignissim ut neque nec, dapibus pulvinar orci. Mauris blandit magna augue, varius malesuada quam tincidunt et. Etiam porttitor lacus id odio vulputate vulputate.</p>
            </article>
        </div>
    );
}