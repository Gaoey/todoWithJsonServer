import { connect } from 'react-redux'
import TodoList from '../components/todoList/TodoList'

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

// show in TodoList
const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoList