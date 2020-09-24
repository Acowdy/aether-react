import React from 'react';
import './ComponentGallery.scss';

export default function ComponentGallery(props) {
    return (
        <div className="component-gallery">
            {props.children}
        </div>
    )
}