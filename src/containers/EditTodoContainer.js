import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Header, Content, Form, Item, Input } from 'native-base'

import { editTodo } from '../actions/index'

class EditTodo extends Component {

    handleKeyPress = (event, id) => {
        if (event.nativeEvent.key === 'Enter') {
            let text = this.inputText.wrappedInstance._lastNativeText
            this.props.editTodo(id, text)
        }
    }

    render() {
        const { id, text } = this.props
        return (
            <Content>
                <Form>
                    <Item>
                        <Input defaultValue={text}
                            ref={(text) => { this.inputText = text }}
                            onKeyPress={(event) => this.handleKeyPress(event, id)}
                        />
                    </Item>
                </Form>
            </Content>
        )
    }
}

EditTodo.propTypes = {
    data: PropTypes.shape({
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                completed: PropTypes.bool,
                text: PropTypes.string
            }).isRequired
        ).isRequired,
        error: PropTypes.string,
        loading: PropTypes.bool.isRequired
    }).isRequired,

    editTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        data: state.data.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodo: (id, text) => {
            return dispatch(editTodo(id, text))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodo);
