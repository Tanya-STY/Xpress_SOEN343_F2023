import React from "react";
import './Reviews.css';
import reviewImage from 'C:\\Users\\Ihana\\OneDrive\\Documents\\GitHub\\Xpress_SOEN343_F2023\\xpress_project\\src\\components\\images\\ReviewsImage.png';
// import { useEffect, useState, useRef } from 'react';


// const styleOverview = {
//     WebkitLineClamp: 2,
//     WebkitBoxOrient: 'vertical',
//     overflow: 'hidden',
//     display: '-webkit-box'
// }

const Reviews = () => {

    // const [isOpen, setIsOpen] = useState(false);
    /*style={isOpen ? null : styleOverview}*/

    return (
        <>
            <div>
                <h1>Reviews</h1>
            </div>
            <div>
                <div className="review-reply">
                    <p className="review-name">Madeleine Khan</p>
                    <p className="review-date"> January 20, 2023</p>
                    <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                    {/*<button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '...see less' : '...see more'}</button>*/}
                </div>
                <div className="review-reply">
                    <p className="review-name">Myron Hawkins</p>
                    <p className="review-date"> May 3, 2023</p>
                    <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
                <div className="review-reply">
                    <p className="review-name">Lily Sherman</p>
                    <p className="review-date"> August 18, 2023</p>
                    <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img className="img" alt="review-stick-figure" src={reviewImage} />
                </div>



            </div>
        </>
    );
};

export default Reviews;