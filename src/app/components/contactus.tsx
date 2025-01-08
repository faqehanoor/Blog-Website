import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle error
        alert('There was an error submitting your message.');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('There was an error submitting your message.');
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      {/* ... rest of the form component */}
    </section>
  );
};

export default Contactus;
