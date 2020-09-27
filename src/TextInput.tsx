import React from 'react';
import './styles/TextInput.scss';

export class TextInput extends React.Component<{}, {value: string}> {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
        );
    }
}