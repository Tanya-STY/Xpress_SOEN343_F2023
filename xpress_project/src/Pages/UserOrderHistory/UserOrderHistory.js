

import React, { Component } from 'react';
import './UserOrderHistory.css';
import Navbar from '../Navbar_SignedIn.css';

class UserOrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }









    render() {
        return (

            <div className="page-content">
                <Navbar/>
                <div className="user-order-history">
                    <h1>Delivery Requests Overview</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="Pick-UpAddresss">Pick-Up Address</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="divider">





                        </div>
                    </form>
                </div>
            </div>
        );
    }
}





export default UserOrderHistory;