import React from "react";
import { Currency } from "../Currency";
import "./Quotation.css";

export const Component = () => {
  return (
    <div className="component">
      <div className="item">
        <div className="content">
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
            <Currency />
            <div className="text-wrapper-3">2.00/km</div>
          </div>
          <div className="amount">
            <Currency />
            <div className="text-wrapper-4">9,999,999.00</div>
          </div>
        </div>
        <div className="devider" />
      </div>
      <div className="item">
        <div className="devider" />
      </div>

      <div className="component2">
      <div className="div">
        <div className="text-wrapper-5">$ 99,999,999.00</div>
        {/* <Currency className="currency-instance" /> */}
        <div className="text-wrapper-6">Subtotal</div>
      </div>

      <div className="div">
        <div className="text-wrapper-5">$ 99,999,999.00</div>
        {/* <Currency className="currency-instance" /> */}
        <div className="invoice-quote-date">Tax: Vat(15%)</div>
      </div>
      <div className="total-due">
        {/* <div className="overlap-group"> */}
          {/* <Currency className="design-component-instance-node" divClassName="currency-2" /> */}
          <div className="text-wrapper-7">$ 999,999,999.00</div>
          <div className="invoice-quote-date-2">Total Due</div>
        {/* </div> */}
      </div>
      </div>

    </div>
  );
};
