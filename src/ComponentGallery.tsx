import React from 'react';
import { Button, ButtonStyle } from './Button';
import { TextInput } from './TextInput';
import { Card, CardTitle, CardBody } from './Card';
import { Select, SelectItem } from './Select';
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

            <h3>Selects</h3>
            <GalleryRow>
                <div style={{maxWidth: "200px", width: "100%"}}>
                    <Select value="N/A">
                        <SelectItem value="1">One</SelectItem>
                        <SelectItem value="2">Two</SelectItem>
                        <SelectItem value="3">Three</SelectItem>
                        <SelectItem value="N/A">N/A</SelectItem>
                    </Select>
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

            <article className="article-centered">
                <h2>Centered article</h2>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus. Urna id volutpat lacus laoreet. Dictum varius duis at consectetur lorem donec massa sapien. Adipiscing elit pellentesque habitant morbi tristique. Morbi tristique senectus et netus et malesuada. Ut tellus elementum sagittis vitae. Feugiat in ante metus dictum at tempor. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Aliquet risus feugiat in ante metus dictum at tempor commodo. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Convallis tellus id interdum velit laoreet id donec. Vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi. Bibendum est ultricies integer quis. Urna duis convallis convallis tellus id interdum. Tempor id eu nisl nunc mi ipsum faucibus. Vel orci porta non pulvinar neque laoreet suspendisse. Vel elit scelerisque mauris pellentesque.</p>

                <p>Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Vehicula ipsum a arcu cursus vitae congue. In dictum non consectetur a. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Sagittis nisl rhoncus mattis rhoncus. Sit amet consectetur adipiscing elit duis. Cursus mattis molestie a iaculis at. Accumsan lacus vel facilisis volutpat est velit egestas dui. Nunc sed id semper risus. Morbi tristique senectus et netus et malesuada fames. Tristique senectus et netus et malesuada. Porta lorem mollis aliquam ut porttitor leo. Viverra orci sagittis eu volutpat.</p>

                <h3>Sub-heading</h3>

                <p>Massa tincidunt dui ut ornare lectus sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Semper auctor neque vitae tempus quam pellentesque. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Vel turpis nunc eget lorem dolor. Amet est placerat in egestas erat imperdiet sed. Nisi porta lorem mollis aliquam. Tempus urna et pharetra pharetra. Sociis natoque penatibus et magnis dis parturient montes nascetur. A lacus vestibulum sed arcu non odio euismod lacinia.</p>
            </article>
        </div>
    );
}