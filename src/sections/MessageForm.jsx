import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";

const MessageForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        //     publicKey: 'YOUR_PUBLIC_KEY',
        // })
        .sendForm('service_wqppvlg', 'Contact_form', form.current, {
            publicKey: 'MyrS07nn40pvSfhg5',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <section>
        <Element
            name="Messageform"
            className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
        >
            <div className="container">
            <div className="flex flex-col items-center">
                <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
                    <p className="h4 mb-10 max-w-md text-center text-white">
                        Reach Us to Join Us 
                    </p>
                </div>
            </div>

            <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            </div>
            </div>
        </Element>
        </section>
    );
}

export default MessageForm