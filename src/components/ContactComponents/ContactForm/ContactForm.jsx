import React, { useState } from "react";
import { motion } from "motion/react";
import "./ContactForm.css";

const ContactForm = () => {
    const initialForm = {
        name: "",
        email: "",
        country: "",
        business_type: "",
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

    /* Handle input */
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

    /* Validation */
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!formData.country.trim()) {
            newErrors.country = "Country is required.";
        }

        if (!formData.business_type.trim()) {
            newErrors.business_type = "Business type is required.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    /* Notification */
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

    /* Submit */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSending(true);

        try {
            const form = e.currentTarget;
            const submitData = new FormData(form);

            submitData.append(
                "access_key",
                import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
            );

            submitData.set("name", formData.name.trim());
            submitData.set("email", formData.email.trim());
            submitData.set("country", formData.country.trim());
            submitData.set(
                "business_type",
                formData.business_type.trim()
            );
            submitData.set("message", formData.message.trim());

            if (formData.subject.trim()) {
                submitData.set(
                    "subject",
                    formData.subject.trim()
                );
            } else {
                submitData.delete("subject");
            }

            const data = Object.fromEntries(submitData);
            const json = JSON.stringify(data);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: json
                }
            );

            const result = await response.json();

            if (!result.success) {
                throw new Error(
                    result.message || "Form submission failed."
                );
            }

            setFormData(initialForm);
            setErrors({});
            form.reset();

            showNotification(
                "success",
                "Message sent successfully."
            );
        } catch (error) {
            console.error("Web3Forms error:", error);

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
            <motion.div
                className="contact-image"
                initial={{
                    opacity: 0,
                    x: -90
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 2,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                <div className="contact-image-overlay"></div>
            </motion.div>

            <div className="container contact-form-container">
                <motion.div
                    className="contact-form-card"
                    initial={{
                        opacity: 0,
                        x: 90,
                        y: 70
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <motion.div
                        className="contact-form-heading"
                        initial={{
                            opacity: 0,
                            y: 80
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <h1>LET’S DO BUSINESS.</h1>

                        <p>
                            Tell us about your requirements, questions or
                            partnership ideas. We'd be happy to hear from you.
                        </p>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                        initial={{
                            opacity: 0,
                            y: 70
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.9,
                            delay: 0.5,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <input
                            type="checkbox"
                            name="botcheck"
                            tabIndex="-1"
                            autoComplete="off"
                            style={{ display: "none" }}
                        />

                        <div
                            className={`contact-field ${
                                errors.name ? "has-error" : ""
                            }`}
                        >
                            <label htmlFor="name">
                                Full Name <span>*</span>
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            {errors.name && (
                                <small className="contact-error">
                                    {errors.name}
                                </small>
                            )}
                        </div>

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

                        <div
                            className={`contact-field ${
                                errors.country ? "has-error" : ""
                            }`}
                        >
                            <label htmlFor="country">
                                Country <span>*</span>
                            </label>

                            <input
                                id="country"
                                type="text"
                                name="country"
                                placeholder="Enter your country"
                                value={formData.country}
                                onChange={handleChange}
                            />

                            {errors.country && (
                                <small className="contact-error">
                                    {errors.country}
                                </small>
                            )}
                        </div>

                        <div
                            className={`contact-field ${
                                errors.business_type ? "has-error" : ""
                            }`}
                        >
                            <label htmlFor="business_type">
                                Business Type <span>*</span>
                            </label>

                            <input
                                id="business_type"
                                type="text"
                                name="business_type"
                                placeholder="Retailer, distributor, restaurant..."
                                value={formData.business_type}
                                onChange={handleChange}
                            />

                            {errors.business_type && (
                                <small className="contact-error">
                                    {errors.business_type}
                                </small>
                            )}
                        </div>

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

                        <div
                            className={`contact-field contact-field-full ${
                                errors.message ? "has-error" : ""
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
                    </motion.form>
                </motion.div>
            </div>

            <div
                className={`contact-notification ${
                    notification.show ? "show" : ""
                } ${notification.type}`}
            >
                <div className="contact-notification-icon">
                    {notification.type === "success" ? "✓" : "!"}
                </div>

                <p>{notification.message}</p>
            </div>
        </section>
    );
};

export default ContactForm;