import {
    FETCH_TODO,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    EDIT_TODO,
    EDIT_TODO_SUCCESS,
    EDIT_TODO_FAILURE,
    DELETE_TODO,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    TOGGLE_TODO,
    TOGGLE_TODO_SUCCESS,
    TOGGLE_TODO_FAILURE
} from '../constants/actionConstant.js'

const initState = {
    todoList: {
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
        // ADD
        case ADD_TODO:
            return {
                ...state
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos.concat(action.payload),
                    error: null,
                    loading: false
                }
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos,
                    error: action.payload,
                    loading: false
                }
            }
        // EDIT
        case EDIT_TODO:
            return {
                ...state,
            }
        case EDIT_TODO_SUCCESS:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos.map((elem) => {
                        return elem.id == action.payload.id ? action.payload : elem
                    }),
                    error: null,
                    loading: false
                }
            }
        case EDIT_TODO_FAILURE:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos,
                    error: action.payload,
                    loading: false
                }
            }
        // DELETE
        case DELETE_TODO:
            return {
                ...state,
            }
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos.filter((elem) => {
                        return elem.id !== action.id
                    }),
                    error: null,
                    loading: false
                }
            }
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos,
                    error: action.payload,
                    loading: false
                }
            }

        // TOGGLE
        case TOGGLE_TODO:
            return {
                ...state,
            }
        case TOGGLE_TODO_SUCCESS:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos.map((elem) => {
                        return elem.id == action.payload.id ? action.payload : elem
                    }),
                    error: null,
                    loading: false
                }
            }
        case TOGGLE_TODO_FAILURE:
            return {
                ...state,
                todoList: {
                    todos: state.todoList.todos,
                    error: action.payload,
                    loading: false
                }
            }
        default:
            return state
    }
}

export default todoReducer