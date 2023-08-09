import React, { useState } from "react";
import '../css/ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userMessage: ""
    });

    const [formErrors, setFormErrors] = useState({
        userName: "",
        userEmail: "",
        userMessage: ""
    });

    function resetForm() {
        setFormData({
            userName: "",
            userEmail: "",
            userMessage: ""
        });

        setFormErrors({
            userName: "",
            userEmail: "",
            userMessage: ""
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log(formData);
            resetForm();
        }
    }

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setFormErrors({ ...formErrors, [event.target.name]: "" });
    }

    function validateForm() {
        let isValid = true;
        const newErrors = { ...formErrors };

        if (formData.userName.trim() === "") {
            newErrors.userName = "Name is required";
            isValid = false;
        }

        if (formData.userEmail.trim() === "") {
            newErrors.userEmail = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
            newErrors.userEmail = "Invalid email format";
            isValid = false;
        }

        if (formData.userMessage.trim() === "") {
            newErrors.userMessage = "Message is required";
            isValid = false;
        }

        setFormErrors(newErrors);
        return isValid;
    }

    return (
        <div className="container" id="contact">
            <div className="contact">
                <h3>Feel free to reach to us or share your views about food ChapChap</h3>
            </div>
            <form id="form" onSubmit={handleSubmit}>
                <label>
                    Name... <span><input className="form-input" type="text" name="userName" value={formData.userName} onChange={handleChange}></input></span>
                </label>
                <div className="error">{formErrors.userName}</div>
                <label>
                    Email... <span><input className="form-input" type="email" name="userEmail" value={formData.userEmail} onChange={handleChange}></input></span>
                </label>
                <div className="error">{formErrors.userEmail}</div>
                <label>
                    Message... <span><textarea className="form-input" type="text" name="userMessage" value={formData.userMessage} onChange={handleChange}></textarea></span>
                </label>
                <div className="error">{formErrors.userMessage}</div>
                <button className="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
