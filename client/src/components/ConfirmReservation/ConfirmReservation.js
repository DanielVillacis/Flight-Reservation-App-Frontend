import React, {Component} from 'react';
import {Header, Div, Message, B} from './ConfirmReservationStyle';

class ConfirmReservation extends Component {

    render() {
        return (
            <Header>
                <Div>
                    <Message>Your reservation is completed! Your confirmation number is <B>{this.props.match.params.reservationId}</B></Message>
                </Div>
            </Header>
        );
    }
}

export default ConfirmReservation;