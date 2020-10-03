import React from 'react';

class Customer extends React.Component {

    render() {
        return <div>
            <CustomerProfile img={this.props.image} name={this.props.name} id={this.props.id}/>
            <CustomerInfo birth={this.props.birth} sex={this.props.sex} job={this.props.job}/>
        </div>
    }
}

class CustomerProfile extends React.Component {
    render() {
        return <div>
            <img src={this.props.image} alt="profile" />
            <h2>{this.props.name}({this.props.id})</h2>
        </div>
    }
}

class CustomerInfo extends React.Component {
    render() {
        return <div>
            <p>{this.props.birth}</p>
            <p>{this.props.sex}</p>
            <p>{this.props.job}</p>
        </div>
    }
}

export default Customer;