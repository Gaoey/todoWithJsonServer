import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
     data: todoReducer
})


export default rootReducer