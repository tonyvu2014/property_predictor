import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';

class Price extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="bg-info">
                    <h1>Estimated Price: <span className="text-white">${this.props.price}</span></h1>
                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        price: state.price
    }
}

export default connect(mapStateToProps)(Price);