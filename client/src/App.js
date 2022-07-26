import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import FindFlights from './components/FindFlights/FindFlights';
import DisplayFlights from './components/DisplayFlights/DisplayFlights';
import PassengerDetails from './components/PassengerDetails/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation/ConfirmReservation';

class App extends Component {

  render() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/findFlights" component={FindFlights}/>
        <Route exact path="/displayFlights/:from/:to/:departureDate" component={DisplayFlights}/>
        <Route exact path="/passengerDetails/:flightId" component={PassengerDetails}/>
        <Route exact path="/confirmReservation/:reservationId" component={ConfirmReservation}/>
      </Switch>
    </div>
  );
  }
}

export default App;
