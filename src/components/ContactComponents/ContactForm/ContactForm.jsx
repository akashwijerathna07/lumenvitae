import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const initialForm = {
        fullName: "",
        email: "",
        country: "",
        businessType: "",
        subject: "",
        message: ""
    };

    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const [notification, setNotification] = useState({
        show: false,
        type: "",
        message: ""
    });


    /* =========================
       HANDLE INPUT
    ========================= */

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }));
        }
    };


    /* =========================
       VALIDATION
    ========================= */

    const validateForm = () => {
        const newErrors = {};

        // EMAIL

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address.";
        }


        // BUSINESS TYPE

        if (!formData.businessType.trim()) {
            newErrors.businessType = "Business type is required.";
        }


        // MESSAGE

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    /* =========================
       NOTIFICATION
    ========================= */

    const showNotification = (type, message) => {
        setNotification({
            show: true,
            type,
            message
        });

        setTimeout(() => {
            setNotification({
                show: false,
                type: "",
                message: ""
            });
        }, 3500);
    };


    /* =========================
       SUBMIT
    ========================= */

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSending(true);

        try {
            /*
                TEMPORARY MOCK REQUEST

                Replace this later with the actual
                backend / email service request.
            */

            await new Promise((resolve) =>
                setTimeout(resolve, 1200)
            );


            // CLEAR FORM ONLY AFTER SUCCESS

            setFormData(initialForm);
            setErrors({});


            // SUCCESS NOTIFICATION

            showNotification(
                "success",
                "Message sent successfully."
            );

        } catch (error) {

            // ERROR NOTIFICATION

            showNotification(
                "error",
                "Something went wrong. Please try again."
            );

        } finally {
            setIsSending(false);
        }
    };


    return (
        <section className="contact-form-section">

            {/* =========================
                FULL WIDTH IMAGE
            ========================= */}

            <div className="contact-image">
                <div className="contact-image-overlay"></div>
            </div>


            {/* =========================
                FORM
            ========================= */}

            <div className="container contact-form-container">

                <div className="contact-form-card">


                    {/* HEADING */}

                    <div className="contact-form-heading">

                        <h1>
                            LET’S DO BUSINESS.
                        </h1>

                        <p>
                            Tell us about your requirements, questions or
                            partnership ideas. We'd be happy to hear from you.
                        </p>

                    </div>


                    {/* FORM */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                    >


                        {/* FULL NAME */}

                        <div className="contact-field">

                            <label htmlFor="fullName">
                                Full Name
                            </label>

                            <input
                                id="fullName"
                                type="text"
                                name="fullName"
                                placeholder="Enter your name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />

                        </div>


                        {/* EMAIL */}

                        <div
                            className={`contact-field ${
                                errors.email ? "has-error" : ""
                            }`}
                        >

                            <label htmlFor="email">
                                Email Address <span>*</span>
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {errors.email && (
                                <small className="contact-error">
                                    {errors.email}
                                </small>
                            )}

                        </div>


                        {/* COUNTRY */}

                        <div className="contact-field">

                            <label htmlFor="country">
                                Country
                            </label>

                            <input
                                id="country"
                                type="text"
                                name="country"
                                placeholder="Enter your country"
                                value={formData.country}
                                onChange={handleChange}
                            />

                        </div>


                        {/* BUSINESS TYPE */}

                        <div
                            className={`contact-field ${
                                errors.businessType
                                    ? "has-error"
                                    : ""
                            }`}
                        >

                            <label htmlFor="businessType">
                                Business Type <span>*</span>
                            </label>

                            <input
                                id="businessType"
                                type="text"
                                name="businessType"
                                placeholder="Retailer, distributor, restaurant..."
                                value={formData.businessType}
                                onChange={handleChange}
                            />

                            {errors.businessType && (
                                <small className="contact-error">
                                    {errors.businessType}
                                </small>
                            )}

                        </div>


                        {/* SUBJECT */}

                        <div className="contact-field contact-field-full">

                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                placeholder="What would you like to discuss?"
                                value={formData.subject}
                                onChange={handleChange}
                            />

                        </div>


                        {/* MESSAGE */}

                        <div
                            className={`contact-field contact-field-full ${
                                errors.message
                                    ? "has-error"
                                    : ""
                            }`}
                        >

                            <label htmlFor="message">
                                Message / Requirements <span>*</span>
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us a little about what you need..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>

                            {errors.message && (
                                <small className="contact-error">
                                    {errors.message}
                                </small>
                            )}

                        </div>


                        {/* SUBMIT */}

                        <div className="contact-submit">

                            <button
                                type="submit"
                                disabled={isSending}
                            >
                                <span>
                                    {isSending
                                        ? "SENDING..."
                                        : "SEND MESSAGE"}
                                </span>
                            </button>

                        </div>

                    </form>

                </div>

            </div>


            {/* =========================
                NOTIFICATION
            ========================= */}

            <div
                className={`contact-notification ${
                    notification.show ? "show" : ""
                } ${notification.type}`}
            >

                <div className="contact-notification-icon">
                    {notification.type === "success"
                        ? "✓"
                        : "!"}
                </div>

                <p>
                    {notification.message}
                </p>

            </div>

        </section>
    );
};

export default ContactForm;