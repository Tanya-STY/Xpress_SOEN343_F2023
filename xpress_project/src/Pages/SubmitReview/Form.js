import React from "react";
import { uuid } from "uuidv4";

export const Form = ({
                         editing,
                         form,
                         reviews,
                         setEditing,
                         setForm,
                         setReviews,
                     }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm({ CustomerName: "", review: "", id: uuid() });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setEditing(false);
        const updatedReviews = reviews.map((review) =>
            review.id === form.id ? form : review
        );
        setReviews(updatedReviews);
        setForm({ CustomerName: "", review: "", id: uuid() });
    };

    return (
        <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
            <h2>Leave a Review</h2>
            <label htmlFor="Name">Your Name</label>
            <input
                type="text"
                placeholder="Your Name"
                id="Name"
                name="Name"
                autoComplete="off"
                value={form.CustomerName}
                onChange={handleChange}
            />
            <label htmlFor="review">Review</label>
            <textarea
                value={form.review}
                placeholder="What'd you think?"
                id="review"
                name="review"
                onChange={handleChange}
            />
            <button type="submit">{editing ? "Update" : "Submit"}</button>
        </form>
    );
};

export default Form;