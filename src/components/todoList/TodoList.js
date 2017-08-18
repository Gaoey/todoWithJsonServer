import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { Content } from 'native-base'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { fetchTodo } from '../actions'

class TodoList extends Component {

    componentDidMount(){
        this.props.dispatch(fetchTodo());
    }

    render() {
        return (
            <Content>
                {todos.map((todo) => {
                    return <Todo key={todo.id}
                        {...todo}
                    />
                }
                )}
            </Content>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}


export default TodoList;
