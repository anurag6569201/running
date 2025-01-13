import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/home/contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        full_name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false); // State for loading

    // Hide the response message after 5 seconds
    useEffect(() => {
        if (responseMessage) {
            const timer = setTimeout(() => {
                setResponseMessage("");
            }, 5000); // 5 seconds delay
            return () => clearTimeout(timer); // Clean up the timer on unmount
        }
    }, [responseMessage]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true); // Show loading spinner

        axios
            .post("https://running-5ymt.onrender.com/api/contact/", formData)
            .then((response) => {
                setResponseMessage(response.data.message); // Display success message
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.error || "An unexpected error occurred.";
                setResponseMessage(errorMessage); // Display error message
            })
            .finally(() => {
                setLoading(false); // Hide loading spinner
            });
    };

    return (
        <div className="container-fluid contact_form_container">
            <div className="contact-form">
                <div className="col-md-10">
                    <form className="form_details_contact shadow_v1" onSubmit={handleSubmit}>
                        <h4 className="text-center mb-4">Contact Us</h4>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label required">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label required">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label required">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label required">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {responseMessage && <div className="response-message">{responseMessage}</div>}
                                    <div className={`loader_box ${loading ? "show" : ""}`}>
                                        {loading && (
                                            <div className="text-light" role="status">
                                                <div className="loader">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <span className="mandatory-text">* mandatory field</span>

                            <div className="d-flex justify-content-center align-items-center">
                                <button 
                                    type="submit" 
                                    className="btn btn-send shadow_v1" 
                                    disabled={loading}
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
