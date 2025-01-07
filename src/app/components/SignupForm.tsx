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

  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      console.log('Form submitted:', formData);
      setStatus('Successfully signed up!');
      setFormData({ username: '', email: '', password: '' });
  
      setShowModal(false);
    } catch (error) {
      setStatus('Error during signup, please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl font-bold text-center text-white">Sign Up</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold text-white mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md border border-white"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md border border-white"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md border border-white"
              required
            />
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
        <div className="text-center mt-4">
          <p>{status}</p>
        </div>
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
