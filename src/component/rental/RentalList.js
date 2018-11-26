import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux';
import * as actions from '../../actions'
export class RentalList extends React.Component {
   

    renderRentalList() {
        return this.props.rentals.map((rentals, index) => {

            return (
                <RentalCard key={index} rental={rentals} />
            )
        });
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }
    render() {
        return (
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                    {this.renderRentalList()}
                </div>
            </section>
        )
    }
}

function mapStateToprop (state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToprop) (RentalList)