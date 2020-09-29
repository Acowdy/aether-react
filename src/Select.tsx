import React, { useState } from 'react';
import './styles/Select.scss';

export function SelectItem({children, value}) {
    return (
        <option value={value}>
            {children}
        </option>
    );
}

export function Select({children, value}) {
    const [val, setValue] = useState(value);
    return (
        <select value={val} onChange={event => setValue(event.target.value)}>
            {children}
        </select>
    );
}