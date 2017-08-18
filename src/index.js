import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { AppRegistry } from 'react-native'
import todoReducer from './reducer/reducer'
import Router from './router'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger();

export default class todoWithJsonServer extends Component {
    render() {

        let store = createStore(
            todoReducer,
            applyMiddleware(logger),
            applyMiddleware(thunk)
        );

        return (
            <Provider store={store}>
                <Router reducer={todoReducer} />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('todoWithJsonServer', () => todoWithJsonServer);
