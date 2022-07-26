import React, {Component} from 'react';
import axios from 'axios';
import {BodyContainer, 
    DetailsBox, 
    FlightDetails, 
    ReservationTitle, 
    FlightDetailsTitle, 
    Info, 
    PassengerDetailsBox, 
    PassengerDetailsTitle, 
    FormContainer, 
    Input, 
    PaymentDetailTitle, 
    ConfirmButton,
    } from './PassengerDetailsStyles';

class PassengerDetails extends Component {
    state = {}

    componentWillMount() {
        axios.get('http://localhost:8080/flightservices/flights/'+this.props.match.params.flightId)
        .then(res=>{
            this.setState(res.data);
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            flightId: this.props.match.params.flightId,
            passengerFirstName: this.passengerFirstName,
            passengerLastName: this.passengerLastName,
            passengerMiddleName: this.passengerMiddleName,
            passengerEmail: this.passengerEmail,
            passengerPhone: this.passengerPhone
        }

        axios.post('http://localhost:8080/flightservices/reservations',data)
        .then(res=>{
            this.props.history.push('/confirmReservation/'+res.data.id);
        })
    }

    render() { 
        return (
            <BodyContainer>
                <DetailsBox>
                    <FlightDetails>
                        <ReservationTitle>Confirm your Reservation</ReservationTitle>
                        <FlightDetailsTitle>Flight Details:</FlightDetailsTitle>
                        <Info>
                            <b>Airline: </b>{this.state.operatingAirlines} <br/><br/>
                            <b>Departure City: </b>{this.state.departureCity} <br/><br/>
                            <b>Arrival City: </b>{this.state.arrivalCity} <br/><br/>
                            <b>Departure Date: </b>{this.state.dateOfDeparture}<br/>
                        </Info>
                    </FlightDetails>
                    <PassengerDetailsBox>
                        <PassengerDetailsTitle>Passenger Details:</PassengerDetailsTitle>
                        <FormContainer className='formContainer'>
                            <Input type="text" placeholder='First Name' name="passengerFirstName" onChange={(event)=>{this.passengerFirstName = event.target.value}}/><br/>
                            <Input type="text" placeholder='Last Name' name="passengerLastName" onChange={(event)=>{this.passengerLastName = event.target.value}}/><br/>
                            <Input type="text" placeholder='Middle Name' name="passengerMiddleName" onChange={(event)=>{this.passengerMiddleName = event.target.value}}/><br/>
                            <Input type="text" placeholder='Email' name="passengerEmail" onChange={(event)=>{this.passengerEmail = event.target.value}}/><br/>
                            <Input type="text" placeholder='Phone Number' name="passengerPhone" onChange={(event)=>{this.passengerPhone = event.target.value}}/><br/>
                            <PaymentDetailTitle>Payment Detail:</PaymentDetailTitle>
                            <Input type="text" placeholder='Card Number' name="cardNumber" onChange={(event)=>{this.cardNumber = event.target.value}}/><br/>
                            <Input type="text" placeholder='Expiration Date' name="expirationDate" onChange={(event)=>{this.expirationDate = event.target.value}}/><br/>
                            <Input type="text" placeholder='CVV' name="securityCode" onChange={(event)=>{this.securityCode = event.target.value}}/><br/><br/>
                            <ConfirmButton onClick={this.handleSubmit.bind(this)}>Confirm Reservation</ConfirmButton>
                        </FormContainer>
                    </PassengerDetailsBox>
                </DetailsBox>
            </BodyContainer>
        );
    }
}

export default PassengerDetails;