import React, { Component } from 'react'
import { Item, Input, Text } from 'native-base'

class AddTodo extends Component {

    handleKeyPress = (event) => {
        if (event.nativeEvent.key === 'Enter') {
            let text = this.inputText.wrappedInstance._lastNativeText
            this.props.addTodo(text)
        }
    }

    render() {
        return (
            <Item>
                <Input ref={(text) => { this.inputText = text }}
                    placeholder={"input text"}
                    onKeyPress={(event) => this.handleKeyPress(event)}
                />
            </Item>
        );
    }
};

export default AddTodo;
