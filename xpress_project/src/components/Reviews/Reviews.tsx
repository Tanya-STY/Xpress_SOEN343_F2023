// import "./Reviews.css";
// import image from '../images/image 7.png';
// import {useState, useEffect} from 'react';

// function Reviews() {
//     const [reviews, setReviews] = useState([]);
//     const [newReview, setNewReview] = useState('');

//     useEffect(() => {
//         const storedReviews = localStorage.getItem('reviews');
//             if (storedReviews) {
//                 setReviews(JSON.parse(storedReviews));
//              }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('reviews', JSON.stringify(reviews));
//     }, [reviews]);

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         if (newReview.trim() !== '') {
//             setReviews([...reviews, newReview]);
//             setNewReview('');
//         }
//     };

//     return (
//         <main  class="main">
//             <div class="content">
//                 <div class="information">
//                     <div class='infoItem' id="title"> 
//                         Reviews
//                     </div>
//                     <form onSubmit={handleReviewSubmit}>
//                         <textarea
//                             value={newReview}
//                             onChange={(e) => setNewReview(e.target.value)}
//                             placeholder="Write your review..."
//                         ></textarea>
//                         <button type="submit">Submit Review</button>
//                     </form>
//                     <div>
//                         <table>
//                             <tbody>
//                                 {reviews.map((review, index) => (
//                                 <tr key={index}>
//                                 <td>{review}</td>
//                                 </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                 </div>
//                 </div>
//                 <div class="image">
//                     <img id='rvs' src={image}></img>
//                 </div>
//             </div>
//         </main>
        
//     );
// } export default Reviews;
import './Reviews.css'
import Form from './Form';
import React from "react";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";

function Reviews({
  firstName,
  lastName,
  stars,
  comment,
  timestamp,
}: {
  firstName: string;
  lastName: string;
  stars: number;
  comment: string;
  timestamp: number;
}) {
  return (
    <>
    <Card>
      <CardBody>
        <CardTitle tag="h1">Reviews Page</CardTitle>
        <div className="reviews-top">
          <div className="user-details">
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {firstName} {lastName || "John Doe"}
            </CardSubtitle>
            {[...Array(stars || 5)].map((star) => {
              return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
            })}
          </div>
          <div className="reviews-body">
            <CardText>
              {comment ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
            </CardText>
          </div>
          <CardText>
            <small className="text-muted text-bold">
              {timestamp || "3 mins ago"}
            </small>
          </CardText>
        </div>
      </CardBody>
    </Card>
    <Form/>
    </>
  );
}

export default Reviews;