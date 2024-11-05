import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Element } from "react-scroll";

const MessageForm = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');

    const messages = [
        "Thank you for reaching out! We'll be in touch shortly.",
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_cw8xchn', 'feast_contact_form', form.current, {
            publicKey: 'Mxinsf7lITVyOdOh-',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                // Set a random success message
                const randomIndex = Math.floor(Math.random() * messages.length);
                setSuccessMessage(messages[randomIndex]);
                form.current.reset(); // Optional: reset the form after submission
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <section>
            <Element
                name="contactus"
                className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
            >
                <div className="container">
                    <div className="flex flex-col items-center mb-10">
                        <h2 className="h4 text-white text-center max-w-md">
                            Contact Us to Feast!
                        </h2>
                    </div>

                    {successMessage && (
                        <div className="bg-p3 text-white p-3 rounded mb-4 text-center">
                            {successMessage}
                        </div>
                    )}

                    <div className="px-36 max-md:px-20">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <input type="hidden" name="bcc" value="cj.kang@joinfeastco.com" />
                            <input type="hidden" name="cc" value="ryan.schwartz@joinfeastco.com" />
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-p4 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="border text-p4 p-2 bg-transparent placeholder-p4/20 border-p4/70 rounded focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-p4 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="border text-p4 p-2 bg-transparent placeholder-p4/20 border-p4/70 rounded focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <p className="text-p4 mb-2">Are you a potential Customer or a Chef?</p>
                                <div className="flex gap-6">
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="preference" value="Customer" className="mr-2 hidden peer" />
                                        <div className="w-4 h-4 border border-white rounded-full mr-2 flex items-center justify-center peer-checked:bg-p3">
                                            <div className="w-2 h-2 bg-transparent rounded-full peer-checked:bg-p3"></div>
                                        </div>
                                        Customer
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="preference" value="Chef" className="mr-2 hidden peer" />
                                        <div className="w-4 h-4 border border-white rounded-full mr-2 flex items-center justify-center peer-checked:bg-p3">
                                            <div className="w-2 h-2 bg-transparent rounded-full peer-checked:bg-p3"></div>
                                        </div>
                                        Chef
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-p4 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Email"
                                    className="border text-p4 p-2 bg-transparent placeholder-p4/20 border-p4/70 rounded focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-p4 mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    className="border text-p4 p-2 bg-transparent placeholder-p4/20 border-p4/70 rounded focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-p4 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Your message here"
                                    className="border text-p4 p-2 bg-transparent placeholder-p4/20 border-p4/70 rounded focus:outline-none"
                                    rows="4"
                                />
                            </div>

                            <button type="submit" className=" mt-20 px-20 py-2 bg-p2 text-white rounded p-2 hover:bg-p3 transition duration-200">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </Element>
        </section>
    );
}

export default MessageForm;