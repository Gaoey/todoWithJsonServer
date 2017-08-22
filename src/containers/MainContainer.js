import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Content } from 'native-base'
import PropTypes from 'prop-types'

import actionCreator from '../actions/index'
import { fetchTodo } from '../actions/index'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/todoList/TodoList';


class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchTodo();
    }

    render() {
        return (
            <Container>
                <Content>
                    <AddTodo addTodo={() => this.props.addTodo} />
                    <TodoList todos={this.props.data.todos} />
                </Content>
            </Container>
        )
    }
}

MainContainer.propTypes = {
    data: PropTypes.shape({
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        error: PropTypes.string,
        loading: PropTypes.bool.isRequired
    }).isRequired
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
        addTodo: (id, text) => {
            return dispatch(addTodo(id, text))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
