"use client"

import React, { useState } from 'react';
import { SignupForm } from './SignupForm'; 

export const Header = () => {
 
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-white font-bold text-2xl">Faqeha's Blog</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">Home</a>
            <a href="/" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">About</a>
            <a href="/blog" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">Blog</a>
            <a href="/" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">Contact</a>
          </nav>
          <button
            onClick={toggleModal}
            className="inline-flex items-center text-purple-600 font-bold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Sign Up!
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>

  
      {showModal && <SignupForm setShowModal={setShowModal} />}
    </div>
  );
};
