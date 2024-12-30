import React, { useState } from "react";
import axios from "axios";

const FreeConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    return (
      formData.name &&
      formData.phone &&
      formData.service &&
      formData.email &&
      formData.date &&
      formData.time
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setResponseMessage("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setResponseMessage("");
    try {
      await axios.post(
        "https://pettrust-backend-1wzw.onrender.com/pet/contact-form/",
        formData
      );
      setResponseMessage("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        service: "",
        email: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      setResponseMessage("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="image-section">
        <img
          src="images/about-3.jpg"
          alt="Consultation"
          className="image-section-img"
        />
      </div>
      <div className="form-section">
        <div className="intro-text">
          <h3>Book Your Appointment Today!</h3>
          <p>
            At Better Paws, we treat your pets like family. Our grooming
            services are designed to ensure your pet not only looks great but
            feels great too. Book an appointment today and give your furry
            friend the pampering they deserve.
          </p>
        </div>

        <h2 className="form-title">Free Consultation</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <select
              name="service"
              className="form-input"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a Service</option>
              <option value="bath-blow-dry">Bath & Blow Dry</option>
              <option value="haircuts-styling">Haircuts & Styling</option>
              <option value="nail-care">Nail Care</option>
              <option value="ear-cleaning-teeth-brushing">
                Ear Cleaning & Teeth Brushing
              </option>
              <option value="fur-skin-treatments">Fur & Skin Treatments</option>
              <option value="special-packages">Special Packages</option>
            </select>
          </div>
          <div className="form-row">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              className="form-input"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="time"
              name="time"
              className="form-input"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              rows="5"
              className="form-textarea"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-row">
            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
        {responseMessage && <p className="form-response">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default FreeConsultationForm;
