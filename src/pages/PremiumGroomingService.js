import React from "react";

const PremiumGroomingService = () => {
  return (
    <section className="premium-grooming-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="grooming-text-box">
              <h2 className="section-title">
                Better Paws - Premium Pet Grooming Services
              </h2>
              <p className="section-description">
                At Pet Trust Veterinary Hospital, we believe that every pet
                deserves to feel their best. That’s why we’ve introduced Better
                Paws, our premium pet grooming service designed to provide a
                relaxing and revitalizing experience for your furry friends.
                Whether it's a bath, a haircut, or a full grooming session,
                we’re here to make sure your pets look and feel fabulous!
              </p>
              <button className="cta-button">Book Now</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="grooming-image-container">
              {" "}
              <br></br>
              <br></br>
              <img
                src="images/pettrusthospital.webp" // Replace with your own image path
                alt="Premium Pet Grooming"
                className="grooming-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumGroomingService;
