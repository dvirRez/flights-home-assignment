import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import FlightsList from "./Components/FlightsList/FlightsList";
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/flights" component={FlightsList}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
