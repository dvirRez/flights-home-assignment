import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FlightsLIst from './Components/FlightsList/FlightsList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
