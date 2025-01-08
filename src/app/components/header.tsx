"use client";

import React, { useState, useEffect } from "react";
import { SignupForm } from "./SignupForm";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal((prevState) => !prevState);
  };

  // Close the modal when pressing Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Close modal when clicking outside
  const closeModalOnClickOutside = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-white font-bold text-2xl">Faqeha&apos;s Blog</span> {/* Escape apostrophe */}
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">
              About
            </a>
            <a href="/blog" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">
              Blog
            </a>
            <a href="/contact" className="mr-5 text-2xl font-extrabold text-white hover:text-gray-900">
              Contact
            </a>
          </nav>

          <button
            onClick={handleModalToggle}
            className="inline-flex items-center text-purple-600 font-bold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            aria-label="Sign up to join the blog community"
            aria-expanded={showModal}
            aria-controls="signup-form-modal"
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

      {showModal && (
        <div
          id="signup-form-modal"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModalOnClickOutside} // Close on outside click
        >
          <SignupForm id="signup-form-modal" setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};
