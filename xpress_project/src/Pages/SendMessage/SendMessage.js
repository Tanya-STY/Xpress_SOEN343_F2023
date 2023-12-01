import React from "react";
import './SendMessage.css';
import { useRef } from "react";
import emailjs from '@emailjs/browser'; // the free online service used for sending emails

const SendMessage = () => {

    const form = useRef() // useRef will point to the form

    // function to send an email that will be triggered on Submit
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_xpress', form.current, '03VeMhDghjgPZSb-R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset(); // this is to clear the form after every submission
    };




    return (
        <section>

                <h2>Contact Us!</h2>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <input type="text" placeholder="Enter your Full Name" name="user name" required />
                    <input type="email" placeholder="Enter your Email" name="user email" required />
                    <textarea name="question" cols={50} rows={10}></textarea>
                    <button type="submit">Send</button>
                </form>

           


        </section>

    );
};

export default SendMessage;