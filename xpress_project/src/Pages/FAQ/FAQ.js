import React from 'react';
import './FAQ.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FAQ = () => {

    const [isTextVisible, setIsTextVisible] = useState(false);

    const toggleTextVisibility = () => {
        setIsTextVisible((prev) => !prev);
    };

    const [isTextVisible2, setIsTextVisible2] = useState(false);

    const toggleTextVisibility2 = () => {
        setIsTextVisible2((prev) => !prev);
    };

    const [isTextVisible3, setIsTextVisible3] = useState(false);

    const toggleTextVisibility3 = () => {
        setIsTextVisible3((prev) => !prev);
    };

    const [isTextVisible4, setIsTextVisible4] = useState(false);

    const toggleTextVisibility4 = () => {
        setIsTextVisible4((prev) => !prev);
    };

    const [isTextVisible5, setIsTextVisible5] = useState(false);

    const toggleTextVisibility5 = () => {
        setIsTextVisible5((prev) => !prev);
    };

    const [isTextVisible6, setIsTextVisible6] = useState(false);

    const toggleTextVisibility6 = () => {
        setIsTextVisible6((prev) => !prev);
    };

    const [isTextVisible7, setIsTextVisible7] = useState(false);

    const toggleTextVisibility7 = () => {
        setIsTextVisible7((prev) => !prev);
    };

    const [isTextVisible8, setIsTextVisible8] = useState(false);

    const toggleTextVisibility8 = () => {
        setIsTextVisible8((prev) => !prev);
    };

    const [isTextVisible9, setIsTextVisible9] = useState(false);

    const toggleTextVisibility9 = () => {
        setIsTextVisible9((prev) => !prev);
    };


    return (<>

        <h1 className='FAQtitle'>Frequently Asked Question</h1>

        <div>
            <p className='title'>PAYMENT</p>
            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility}>
                Q: What payment methods do you accept?
                {isTextVisible ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible && <p className='answer'>A: We accept major credit cards, debit cards, and other secure payment methods such as PayPal. During the checkout process, you can choose your preferred payment option.</p>}

            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility2}>
                Q: Is my payment information secure when making a purchase?
                {isTextVisible2 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible2 && <p className='answer'>A: Yes, your payment information is encrypted and secured. We use industry-standard security protocols to protect your sensitive data. Rest assured that your financial details are handled with the utmost confidentiality.</p>}

            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility3}>
                Q: Can I get a refund if I'm not satisfied with my order?
                {isTextVisible3 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible3 && <p className='answer'>A: Yes, we offer a satisfaction guarantee. If you're not satisfied with your purchase, please contact our customer support within [X] days of receiving your order. We will guide you through the refund process and address any concerns you may have.</p>}

            <p className='title'>SERVICE</p>
            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility4}>
                Q: What are the shipping options available?
                {isTextVisible4 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible4 && <p className='answer'>A: We offer standard and express shipping options. Standard shipping typically takes [X] days, while express shipping provides a faster delivery option for an additional fee. Shipping costs and delivery times vary based on your location.</p>}

            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility5}>
                Q: Can I change the shipping address after placing the order?
                {isTextVisible5 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible5 && <p className='answer'>A: Unfortunately, we cannot change the shipping address once the order is confirmed to maintain security and prevent fraud. Ensure the accuracy of your shipping details during the checkout process.</p>}

            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility6}>
                Q: What should I do if my order hasn't arrived on time?
                {isTextVisible6 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible6 && <p className='answer'>A: If your order is delayed beyond the estimated delivery date, please check the tracking information first. If you need further assistance, contact our customer support with your order number, and we'll investigate the issue promptly.</p>}
            <p className='title'>ORDER</p>
            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility7}>
                Q: How can I place an order?
                {isTextVisible7 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible7 && <p className='answer'>A: You can place an order through our website or mobile app. Simply browse our products, add items to your cart, and proceed to checkout. Follow the steps to provide necessary details and confirm your order.</p>}

            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility8}>
                Q: Can I modify or cancel my order after it's placed?
                {isTextVisible8 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible8 && <p className='answer'>A: Once an order is confirmed, modifications are not allowed. However, you can contact our customer support immediately for assistance. Cancellation is possible within a short time window after placing the order, so please reach out promptly.</p>}

            <p style={{ cursor: 'pointer' }} onClick={toggleTextVisibility9}>
                Q: Is it possible to track the status of my order?
                {isTextVisible9 ? ' \u25BC' : ' \u25B6'}
            </p>
            {isTextVisible9 && <p className='answer'>A: Yes, you can track your order in real-time. After your order is dispatched, you will receive a tracking number via email or SMS. Use this number on our website or app to monitor the current status and estimated delivery time.</p>}


        </div>


        <div className='questions'>
            <p className='q'>Question still unanswered?</p>
            <Link to="/Contact">Click here to ask your own question!</Link>
        </div>




    </>


    );
};


export default FAQ; 