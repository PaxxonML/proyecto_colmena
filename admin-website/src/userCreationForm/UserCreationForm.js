import React, { useState } from 'react';

function UserCreationForm() {
    const [formData, setFormData] = useState({
        employeeID: '',
        email: '',
        password: '',
        verifyPassword: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.password !== formData.verifyPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Perform form submission logic here
        console.log(formData);

        // Reset the form
        setFormData({
            employeeID: '',
            email: '',
            password: '',
            verifyPassword: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Employee ID:
                <input
                    type="text"
                    name="employeeID"
                    value={formData.employeeID}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Verify Password:
                <input
                    type="password"
                    name="verifyPassword"
                    value={formData.verifyPassword}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <button type="submit">Create User</button>
        </form>
    );
}

function App() {
    return (
        <div>
            <h1>User Creation Form</h1>
            <UserCreationForm />
        </div>
    );
}
