//
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
//  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');
//
//  useEffect(() => {
//    const storedStatus = localStorage.getItem(`status_${requestNumber}`);
//    if (storedStatus) {
//      setStatus(storedStatus);
//    }
//
//    const deliveryDate = localStorage.getItem(`date_${requestNumber}`) || '2023-01-01';
//
//    const deliveryDateObject = new Date(deliveryDate);
//    const estimatedDateObject = new Date(deliveryDateObject);
//    estimatedDateObject.setDate(deliveryDateObject.getDate() + 7);
//
//    const formattedEstimatedDate = estimatedDateObject.toISOString().split('T')[0];
//
//    setEstimatedDeliveryDate(formattedEstimatedDate);
//  }, [requestNumber]);
//
//  const renderReviewButton = () => {
//    if (status === 'Delivered') {
//      return (
//        <Link to={`/review/${requestNumber}`} className="review-button">
//          Review
//        </Link>
//      );
//    }
//    return null;
//  };
//
//  return (
//    <div className="delivery-request-status-container">
//      <h1 className="page-title">Delivery Request Status</h1>
//      <div className="status-bar-wrapper">
//        <StatusBar currentStatus={status} showNextButton={false} />
//      </div>
//      <p>Estimated Delivery Date: {estimatedDeliveryDate}</p>
//      {renderReviewButton()}
//      <Link to="/">Back to Homepage</Link>
//    </div>
//  );
//};
//
//export default DeliveryRequestStatus;

// DeliveryRequestStatus.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import StatusBar from '../StatusBar/StatusBar.js';
import './DeliveryRequestStatus.css';

const DeliveryRequestStatus = () => {
  const { requestNumber } = useParams();
  const { search } = useLocation();
  const creationDate = new URLSearchParams(search).get('creationDate') || '2023-01-01';
  const [status, setStatus] = useState('Started');
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');

  useEffect(() => {
    const storedStatus = localStorage.getItem(`status_${requestNumber}`);
    if (storedStatus) {
      setStatus(storedStatus);
    }

    // Calculate the estimated delivery date (7 days after the initial order date)
    const deliveryDateObject = new Date(creationDate);
    const estimatedDateObject = new Date(deliveryDateObject);
    estimatedDateObject.setDate(deliveryDateObject.getDate() + 7);

    const formattedEstimatedDate = estimatedDateObject.toISOString().split('T')[0];

    setEstimatedDeliveryDate(formattedEstimatedDate);
  }, [requestNumber, creationDate]);

  const renderReviewButton = () => {
    if (status === 'Delivered') {
      return (
        <Link to={`/Reviews`} className="review-button">
          Review
        </Link>
      );
    }
    return null;
  };

  return (
    <div className="delivery-request-status-container">
      <h1 className="page-title">Delivery Request Status</h1>
      <div className="status-bar-wrapper">
        <StatusBar currentStatus={status} showNextButton={false} />
        {renderReviewButton()}
      </div>
      <p>Estimated Delivery Date: {estimatedDeliveryDate}</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default DeliveryRequestStatus;
