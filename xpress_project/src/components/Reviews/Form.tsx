import React, {useState} from 'react';
import { Button, Form, Input } from 'reactstrap';
import './Reviews.css';

export default function FormComponent() {
    const [reviews, setReviews] = useState('');
    const onChange = (e:any) => {
        setReviews(e.target.value);
    };
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Submitted");
    };

    return (
        <div className="form-container">
            <Form onSubmit={onSubmit}>
                <Input
                    className="reviews-form"
                    type="text"
                    placeholder="Enter your review"
                    value={reviews}
                    onChange={onChange}
                />
                <Button type='submit' style={{background: "Orange"}}>Submit</Button>
            </Form>
        </div>
    );

}