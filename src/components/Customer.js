import React from 'react';

class Customer extends React.Component {

    render() {
        return <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birth}</p>
            <p>{this.props.sex}</p>
            <p>{this.props.job}</p>
        </div>
    }
}

export default Customer;