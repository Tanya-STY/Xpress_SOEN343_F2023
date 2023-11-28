import "./Quotation.css";
// import { Currency } from "../Currency";
import Navbar from "../Navbar_SignedIn/Navbar_SignedIn"
import deliveryPic from "../images/image3.png"
import box from "../images/image8.png";

function Package_det() {
    return (
        <main class="main">
            <Navbar/>
            
            <div class="content">
            
                <div class="componentBox">
                <div class="item">
                    <div className="item-description">
                        <div className="div">Xpress delivery</div>
                        <div className="pick-up-address-drop">
                            [Pick-up address:...]
                            <br />
                            [Drop-off address:... ]
                        </div>
                    </div>
                    <div className="quantity">
                        <div className="text-wrapper-2">[distance:xxx]</div>
                    </div>
                    <div className="unit-price">
                    {/* <Currency /> */}
                        <div className="text-wrapper-3">$ 2.00/km</div>
                    </div>
                    <div className="amount">
                    {/* <Currency /> */}
                        <div className="text-wrapper-4">$ 9,999,999.00</div>
                    </div>
                </div>

                <div class="item2">
                <div className="div">
                    <div className="text-wrapper-2">$ 99,999,999.00</div>
                    {/* <Currency className="currency-instance" /> */}
                    <div className="text-wrapper-3">Subtotal</div>
                </div>
                <div className="div">
                    <div className="text-wrapper-2">$ 99,999,999.00</div>
                    {/* <Currency className="currency-instance" /> */}
                    <div className="invoice-quote-date">Tax: Vat(15%)</div>
                </div>
                <div className="total-due">
                    <div className="overlap-group">
                    {/* <Currency className="design-component-instance-node" divClassName="currency-2" /> */}
                    <div className="text-wrapper-4">$ 999,999,999.00</div>
                    <div className="invoice-quote-date-2">Total Due</div>
                    </div>
                </div>

                <div className="button">
                    <div className="text">Order</div>
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
                    <img className="element-converted" alt="Element converted" src={deliveryPic} />
                </div>
            </div>
            
        </main>
        
    );
} export default Package_det; 