import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Registration successful!');
                // Reset form data after successful registration
                setFormData({
                    username: '',
                    phoneNumber: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            console.error('Error registering user:', error.message);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>New Account</h3>
            <div className="form-holder">
                <span className="lnr lnr-user"></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div className="form-holder">
                <span className="lnr lnr-phone-handset"></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="form-holder">
                <span className="lnr lnr-envelope"></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-holder">
                <span className="lnr lnr-lock"></span>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            
            <button type="submit">
                <span>Register</span>
            </button>
        </form>
    );
};

export default Form;
