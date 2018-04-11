import React, { Component } from 'react';
import './FlightsList.css';
import getFlights from '../../helpers/api';
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-modal';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export default class FlightsList extends Component {

    state = {
        flights: null,
        originalFlights: null,
        modalIsOpen: false,
    };
    componentDidMount() {
        getFlights()
            .then( flights => {
                this.setState({
                    flights,
                    originalFlights: flights,
                });
            });
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    renderFlights() {
        return (
                this.state.flights.map( flight => (
                    <tr key={flight.id}>
                        <td>{flight.from}</td>
                        <td>{flight.to}</td>
                        <td>{flight.departureTime}</td>
                        <td>{flight.landingTime}</td>
                        <td>{flight.price}</td>
                    </tr>
                ))
        );
    }

    rednerNoFlights() {
        return (
            <tr colSpan={5}>{'No Flights'}</tr>
        );
    }

    renderLoading() {
        return (
            <tr colSpan={5}>{'Loading'}</tr>
        );
    }

    handleKeyPress = (e) => {

        if(e.key == 'Enter'){
            if( e.target.value === '') {
                this.setState({
                    flights: this.state.originalFlights,
                });
            }
            else {
                this.setState({
                    flights: this.state.flights.filter(flight => flight.to === e.target.value),
                    originalFlights: this.state.flights,
                });
            }
        }
    };

    handleDetailsSubmit = (e) => {
        const newFlight = {
            id: this.state.flights.length,
            from: this.refs.from.value,
            to: this.refs.to.value,
            departureTime: this.refs.departure.value,
            landingTime: this.refs.landing.value,
            price: this.refs.price.value,
        };
        this.setState({
            flights: [...this.state.flights, newFlight],
            originalFlights: [...this.state.flights, newFlight],
            modalIsOpen: false,
        });
    };

    render() {
        return (
            <div>
                <h1>Flights</h1>
                <div>
                    <label>{'Filter: '}</label>
                    <input type="text" onKeyPress={this.handleKeyPress}/>
                </div>
                <div>
                    <button onClick={this.openModal} >{'Add Flight'}</button>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                        <form className="form_style">
                            <p>
                                <label>{'from:'}</label>
                                <input type="text" ref="from" name="from" />
                            </p>
                            <p>
                                <label>{'to: '}</label>
                                <input type="text" ref="to" name="to" />
                            </p>
                            <p>
                                <label>{'Departure Time: '}</label>
                                <input type="text" ref="departure" name="departure_time" />
                            </p>
                            <p>
                                <label>{'Landing Time: '}</label>
                                <input type="text" ref="landing" name="landing_time" />
                            </p>
                            <p>
                                <label>{'Price: '}</label>
                                <input min="0" ref="price" type="number" name="price" />
                            </p>
                            <div className="button_div">
                                <Button onClick={this.handleDetailsSubmit} bsStyle="primary" bsSize="small">
                                    {'Save'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>from</th>
                        <th>to</th>
                        <th>Departure Time</th>
                        <th>Landing Time</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {!this.state.flights ? this.renderLoading() : ( this.state.flights.length > 0 ? this.renderFlights() : this.rednerNoFlights() )}
                    </tbody>
                </Table>
            </div>
        );
    }
}