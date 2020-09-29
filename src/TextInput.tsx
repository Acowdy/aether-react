import React, { useState } from 'react';
import './styles/TextInput.scss';

export function TextInput(props: {disabled?: boolean}) {
    const [value, setValue] = useState("");
    return (
        <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            disabled={props.disabled}
            />
    );
}