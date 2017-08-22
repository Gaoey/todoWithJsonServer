import React, { Component } from 'react';
import {
    Scene,
    Router,
} from 'react-native-router-flux'
import Main from './containers/MainContainer'
import Edit from './components/EditTodo';

class RouterTodo extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" >
                    <Scene key="main" component={Main} title="GAOEY TODO" initial/>
                    <Scene key="edit" component={Edit} title="EDIT TODO" />
                </Scene>
            </Router>
        );
    }
}

export default (RouterTodo);
