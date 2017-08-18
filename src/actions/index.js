import {
    FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE
} from '../constants/actionConstant.js'
import { JSON_SERVER_URL } from '../constants/URLConstant'


export function fetchTodo() {
    const request = fetch(JSON_SERVER_URL)
        .then((response) => response.json())
        .then((success) => {
            return fetchToDoSuccess(success)
        })
        .catch((error) => {
            return fetchTodoFailure(error)
        });

    return {
        type: FETCH_TODO,
        payload: request
    }
}

export function fetchTodoSuccess(blob) {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: blob
    }
}

export function fetchTodoFailure(error) {
    return {
        type: FETCH_TODO_FAILURE,
        payload: error
    }
}