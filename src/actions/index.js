import {
    FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE
} from '../constants/actionConstant.js'
import { JSON_SERVER_URL } from '../constants/URLConstant'

// get
export const fetchTodoSuccess = (blob) => {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: blob
    }
}

export const fetchTodoFailure = (error) => {
    return {
        type: FETCH_TODO_FAILURE,
        payload: error
    }
}

export const fetchTodo = () => (dispatch) => {
    const request = fetch(JSON_SERVER_URL)
        .then((response) => response.json())
        .then((success) => {
            return dispatch(fetchTodoSuccess(success))
        })
        .catch((error) => {
            return dispatch(fetchTodoFailure(error))
        });

    return {
        type: FETCH_TODO,
        payload: request
    }

}

// add
export const addTodoSuccess = (blob) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: blob
    }
}

export const addTodoFailure = (error) => {
    return {
        type: ADD_TODO_FAILURE,
        payload: error
    }
}

export const addTodo = (id, text) => (dispatch) => {
    const request = fetch(JSON_SERVER_URL, {
        method: 'post',
        body: JSON.stringify({
            id,
            text,
            completed: false
        })
    }).then((response) => response.json())
        .then((success) => {
            return dispatch(fetchTodoSuccess(success))
        })
        .catch((error) => {
            return dispatch(fetchTodoFailure(error))
        });

    return {
        type: ADD_TODO,
        payload: request
    }

}

