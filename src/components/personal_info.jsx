import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    // State to manage whether the inputs are editable
    const [isEditable, setIsEditable] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    // Show modal
    const handleVerifyClick = () => {
        setShowModal(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                    {/* Edit button */}
                    <button className="btn btn-primary" onClick={toggleEdit}>
                        {isEditable ? (
                            <>
                                <i className="fa fa-save me-2" />
                                Save
                            </>
                        ) : (
                            <>
                                <i className="fa fa-edit me-2" />
                                Edit
                            </>
                        )}
                    </button>

                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                            <div className="d-flex align-items-center">
                                <label className="position-relative me-4 center" htmlFor="uploadfile-1" title="Replace this pic">
                                    {/* Avatar placeholder */}
                                    <span className="avatar avatar-xl">
                                        <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src="https://placehold.co/500x500" alt="" />
                                    </span>
                                </label>
                                {/* Upload button */}
                                <label className={`btn btn-sm ${isEditable ? 'btn-light-primary' : 'btn-secondary'} px-4 fw-medium mb-0`} htmlFor="uploadfile-1">
                                    {isEditable ? 'Change' : 'Disabled'}
                                </label>
                                <input id="uploadfile-1" className="form-control d-none" type="file" disabled={!isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" defaultValue="Adam K" disabled={!isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" defaultValue="Divliars" disabled={!isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">Email ID</label>
                                <input type="text" className="form-control" defaultValue="adamkruck@gmail.com" disabled={!isEditable} />
                                {isEditable && (
                                    <button className="btn btn-text-secondary btn-sm verify-button" onClick={handleVerifyClick}>Verify</button>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">Mobile</label>
                                <input type="text" className="form-control" defaultValue="9856542563" disabled={!isEditable} />
                                {isEditable && (
                                    <button className="btn btn-text-secondary btn-sm verify-button" onClick={handleVerifyClick}>Verify</button>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" defaultValue="2000-02-04" disabled={!isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">Gender</label>
                                <select className="form-control custom-select" defaultValue="Male" disabled={!isEditable}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <i className="fa fa-chevron-down select-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                    <h4><i className="fa-solid fa-envelope-circle-check me-2" />Update Your Email</h4>
                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" placeholder="update your new email" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="text-end">
                                <Link to="#" className="btn btn-md btn-primary mb-0">Update Email</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4><i className="fa-solid fa-lock me-2" />Update Password</h4>
                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">Old Password</label>
                                <input type="password" className="form-control" placeholder="*********" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">New Password</label>
                                <input type="password" className="form-control" placeholder="*********" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="*********" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="text-end">
                                <Link to="#" className="btn btn-md btn-primary mb-0">Change Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .form-group {
                    position: relative;
                    margin-bottom: 1rem;
                }

                .form-control {
                    padding-right: 1rem;
                }

                .verify-button {
                    position: absolute;
                    right: 0;
                    top: 65%;
                    transform: translateY(-50%);
                    z-index: 1;
                }

                .btn-outline-secondary {
                    border-color: #6c757d;
                    color: #6c757d;
                }

                .btn-outline-secondary:hover {
                    background-color: #6c757d;
                    color: #fff;
                }
                    
                .select-icon {
                    position: absolute;
                    right: 0.75rem;
                    top: 64%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    font-size: 1rem;
                    color: #6c757d;
                }
            `}</style>
            <OTPModal showModal={showModal} handleClose={handleCloseModal} />
        </>
    );
}

const OTPModal = ({ showModal, handleClose }) => {
    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="otpModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="otpModalLabel">Enter OTP</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="otpInput">OTP</label>
                                <input type="text" className="form-control" id="otpInput" placeholder="Enter OTP" />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PersonalInfo;