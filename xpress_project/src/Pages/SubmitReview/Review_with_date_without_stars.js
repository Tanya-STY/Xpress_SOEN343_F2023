import React, { useState } from 'react';
import './CustomerReviewForm.css';

const CustomerReviewForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviewDate, setReviewDate] = useState('');
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;

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

        if (customerName && reviewText && reviewDate) {
            const newReview = { customerName, reviewText, reviewDate };

            // If editing, update the review in place
            if (editingIndex !== null) {
                const updatedReviews = [...reviews];
                const indexToEdit = indexOfFirstReview + editingIndex;
                updatedReviews[indexToEdit] = newReview;
                setReviews(updatedReviews);
                setEditingIndex(null);
            } else {
                // Otherwise, add a new review
                setReviews([...reviews, newReview]);
            }

            setCustomerName('');
            setReviewText('');
            setReviewDate('');
        }
    };

    const handleEdit = (index) => {
        const reviewToEdit = reviews[indexOfFirstReview + index];
        setCustomerName(reviewToEdit.customerName);
        setReviewText(reviewToEdit.reviewText);
        setReviewDate(reviewToEdit.reviewDate);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const indexToDelete = indexOfFirstReview + index;
        setReviews(reviews.filter((_, i) => i !== indexToDelete));
    };

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={i === currentPage ? 'active' : ''}>
                    <button onClick={() => handlePageChange(i)}>{i}</button>
                </li>
            );
        }
        return pageNumbers;
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Clear editing index when changing pages
        setEditingIndex(null);
    };

    const [editingIndex, setEditingIndex] = useState(null);

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
                {currentReviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    <ul>
                        {currentReviews.map((review, index) => (
                            <li key={index}>
                                <strong>{review.customerName}</strong> <br/><br/>
                                {review.reviewDate} <br/><br/> {review.reviewText}{' '} <br/><br/>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}

                {totalPages > 1 && (
                    <ul className="pagination">
                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                        </li>
                        {renderPageNumbers()}
                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomerReviewForm;