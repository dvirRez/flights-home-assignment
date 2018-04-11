import React, { Component } from 'react';
import Login from "..//Login/Login";
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    handleLogin = (loginObject) => {
        console.log(this.props);
        console.log(this.history);
        if( loginObject.userName === 'user' && loginObject.password === 'pass') {
            this.props.history.push({
                pathname: '/flights',
            });
        }
    };

    render() {
        return (
            <Login doLogin={this.handleLogin}/>
        );
    }
}

export default withRouter(Home);
