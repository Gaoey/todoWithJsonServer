import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Content } from 'native-base'
import PropTypes from 'prop-types'

import { fetchTodo, addTodo, deleteTodo } from '../actions/index'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/todoList/TodoList';


class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchTodo();
    }

    render() {
        const { addTodo, data, deleteTodo } = this.props
        return (
            <Container>
                <Content>
                    <AddTodo addTodo={addTodo} />
                    <TodoList todos={data.todos} onClickDelete={deleteTodo}/>
                </Content>
            </Container>
        )
    }
}

MainContainer.propTypes = {
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

    fetchTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        data: state.data.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTodo: () => {
            return dispatch(fetchTodo())
        },
        addTodo: (text) => {
            return dispatch(addTodo(text))
        },
        deleteTodo: (id) =>{
            return dispatch(deleteTodo(id))
        }
    }
}

export default connect(
    mapStateToProps,
    { fetchTodo, addTodo, deleteTodo }
)(MainContainer);
