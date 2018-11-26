import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

export class RentalDetail extends React.Component {
     componentWillMount() {
        
         const rentalId = this.props.match.params.id;
         this.props.dispatch(actions.fetchRentalById(rentalId));
     }
    render() {
        const rental = this.props.rental;
        return (
            <div>
            <div>i am rentail detail component {rental.title}</div>
            
            <div>i am rentail detail component</div>
            </div>
            
            )
    }
}

function mapStateToprop (state) {
    return {
        rental: state.rentals.data
    }
}

export default connect(mapStateToprop) (RentalDetail)