//import React from 'react';
//import StatusBar from '../StatusBar/StatusBar.js';
//import './RequestStatus.css';
//
//const RequestStatus = () => {
//  return (
//    <div className="request-status-container">
//      <h1 className="page-title">Delivery Request Status</h1>
//      <div className="status-bar-wrapper">
//        <StatusBar />
//      </div>
//    </div>
//  );
//};
//
//export default RequestStatus;

// RequestStatus.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import StatusBar from '../StatusBar/StatusBar.js';
import './RequestStatus.css';

const RequestStatus = () => {
  const { requestNumber } = useParams();
  const [status, setStatus] = useState('Started');

  useEffect(() => {
    const storedStatus = localStorage.getItem(`status_${requestNumber}`);
    if (storedStatus) {
      setStatus(storedStatus);
    }
  }, [requestNumber]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    localStorage.setItem(`status_${requestNumber}`, newStatus);
  };

  return (
    <div className="request-status-container">
      <h1 className="page-title">Delivery Request Status</h1>
      <div className="status-bar-wrapper">
        <StatusBar onRequestStatusChange={handleStatusChange} />
      </div>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default RequestStatus;


