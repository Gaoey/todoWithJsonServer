import {
    FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE
} from '../constants/actionConstant.js'

const initState = {
    todoList: {
        todos: [],
        error: null,
        loading: true
    },
    newTodo: {
        todos: [],
        error: null,
        loading: true
    }
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                todoList: {
                    todos: [],
                    error: null,
                    loading: true
                }
            }
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                todoList: {
                    todos: action.payload,
                    error: null,
                    loading: false
                }
            }
        case FETCH_TODO_FAILURE:
            return {
                ...state,
                todoList: {
                    todos: null,
                    error: action.payload,
                    loading: false
                }

            }
        case ADD_TODO:
            return {
                ...state,
                newTodo: {
                    todos: [],
                    error: null,
                    loading: true
                }
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                newTodo: {
                    todos: action.payload,
                    error: null,
                    loading: false
                }
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                newTodo: {
                    todos: null,
                    error: action.payload,
                    loading: false
                }

            }

        default:
            return state
    }
}

export default todoReducer