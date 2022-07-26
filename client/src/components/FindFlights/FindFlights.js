import React, {Component} from 'react';
import {FindFlightsContainer, FlightTitle, TextWrapper, Form, Input, FlightBox, H2, InputFields, SearchButton} from './FindFlightsStyles';

class FindFlights extends Component{

    handleSubmit(event) {
        this.props.history.push('displayFlights/'+this.from+'/'+this.to+'/'+this.departureDate); // provide the url to the displayFlights component 
    }

    render() {
        return (
            <FindFlightsContainer>
                <FlightBox>
                    <TextWrapper>
                        <FlightTitle><H2>Find Flights</H2></FlightTitle>
                            <Form>
                                <Input type="text" placeholder='From' name="from" onChange={(event)=>{this.from = event.target.value}}></Input>
                                <Input type="text" placeholder='To' name="to" onChange={(event)=>{this.to = event.target.value}}></Input>
                                <Input type="text" placeholder='Date of Departure' name="departureDate" onChange={(event)=>{this.departureDate = event.target.value}}></Input>
                            </Form>
                            <SearchButton onClick={this.handleSubmit.bind(this)}>Search</SearchButton>
                    </TextWrapper>
                </FlightBox>
            </FindFlightsContainer>
        );
    }
}

export default FindFlights;