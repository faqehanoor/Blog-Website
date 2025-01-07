"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SignupFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignupForm: React.FC<SignupFormProps> = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus("Please fix the errors above.");
      return;
    }

    setStatus('Submitting...');
    try {
      console.log('Form submitted:', formData);
      setStatus('Successfully signed up!');
      setFormData({ username: '', email: '', password: '' });
      setShowModal(false);
    } catch (error) {
      console.error("Signup error:", error);
      setStatus('Error during signup, please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl font-bold text-center text-black">Sign Up</h3>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold text-black mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md border border-gray-300"
              required
              aria-describedby="username-error"
            />
            {errors?.username && <p id="username-error" className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div>
            <label className="block font-bold text-black mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md border border-gray-300"
              required
              aria-describedby="email-error"
            />
            {errors?.email && <p id="email-error" className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-bold text-black mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-gray-300"
                required
                aria-describedby="password-error"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-sm"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors?.password && <p id="password-error" className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Status */}
        <div className="text-center mt-4" role="alert" aria-live="polite">
          <p>{status}</p>
        </div>

        {/* Close Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => setShowModal(false)}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
