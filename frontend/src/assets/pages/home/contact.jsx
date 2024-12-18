import React from 'react';
import "../../css/home/contact.css";

function Contact() {

    return (
        <>
            <div class="container-fluid contact_form_container">
                <div class="contact-form">
                    <div className="col-md-10">
                        <form className='form_details_contact shadow_v1'>
                            <h4 class="text-center mb-4">Contact Us</h4>

                            <div className="row">
                                <div className="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label required">Full name</label>
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Phone</label>
                                                <input type="tel" class="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label required">Email Address</label>
                                                <input type="email" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label required">Subject</label>
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label required">Message</label>
                                        <textarea class="form-control" required></textarea>
                                    </div>
                                </div>
                                <span class="mandatory-text">* mandatory field</span>

                            </div>



                            <div class="d-flex justify-content-center align-items-center">
                                <button type="submit" class="btn btn-send shadow_v1">
                                    Send message
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
