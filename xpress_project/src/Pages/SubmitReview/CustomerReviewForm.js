// import React, { useState, useEffect } from 'react';
// import './CustomerReviewForm.css';
// import { FaStar } from 'react-icons/fa';

// const CustomerReviewForm = () => {
//     const [customerName, setCustomerName] = useState('');
//     const [reviewText, setReviewText] = useState('');
//     const [rating, setRating] = useState(0); // Default to 0 stars
//     const [reviews, setReviews] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const reviewsPerPage = 5;

//     let storedReview = JSON.parse(localStorage.getItem('reviews')) || [];


//     const handleNameChange = (e) => {
//         setCustomerName(e.target.value);
//     };

//     const handleReviewChange = (e) => {
//         setReviewText(e.target.value);
//     };

//     const handleRatingChange = (newRating) => {
//         setRating(newRating);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (customerName && rating > 0) {
//             const currentDate = new Date().toLocaleDateString();
//             const newReview = { customerName, reviewText, reviewDate: currentDate, rating };

//             // If editing, update the review in place
//             if (editingIndex !== null) {
//                 const updatedReviews = [...reviews];
//                 const indexToEdit = indexOfFirstReview + editingIndex;
//                 updatedReviews[indexToEdit] = newReview;
//                 setReviews(updatedReviews);
//                 setEditingIndex(null);
//             } else {
//                 // Otherwise, add a new review
//                 setReviews([...reviews, newReview]);
//             }

//             setCustomerName('');
//             setReviewText('');
//             setRating(0);
//         }
//     storedReview.push({customerName, reviewText, rating});
//     localStorage.setItem('reviews', JSON.stringify(storedReview));
//     };

//     // const handleEdit = (index) => {
//     //     const indexToEdit = indexOfFirstReview + index;
//     //     const reviewToEdit = reviews[indexToEdit];
//     //     setCustomerName(reviewToEdit.customerName);
//     //     setReviewText(reviewToEdit.reviewText);
//     //     setRating(reviewToEdit.rating);
//     //     setEditingIndex(index);
//     // };

//     // const handleEdit = (index) => {
//     //     const indexToEdit = indexOfFirstReview + index;
    
//     //     // Check if indexToEdit is within the bounds of the reviews array
//     //     if (indexToEdit >= 0 && indexToEdit < reviews.length) {
//     //         const reviewToEdit = reviews[indexToEdit];
//     //         setCustomerName(reviewToEdit.customerName);
//     //         setReviewText(reviewToEdit.reviewText);
//     //         setRating(reviewToEdit.rating);
//     //         setEditingIndex(index);
//     //     }
//     // };

//     const handleEdit = (index) => {
//         const indexToEdit = indexOfFirstReview + index;
    
//         // Check if indexToEdit is within the bounds of the reviews array
//         if (indexToEdit >= 0 && indexToEdit < reviews.length) {
//           const reviewToEdit = reviews[indexToEdit];
//           setCustomerName(reviewToEdit.customerName);
//           setReviewText(reviewToEdit.reviewText);
//           setRating(reviewToEdit.rating);
//           setEditingIndex(index);
//         }
//       };
    

//     // const handleDelete = (index) => {
//     //     const indexToDelete = indexOfFirstReview + index;
//     //     setReviews(reviews.filter((_, i) => i !== indexToDelete));
//     // };
//     const handleDelete = (index) => {
//         const indexToDelete = indexOfFirstReview + index;
    
//         // Update local storage
//         const updatedStoredReviews = [...storedReview];
//         updatedStoredReviews.splice(indexToDelete, 1);
//         localStorage.setItem('reviews', JSON.stringify(updatedStoredReviews));
    
//         // Update state
//         setReviews((prevReviews) => {
//             const updatedReviews = [...prevReviews];
//             updatedReviews.splice(indexToDelete, 1);
//             return updatedReviews;
//         });
//     };
    

//     const indexOfLastReview = currentPage * reviewsPerPage;
//     const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
//     const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

