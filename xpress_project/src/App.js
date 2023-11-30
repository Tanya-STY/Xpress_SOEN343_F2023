import React from 'react';
import CustomerReviewForm from './Pages/SubmitReview/CustomerReviewForm';
import './Pages/SubmitReview/CustomerReviewForm.css'; // Import the css stylesheet
import Navbar from './components/Navbar_SignedIn/Navbar_SignedIn'; // Import the Signed in Navbar component

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main>
                <CustomerReviewForm />
            </main>
        </div>
    );
}

export default App;