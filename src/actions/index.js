import {
    FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE
} from '../constants/actionConstant.js'
import { JSON_SERVER_URL } from '../constants/URLConstant'
import { Actions } from 'react-native-router-flux'

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

export const addTodo = (text) => (dispatch) => {
    const request = fetch(JSON_SERVER_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text,
            completed: false,
        })
    }).then((response) => response.json())
        .then((success) => {
            return dispatch(addTodoSuccess(success))
        })
        .catch((error) => {
            return dispatch(addTodoFailure(error))
        });

    return {
        type: ADD_TODO,
        payload: request
    }
}

// edit
export const editTodoSuccess = (blob) => {
    Actions.pop()
    return {
        type: EDIT_TODO_SUCCESS,
        payload: blob
    }
}

export const editTodoFailure = (error) => {
    return {
        type: EDIT_TODO_FAILURE,
        payload: error
    }
}

export const editTodo = (id, text) => (dispatch) => {
    const request = fetch(`${JSON_SERVER_URL}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text,
        })
    }).then((response) => response.json())
        .then((success) => {
            return dispatch(editTodoSuccess(success))
        })
        .catch((error) => {
            return dispatch(editTodoFailure(error))
        });

    return {
        type: EDIT_TODO,
        payload: request
    }

}

