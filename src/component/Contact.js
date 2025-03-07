import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        topic: "",
        message: "",
        firstName: "",
        lastName: "",
        company: "",
        zip: "",
        city: "",
        country: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Your message has been sent!");
    };

    return (
        <div className='contact'>
            <Navbar />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>Feel free to reach out with any inquiries.</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Our Office</h2>
                        <p><strong>Company Name:</strong> RNJ Metal</p>
                        <p><strong>Address:</strong> 123 Business St, City, Country</p>
                        <p><strong>Email:</strong> support@abc.com</p>
                        <p><strong>Phone:</strong> +1 234 567 890</p>
                    </div>

                    <div className="contact-form">
                        <h2>Leave us a message:</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Choose your topic:</label>
                            <select name="topic" value={formData.topic} onChange={handleChange} required>
                                <option value="">Select a topic</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Support">Support</option>
                                <option value="Feedback">Feedback</option>
                            </select>

                            <label>Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required />

                            <label>First Name:</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

                            <label>Last Name:</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

                            <label>Company:</label>
                            <input type="text" name="company" value={formData.company} onChange={handleChange} />

                            <label>ZIP:</label>
                            <input type="text" name="zip" value={formData.zip} onChange={handleChange} />

                            <label>City:</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} />

                            <label>Country or Region:</label>
                            <input type="text" name="country" value={formData.country} onChange={handleChange} />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
