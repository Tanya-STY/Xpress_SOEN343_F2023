import "./Quote.css";
// import { Currency } from "../Currency";
import React, {useState, useEffect} from 'react';
import Navbar from "../Navbar_SignedIn/Navbar_SignedIn"
import quotationPic from "../images/quotationPic.png"
import { Link } from 'react-router-dom';

function Quote() {

    const [distance, setDistance] = useState(0); //state to hold distance value
    const [pickupAddress, setPickupAddress] = useState('');
    const [dropoffAddress, setDropoffAddress] = useState('');
    

    useEffect(() => {
        const storedDistance = localStorage.getItem('distance');
        if (storedDistance) {
            setDistance(parseFloat(storedDistance));
        }

        const routeDataString = localStorage.getItem('routeData');
        if (routeDataString) {
            const routeData = JSON.parse(routeDataString);
            setPickupAddress(routeData.pickupAddress);
            setDropoffAddress(routeData.dropoffAddress);
        }

    }, []);

    const calculatePrice = () => {
        const pricePerKm = 2;
        const totalPrice = pricePerKm * distance;
        return totalPrice.toFixed(2);
    };

    const calculateTax = () => {
        const tax = 0.15;
        const taxApplied = tax * calculatePrice();
        return taxApplied.toFixed(2);
    };

    const totaldue = () => {
        const total = parseFloat(calculatePrice()) + parseFloat(calculateTax());
        return total.toFixed(2);
    };

    const handleDistanceChange = (newDistance) => {
        setDistance(newDistance);
        localStorage.setItem('distance', newDistance);
    };

    return (
        <main class="main">
            
            <div class="content">
            
                <div class="componentBox">
                <div class="item">
                    <div className="item-description">
                        <div className="div">Xpress delivery</div>
                        <div className="pick-up-address-drop">
                            [Pick-up address: {pickupAddress}]
                            <br />
                            [Drop-off address: {dropoffAddress}]
                        </div>
                    </div>
                    <div className="quantity">
                        <div className="text-wrapper-2">[distance: {distance} km]</div>
                    </div>
                    <div className="unit-price">
                    {/* <Currency /> */}
                        <div className="text-wrapper-3">$ 2.00/km</div>
                    </div>
                    <div className="amount">
                    {/* <Currency /> */}
                        <div className="text-wrapper-4">$ {calculatePrice()}</div>
                    </div>
                </div>

                <div class="item2">
                <div className="div">
                    <div className="text-wrapper-2">$ {calculatePrice()}</div>
                    {/* <Currency className="currency-instance" /> */}
                    <div className="text-wrapper-3">Subtotal</div>
                </div>
                <div className="div">
                    <div className="text-wrapper-2">$ {calculateTax()}</div>
                    {/* <Currency className="currency-instance" /> */}
                    <div className="invoice-quote-date">Tax: Vat(15%)</div>
                </div>
                <div className="total-due">
                    <div className="overlap-group">
                    {/* <Currency className="design-component-instance-node" divClassName="currency-2" /> */}
                    <div className="text-wrapper-4">$ {totaldue()}</div>
                    <div className="invoice-quote-date-2">Total Due</div>
                    </div>
                </div>

                <div className="button">
                    <Link to='/userDetails'>
                    <div className="text">Order</div>
                    </Link>
                </div>


                </div>

                <div className="terms-conditions">
                    <p className="text-wrapper">Terms &amp; Conditions / Notes</p>
                    <p className="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>


                </div>

                <div class="imageBox">
                    <img className="element-converted" alt="Element converted" src={quotationPic} />
                </div>
            </div>
            
        </main>
        
    );
} export default Quote; 