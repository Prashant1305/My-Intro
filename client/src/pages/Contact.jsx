import React, { useState } from 'react'
import "./Contact.css"
import { TokenContext } from '../store/auth';
function Contact() {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })
    const { isLogged, user } = TokenContext()
    function handleInput(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }
    const [userData, setUserData] = useState(true);

    if (isLogged && user && userData) {
        setContact({
            username: user.username,
            email: user.email,
            message: ""
        });
        setUserData(false);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(contact);
        try {
            const res = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact)
            });

            if (res.ok) {
                const messageRecived = await res.json();
                console.log(messageRecived);
                setContact({ ...contact, message: "" });
                alert("message sent to devloper");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <section className='section-contact'>
                <div className='contact-content container'>
                    <h1 className='main-heading'>Contact Us</h1>
                </div>

                <div className='container grid grid-two-cols'>
                    <div className='contact-img'>
                        <img src="/images/support.png" alt="failed to load picture" />
                    </div>

                    <section className='section-form'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={contact.username}
                                    autoComplete="off"
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={contact.email}
                                    autoComplete="off"
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>
                <section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>

            </section>
        </>
    )
}

export default Contact