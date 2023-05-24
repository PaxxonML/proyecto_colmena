import React, { useState } from 'react';

function FormComponent() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        console.log(formData);
        // Reset the form
        setFormData({
            username: '',
            password: '',
        });
    };

    return (
        <form className="box" onSubmit={handleSubmit}>
            <h4>Admin<span>Dashboard</span></h4>
            <h5>Sign in to your account.</h5>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                autoComplete="off"
            />
            <i className="typcn typcn-eye" id="eye"></i>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    autoComplete="off"
                />
            <button type="submit" className="btn1">Submit</button>
        </form>
    );
}

export default FormComponent;
