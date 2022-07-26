import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';  // to be used to make http requests to the backend
import {MainPageContainer,SectionContainer,  H2Title, TableDiv, TableContainer, TableHead, TableHeadTitle,TableContentDiv, TableBody, Td, SelectLink} from './DisplayFlightsStyles'; // to be created

class DisplayFlights extends Component {

    state = {
        flightData:[]
    }

    componentWillMount() {
        axios.get('http://localhost:8080/flightservices/flights?from='+this.props.match.params.from+
        '&to='+this.props.match.params.to+
        '&departureDate='+this.props.match.params.departureDate).then(res => {
            const flightData = res.data;
            this.setState({flightData})
            console.log(flightData)   // display the data from the backend in the console
        })
    }

    render() {
        return (
            <MainPageContainer>
                <SectionContainer>
                    <H2Title>Available Flights</H2Title>
                    <TableDiv>
                        <TableContainer>
                            <TableHead>
                                <TableHeadTitle>Airlines</TableHeadTitle>
                                <TableHeadTitle>Departure City</TableHeadTitle>
                                <TableHeadTitle>Arrival City</TableHeadTitle>
                                <TableHeadTitle>Departure Date and Time</TableHeadTitle>
                                <TableHeadTitle>Select Flight</TableHeadTitle>
                            </TableHead>
                        </TableContainer>
                    </TableDiv>
                    <TableContentDiv>
                        <TableContainer>
                            <TableBody>
                                {this.state.flightData.map(flight=><RowCreator item={flight}/>)}
                            </TableBody>
                        </TableContainer>
                    </TableContentDiv>
                </SectionContainer>
            </MainPageContainer>
        );
    }
}

class RowCreator extends Component {
    render() {
        var flight= this.props.item;
        return <tr>
            <Td>{flight.operatingAirlines}</Td>
            <Td>{flight.departureCity}</Td>
            <Td>{flight.arrivalCity}</Td>
            <Td>{flight.estimatedDepartureTime}</Td>
            <Td><SelectLink to={'/passengerDetails/'+flight.id}>Select</SelectLink></Td>
        </tr>
    }
}

export default DisplayFlights;