

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import StatusBar from '../StatusBar/StatusBar.js';
import './RequestStatus.css';

const RequestStatus = () => {
  const { requestNumber } = useParams();
  const [status, setStatus] = useState('Started');
  const [deliveryData, setDeliveryData] = useState([]);

  useEffect(() => {
    const storedStatus = localStorage.getItem(`status_${requestNumber}`);
    if (storedStatus) {
      setStatus(storedStatus);
    }
  }, [requestNumber]);

  const handleStatusChange = (newStatus) => {
    console.log('New status:', newStatus);
    setStatus(newStatus);
    setDeliveryData((prevDeliveryData) =>
    prevDeliveryData.map((delivery) =>
      delivery.number === requestNumber ? { ...delivery, status: newStatus } : delivery
    )
  );
    localStorage.setItem(`status_${requestNumber}`, newStatus);
  };

  console.log('Current status:', status);

  return (
    <div className="request-status-container">
      <h1 className="page-title">Delivery Request Status</h1>
      <div className="status-bar-wrapper">
        <StatusBar onRequestStatusChange={handleStatusChange} />
      </div>
      <Link to="/HomePage">Back to Homepage</Link>
    </div>
  );
};

export default RequestStatus;