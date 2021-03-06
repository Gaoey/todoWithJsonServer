import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { Content } from 'native-base'
import PropTypes from 'prop-types'
import Todo from './Todo'


class TodoList extends Component {

    render() {
        const { todos, onClickDelete, onClickToggle} = this.props
        return (
            <Content>
                {todos.map((todo) => {
                    {
                        return <Todo key={todo.id}
                            {...todo}
                            onClickDelete={onClickDelete}
                            onClickToggle={onClickToggle}
                        />
                    }
                }
                )}
            </Content>
        );
    }
}

export default TodoList
