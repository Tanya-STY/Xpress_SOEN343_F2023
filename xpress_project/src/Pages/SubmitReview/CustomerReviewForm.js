// CustomerReviewForm.js

import React, { useState } from 'react';
import './CustomerReviewForm.css';

const CustomerReviewForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviewDate, setReviewDate] = useState('');
    const [reviews, setReviews] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleNameChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handleReviewChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleDateChange = (e) => {
        setReviewDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingIndex !== null) {
            // If editing an existing review
            const updatedReviews = [...reviews];
            updatedReviews[editingIndex] = { customerName, reviewDate, reviewText };
            setReviews(updatedReviews);
            setEditingIndex(null);
        } else {
            // If adding a new review
            setReviews([...reviews, { customerName, reviewDate, reviewText }]);
        }

        // Clear the form after submission
        setCustomerName('');
        setReviewDate('');
        setReviewText('');
    };

    const handleEdit = (index) => {
        const reviewToEdit = reviews[index];
        setCustomerName(reviewToEdit.customerName);
        setReviewDate(reviewToEdit.reviewDate);
        setReviewText(reviewToEdit.reviewText);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedReviews = [...reviews];
        updatedReviews.splice(index, 1);
        setReviews(updatedReviews);
    };

    return (
        <div className="customer-review-form">
            <div className="review-form-container">
                <h2>Leave Us a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="customerName">Name:</label>
                        <input
                            type="text"
                            id="customerName"
                            value={customerName}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewDate">Date:</label>
                        <input
                            type="date"
                            id="reviewDate"
                            value={reviewDate}
                            onChange={handleDateChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewText">Review:</label>
                        <textarea
                            id="reviewText"
                            value={reviewText}
                            onChange={handleReviewChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">
                        {editingIndex !== null ? 'Update Review' : 'Submit Review'}
                    </button>
                </form>
            </div>

            <div className="review-list-container">
                <h2>Customer Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>
                                <strong>{review.customerName}</strong> <br/><br/>
                                {review.reviewDate} <br/><br/> {review.reviewText}{' '} <br/><br/>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomerReviewForm;
