import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ""
    });

    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Vipul Tandon',
                from_email: form.email,
                to_email: 'vipultandon.business@gmail.com',
                message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

        ).then(
            () => {
                setLoading(false);
                showAlert({
                    show: true,
                    text: 'Your message has been sent!',
                    type: 'success',
                });

                setTimeout(() => {
                    hideAlert(false);
                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                }, [3000]);
            },
            (error) => {
                setLoading(false);
                console.error(error);

                showAlert({
                    show: true,
                    text: "Something went wrong!",
                    type: 'danger',
                });
            },
        );
    };

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container pt-7">
                    <h3 className="head-text">Let's Collaborate!</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you need a powerful web platform, custom software solutions, or a visionary project brought to life,
                        I’m here to make it happen..
                    </p>


                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex. Ricardo Cabello"
                                autoComplete='on'
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex. ricardocabello@gmail.com"
                                autoComplete='on'
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact