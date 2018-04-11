import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    static propTypes = {
        doLogin: PropTypes.func.isRequired,
    };

    handleChangedInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    sendLoginInfo = () => {
        this.props.doLogin(this.state);
    };

    render() {
        console.log(this.props.history.push);
        return(
            <div className="login-div">
                <h2>Login</h2>
                <div>
                    <label>User Name: </label>
                    <input name="userName" type="text" onChange={this.handleChangedInput}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="password" onChange={this.handleChangedInput} />
                </div>
                <button onClick={this.sendLoginInfo} className="login-btn" name="button">{'Login'}</button>
            </div>
        );
    }
}

export default withRouter(Login);