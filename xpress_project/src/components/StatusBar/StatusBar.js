//
//// StatusBar.js
//import React, { useState } from 'react';
//import './StatusBar.css';
//
//const StatusBar = ({ onRequestStatusChange }) => {
//  const steps = ['Started', 'Processed', 'Picked Up', 'In Transit', 'Delivered'];
//  const [currentStep, setCurrentStep] = useState(1);
//
//  const handleNext = () => {
//    if (currentStep < steps.length) {
//      setCurrentStep((prevStep) => prevStep + 1);
//      onRequestStatusChange(steps[currentStep]);
//    }
//  };
//
//  return (
//      <div className="step-progress-bar">
//        <div className="steps">
//          {steps.map((step, index) => (
//            <div
//              key={index}
//              className={`step ${currentStep > index ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
//            >
//              {index + 1}
//            </div>
//          ))}
//        </div>
//        <div className="step-labels">
//          {steps.map((step, index) => (
//            <div key={index} className={`step-label ${currentStep > index ? 'completed' : ''}`}>
//              {step}
//            </div>
//          ))}
//        </div>
//        <div className="connector-line">
//          {Array.from({ length: steps.length - 1 }, (_, index) => (
//            <div
//              key={index}
//              className={`connector ${currentStep > index ? 'completed' : ''} ${
//                currentStep === index + 1 ? 'active' : ''
//              }`}
//            ></div>
//          ))}
//        </div>
//        <button className="next-button" onClick={handleNext}>
//          Next
//        </button>
//      </div>
//    );
//  };
//
//export default StatusBar;
//
////check handle events

//import React, { useState } from 'react';
//import './StatusBar.css';
//
//const StatusBar = ({ onRequestStatusChange }) => {
//  const steps = ['Started', 'Processed', 'Picked Up', 'In Transit', 'Delivered'];
//  const [currentStep, setCurrentStep] = useState(1);
//
//  const handleNext = () => {
//    if (currentStep < steps.length) {
//      onRequestStatusChange(steps[currentStep]);
//      setCurrentStep((prevStep) => prevStep + 1);
//    }
//  };
//
//  return (
//    <div className="step-progress-bar">
//      <div className="steps">
//        {steps.map((step, index) => (
//          <div
//            key={index}
//            className={`step ${currentStep > index ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
//          >
//            {index + 1}
//          </div>
//        ))}
//      </div>
//      <div className="step-labels">
//        {steps.map((step, index) => (
//          <div key={index} className={`step-label ${currentStep > index ? 'completed' : ''}`}>
//            {step}
//          </div>
//        ))}
//      </div>
//      <div className="connector-line">
//        {Array.from({ length: steps.length - 1 }, (_, index) => (
//          <div
//            key={index}
//            className={`connector ${currentStep > index ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
//          ></div>
//        ))}
//      </div>
//      <button className="next-button" onClick={handleNext}>
//        Next
//      </button>
//    </div>
//  );
//};
//
//export default StatusBar;

// StatusBar.js
import React, { useState, useEffect } from 'react';
import './StatusBar.css';

const StatusBar = ({ onRequestStatusChange, currentStatus, showNextButton = true }) => {
  const steps = ['Started', 'Processed', 'Picked Up', 'In Transit', 'Delivered'];
  const [currentStep, setCurrentStep] = useState(steps.indexOf(currentStatus) + 1);

  useEffect(() => {
    setCurrentStep(steps.indexOf(currentStatus) + 1);
  }, [currentStatus]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      onRequestStatusChange(steps[currentStep]);
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="step-progress-bar">
      <div className="steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep > index ? 'completed' : ''} ${
              currentStep === index + 1 ? 'active' : ''
            } ${currentStatus === step ? 'current-status' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="step-labels">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-label ${currentStep > index ? 'completed' : ''} ${
              currentStatus === step ? 'current-status' : ''
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="connector-line">
        {Array.from({ length: steps.length - 1 }, (_, index) => (
          <div
            key={index}
            className={`connector ${currentStep > index ? 'completed' : ''} ${
              currentStep === index + 1 ? 'active' : ''
            }`}
          ></div>
        ))}
      </div>
      {showNextButton && (
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default StatusBar;
