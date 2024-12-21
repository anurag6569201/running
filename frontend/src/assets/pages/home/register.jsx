import React, { useState } from 'react';
import "../../css/home/register.css";

function Register() {
    const [formData, setFormData] = useState({
        schoolName: '',
        streetAddress: '',
        city: '',
        state: '',
        pincode: '',
        schoolWebsite: '',
        firstName: '',
        surname: '',
        phoneNumber: '',
        email: ''
    });
    const [successMessage, setSuccessMessage] = useState(''); // Track success message
    const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission status

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Show spinner or disable button during submission

        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Your school has been successfully pre-registered!');
                setTimeout(() => {
                    // Close modal after success message
                    const modal = document.getElementById('staticBackdrop');
                    const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
                    bootstrapModal.hide();

                    // Reset form data
                    setFormData({
                        schoolName: '',
                        streetAddress: '',
                        city: '',
                        state: '',
                        pincode: '',
                        schoolWebsite: '',
                        firstName: '',
                        surname: '',
                        phoneNumber: '',
                        email: ''
                    });

                    setSuccessMessage(''); // Clear success message
                }, 3000); // Adjust timeout as needed
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error. Please try again.');
        } finally {
            setIsSubmitting(false); // Re-enable the form
        }
    };

    return (
        <>
            <button className="custom-button shadow_v1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Pre-register your school →
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content p-3 pt-0">
                        <div className="modal-header model_header_register">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Pre Registration</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {successMessage ? (
                                <div className="alert alert-success text-center" role="alert">
                                    {successMessage}
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {/* Form Fields */}
                                    <div className="mb-3">
                                        <label htmlFor="schoolName" className="form-label">School Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="schoolName"
                                            name="schoolName"
                                            value={formData.schoolName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="streetAddress" className="form-label">Street Address*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="streetAddress"
                                            name="streetAddress"
                                            value={formData.streetAddress}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">City*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="state" className="form-label">State*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pincode" className="form-label">Pincode*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pincode"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="schoolWebsite" className="form-label">School Website</label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="schoolWebsite"
                                            name="schoolWebsite"
                                            value={formData.schoolWebsite}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="surname" className="form-label">Surname*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="surname"
                                            name="surname"
                                            value={formData.surname}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label">Daytime Telephone Number*</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address*</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Form Actions */}
                                    <div className="modal-footer">
                                        <span>* mandatory field</span>
                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
