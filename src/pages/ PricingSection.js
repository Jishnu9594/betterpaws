import React from "react";

const PricingSection = () => {
  const pricingData = [
    {
      title: "Personal",
      price: 49,
      image: "images/pricing-1.jpg",
      features: ["5 Dog Walk", "3 Vet Visits", "3 Pet Spas", "Free Support"],
    },
    {
      title: "Business",
      price: 79,
      image: "images/pricing-2.jpg",
      features: ["5 Dog Walks", "3 Vet Visits", "3 Pet Spas", "Free Support"],
    },
    {
      title: "Ultimate",
      price: 109,
      image: "images/pricing-3.jpg",
      features: ["5 Dog Walks", "3 Vet Visits", "3 Pet Spas", "Free Support"],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Affordable Packages</h2>
        </div>
        <div className="pricing-cards">
          {pricingData.map((pricing, index) => (
            <div key={index} className="pricing-card">
              <div
                className="pricing-card-image"
                style={{ backgroundImage: `url(${pricing.image})` }}
              ></div>
              <div className="pricing-card-content">
                <span className="pricing-title">{pricing.title}</span>
                <span className="pricing-price">
                  <sup>$</sup>
                  <span className="price-number">{pricing.price}</span>
                  <sub>/mos</sub>
                </span>
                <ul className="pricing-features">
                  {pricing.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="checkmark">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="get-started-btn">
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
