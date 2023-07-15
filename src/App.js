import React, { useState } from 'react';
import './Sign.css'

function Sign() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic form validation
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required.';
    }

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required.';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required.';
    }

    if (formData.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm Password is required.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);

    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // TODO: Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Sign;