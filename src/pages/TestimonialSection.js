import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials from Django backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://pettrust-backend-1wzw.onrender.com/pet/testimonials/"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Settings for Slick Slider with autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 3000, // Set the time for each slide (in milliseconds)
    pauseOnHover: true, // Pause the autoplay when hovering over the slider
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="star-rating" style={{ marginTop: "5px" }}>
        {Array.from({ length: totalStars }, (_, index) => (
          <span
            key={index}
            className={index < rating ? "filled-star" : "empty-star"}
            style={{
              color: index < rating ? "#ffc107" : "#e4e5e9", // Gold for filled stars, light gray for empty
              fontSize: "20px", // Adjust size as needed
              margin: "0 2px",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      className="testimonial-area testimonial-padding section-bg"
      style={{
        backgroundImage: 'url("images/bg_2.jpg")',
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-10">
            {/* Heading for the Testimonial Slider */}
            <h2 className="testimonial-heading text-center">
              Our Testimonials
            </h2>

            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="single-testimonial text-center">
                  <div className="testimonial-caption">
                    <div className="testimonial-founder">
                      <div className="founder-img mb-40">
                        {/* Profile image */}
                        {testimonial.image && (
                          <img
                            src={`https://pettrust-backend-1wzw.onrender.com${testimonial.image}`}
                            alt={`${testimonial.name} - Testimonial`} // Providing a meaningful alt text
                            className="profile-img"
                          />
                        )}
                        {/* Display the name */}
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                          {testimonial.name}
                        </span>
                        {/* Render Star Rating directly below the name */}
                        {testimonial.rating && renderStars(testimonial.rating)}
                        {/* Display the "Local Guide" text */}
                        <p className="local-guide-text">Local Guide</p>
                        {/* Display the title */}
                        <p style={{ fontSize: "16px", color: "#6c757d" }}>
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-top-cap">
                      {/* Display the testimonial message */}
                      <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                        {testimonial.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
