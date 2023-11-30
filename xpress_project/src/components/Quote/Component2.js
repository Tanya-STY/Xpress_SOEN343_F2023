import React from "react";
import { Currency } from "../Currency";
import "./Quotation.css";

export const Component2 = () => {
  return (
    <div className="component2">
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
          <Currency className="design-component-instance-node" divClassName="currency-2" />
          <div className="text-wrapper-4">$ 999,999,999.00</div>
          <div className="invoice-quote-date-2">Total Due</div>
        </div>
      </div>
    </div>
  );
};