//     const totalPages = Math.ceil(reviews.length / reviewsPerPage);

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(
//                 <li key={i} className={i === currentPage ? 'active' : ''}>
//                     <button onClick={() => handlePageChange(i)}>{i}</button>
//                 </li>
//             );
//         }
//         return pageNumbers;
//     };

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//         // Clear editing index when changing pages
//         setEditingIndex(null);
//     };

//     const [editingIndex, setEditingIndex] = useState(null);

//     return (
//         <div className="customer-review-form">
//             <div className="review-form-container">
//                 <h2>Leave Us a Review</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="rating">Your Rating: *</label>
//                         <div className="star-rating">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                                 <FaStar
//                                     key={star}
//                                     className={star <= rating ? 'star-active' : 'star'}
//                                     onClick={() => handleRatingChange(star)}
//                                     required
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="customerName">Name: *</label>
//                         <input
//                             type="text"
//                             id="customerName"
//                             value={customerName}
//                             onChange={handleNameChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="reviewText">Review: *</label>
//                         <textarea
//                             id="reviewText"
//                             value={reviewText}
//                             onChange={handleReviewChange}
//                             required
//                         ></textarea>
//                     </div>
//                     <button type="submit">
//                         {editingIndex !== null ? 'Update Review' : 'Submit Review'}
//                     </button>
//                 </form>
//             </div>

//             <div className="review-list-container">
//                 <h2>Customer Reviews</h2>
//                 {storedReview.length === 0 ? (
//                     <p>No reviews yet.</p>
//                 ) : (
//                     <ul>
//                         {storedReview.map((review, index) => (
//                             <li key={index}>
//                                 <div className="star-rating">
//                                     {[1, 2, 3, 4, 5].map((star) => (
//                                         <FaStar
//                                             key={star}
//                                             className={star <= review.rating ? 'star-active' : 'star'}
//                                         />
//                                     ))}
//                                 </div>

//                                 <br/> {/* line break between rating and the rest of the review information */}
                                
//                                 <strong>{review.customerName}</strong> <br /><br />
//                                 {new Date().toLocaleDateString()} <br /><br /> {/* Today's date */}
//                                 {review.reviewText}{' '} <br /><br />
//                                 {/* <strong>{review.customerName}</strong> <br/><br/>
//                                 {review.reviewDate} <br/><br/>
//                                 {review.reviewText}{' '} <br/><br/> */}

//                                 <button onClick={() => handleEdit(index)}>Edit</button>
//                                 <button onClick={() => handleDelete(index)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 )}

//                 {totalPages > 1 && (
//                     <ul className="pagination">
//                         <li>
//                             <button
//                                 onClick={() => handlePageChange(currentPage - 1)}
//                                 disabled={currentPage === 1}
//                             >
//                                 Prev
//                             </button>
//                         </li>
//                         {renderPageNumbers()}
//                         <li>
//                             <button
//                                 onClick={() => handlePageChange(currentPage + 1)}
//                                 disabled={currentPage === totalPages}
//                             >
//                                 Next
//                             </button>
//                         </li>
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CustomerReviewForm;


import React, { useState } from 'react';
import './CustomerReviewForm.css';
import { FaStar } from 'react-icons/fa';

const CustomerReviewForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0); // Default to 0 stars
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;

    let storedReview = JSON.parse(localStorage.getItem('reviews')) || [];

    const handleNameChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handleReviewChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (customerName && rating > 0) {
    //         const currentDate = new Date().toLocaleDateString();
    //         const newReview = { customerName, reviewText, reviewDate: currentDate, rating };

    //         // If editing, update the review in place
    //         if (editingIndex !== null) {
    //             const updatedReviews = [...reviews];
    //             const indexToEdit = indexOfFirstReview + editingIndex;
    //             updatedReviews[indexToEdit] = newReview;
    //             setReviews(updatedReviews);
    //             setEditingIndex(null);
    //         } else {
    //             // Otherwise, add a new review
    //             setReviews([...reviews, newReview]);
    //         }

    //         setCustomerName('');
    //         setReviewText('');
    //         setRating(0);
    //     }
    //     storedReview.push({customerName, reviewText, rating});
    //     localStorage.setItem('reviews', JSON.stringify(storedReview));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (customerName && rating > 0) {
            const currentDate = new Date().toLocaleDateString();
            const newReview = { customerName, reviewText, reviewDate: currentDate, rating };
    
            // If editing, update the review in place
            if (editingIndex !== null) {
                const indexToEdit = indexOfFirstReview + editingIndex;
                // Update local storage
                const updatedStoredReviews = [...storedReview];
                updatedStoredReviews[indexToEdit] = newReview;
                localStorage.setItem('reviews', JSON.stringify(updatedStoredReviews));
    
                // Update state
                setReviews((prevReviews) => {
                    const updatedReviews = [...prevReviews];
                    updatedReviews[indexToEdit] = newReview;
                    return updatedReviews;
                });
    
                setEditingIndex(null);
            } else {
                // Otherwise, add a new review
                setReviews([...reviews, newReview]);
                storedReview.push({ customerName, reviewText, rating });
                localStorage.setItem('reviews', JSON.stringify(storedReview));
            }
    
            setCustomerName('');
            setReviewText('');
            setRating(0);
        }
    };
    

    const handleEdit = (index) => {
        const indexToEdit = index;
        const reviewToEdit = storedReview[indexToEdit];
        setCustomerName(reviewToEdit.customerName);
        setReviewText(reviewToEdit.reviewText);
        setRating(reviewToEdit.rating);
        setEditingIndex(index);
    };

    // const handleDelete = (index) => {
    //     const indexToDelete = indexOfFirstReview + index;
    //     setReviews(reviews.filter((_, i) => i !== indexToDelete));
    // };

    const handleDelete = (index) => {
     const indexToDelete = indexOfFirstReview + index;
            
    // Update local storage
    const updatedStoredReviews = [...storedReview];
    updatedStoredReviews.splice(indexToDelete, 1);
    localStorage.setItem('reviews', JSON.stringify(updatedStoredReviews));
            
    // Update state
    setReviews((prevReviews) => {
        const updatedReviews = [...prevReviews];
        updatedReviews.splice(indexToDelete, 1);
        return updatedReviews;
    });
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
                        <label htmlFor="rating">Your Rating: *</label>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={star <= rating ? 'star-active' : 'star'}
                                    onClick={() => handleRatingChange(star)}
                                    required
                                />
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerName">Name: *</label>
                        <input
                            type="text"
                            id="customerName"
                            value={customerName}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewText">Review: *</label>
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
                {storedReview.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    <ul>
                        {storedReview.map((review, index) => (
                            <li key={index}>
                                <div className="star-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            className={star <= review.rating ? 'star-active' : 'star'}
                                        />
                                    ))}
                                </div>

                                <br/> {/* line break between rating and the rest of the review information */}

                                <strong>{review.customerName}</strong> <br/><br/>
                                {new Date().toLocaleDateString()} <br /><br /> {/* Today's date */}

                                {/* {review.reviewDate} <br/><br/> */}
                                {review.reviewText}{' '} <br/><br/>

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