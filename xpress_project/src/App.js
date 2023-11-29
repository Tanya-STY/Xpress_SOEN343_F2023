import React from 'react';
import CustomerReviewForm from './Pages/SubmitReview/CustomerReviewForm';
import './Pages/SubmitReview/CustomerReviewForm.css'; // Import the css stylesheet
//import Navbar from './components/Navbar_SignedIn/Navbar_SignedIn'; // Import the Navbar component

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Xpress Reviews</h1>
            </header>
            <main>
                {/*<Navbar />*/}
                <CustomerReviewForm />
            </main>
        </div>
    );
}

export default App;