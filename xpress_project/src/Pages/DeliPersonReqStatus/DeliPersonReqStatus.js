import React, { useState } from 'react';
import './DeliPersonReqStatus.css';

const RequestInfo = () => {
  // Replace the following with actual request data
  const requestInfo = {
    requestId: '123456',
    pickUpAddress: '123 Main St, City, State',
    dropOffAddress: '456 Oak St, City, State',
    estimatedDeliveryDate: 'December 1, 2023',
  };

  return (
    <div className="request-info">
      <>
      <p>RequestID#: {requestInfo.requestId}</p>
      <p>PickUp Address: {requestInfo.pickUpAddress}</p>
      <p>DropOff Address: {requestInfo.dropOffAddress}</p>
      <p>Estimated Delivery Date: {requestInfo.estimatedDeliveryDate}</p></>
    </div>
  );
};

const DeliPersonReqStatus = () => {
  const [activeButton, setActiveButton] = useState('started');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="timeline-container">
      <h1>Delivery Request Status</h1>
      <div className="timeline1">
        <div className="bullet"></div>
        <div className="bullet"></div>
        <div className="bullet"></div>
        <div className="bullet"></div>
        <div className="bullet"></div>
      </div>
      <div className="timeline2">
        <div
          className={`bullet2 ${activeButton === 'started' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('started')}
        >
          <button>Delivery Request Started</button>
        </div>
        <div
          className={`bullet2 ${activeButton === 'processed' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('processed')}
        >
          <button>Delivery Request Processed</button>
        </div>
        <div
          className={`bullet2 ${activeButton === 'picked' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('picked')}
        >
          <button>Item Picked-Up</button>
        </div>
        <div
          className={`bullet2 ${activeButton === 'transit' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('transit')}
        >
          <button>Item In-Transit</button>
        </div>
        <div
          className={`bullet2 ${activeButton === 'dropped' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('dropped')}
        >
          <button>Item Dropped-Off</button>
        </div>
      </div>
      <RequestInfo />
    </div>
  );
};

export default DeliPersonReqStatus;
