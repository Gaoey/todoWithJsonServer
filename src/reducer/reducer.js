import {
    FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE
} from '../constants/actionConstant.js'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    todos: todoReducer,
})

export default todoReducer = (state = [], action) => {
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
                    todos: nullÏßß,
                    error: action.payload,
                    loading: false
                }
            }
    }
}

export default rootReducer