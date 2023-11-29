//
//// DeliveryRequestStatus.js
//import React, { useState, useEffect } from 'react';
//import { useParams, Link } from 'react-router-dom';
//import StatusBar from '../StatusBar/StatusBar.js';
//import './DeliveryRequestStatus.css';
//
//const DeliveryRequestStatus = () => {
//  const { requestNumber } = useParams();
//  const [status, setStatus] = useState('Started');
//
//  useEffect(() => {
//    const storedStatus = localStorage.getItem(`status_${requestNumber}`);
//    if (storedStatus) {
//      setStatus(storedStatus);
//    }
//  }, [requestNumber]);
//
//  return (
//    <div className="delivery-request-status-container">
//      <h1 className="page-title">Delivery Request Status</h1>
//      <div className="status-bar-wrapper">
//        <StatusBar currentStatus={status} showNextButton={false} />
//      </div>
//      <Link to="/">Back to Homepage</Link>
//    </div>
//  );
//};
//
//export default DeliveryRequestStatus;

// DeliveryRequestStatus.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import StatusBar from '../StatusBar/StatusBar.js';
import './DeliveryRequestStatus.css';

const DeliveryRequestStatus = () => {
  const { requestNumber } = useParams();
  const [status, setStatus] = useState('Started');
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');

  useEffect(() => {
    const storedStatus = localStorage.getItem(`status_${requestNumber}`);
    if (storedStatus) {
      setStatus(storedStatus);
    }

    // Get the delivery date from localStorage or use a default date
    const deliveryDate = localStorage.getItem(`date_${requestNumber}`) || '2023-01-01';

    // Calculate the estimated delivery date (7 days after the delivery date)
    const deliveryDateObject = new Date(deliveryDate);
    const estimatedDateObject = new Date(deliveryDateObject);
    estimatedDateObject.setDate(deliveryDateObject.getDate() + 7);

    // Format the estimated delivery date as a string
    const formattedEstimatedDate = estimatedDateObject.toISOString().split('T')[0];

    setEstimatedDeliveryDate(formattedEstimatedDate);
  }, [requestNumber]);

  return (
    <div className="delivery-request-status-container">
      <h1 className="page-title">Delivery Request Status</h1>
      <div className="status-bar-wrapper">
        <StatusBar currentStatus={status} showNextButton={false} />
      </div>
      <p>Estimated Delivery Date: {estimatedDeliveryDate}</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default DeliveryRequestStatus;
