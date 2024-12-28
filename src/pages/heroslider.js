import React, { useState, useEffect } from "react";

// Array of slides with images and content
const slides = [
  {
    id: 1,
    image: "/images/betterpaws.jpg",
    heading: "Highest Quality Care For Pets You'll Love",
    description: "Pamper your pet with our premium grooming services.",
    buttonText: "Learn More",
    buttonLink: "#grooming-services",
  },
  {
    id: 2,
    image: "/images/betterpaw3.jpg",
    heading: "Professional Grooming Services",
    description: "Our experts ensure the best care for your pet.",
    buttonText: "See Our Services",
    buttonLink: "#services", // Link to Grooming Services
  },
  {
    id: 3,
    image: "/images/betterpaw2.jpg",
    heading: "Love and Care for Pets",
    description: "Your pet's health and happiness are our priority.",
    buttonText: "Join Us Today",
    buttonLink: "#join-us", // Link to Join Us
  },
  {
    id: 4,
    image: "/images/betterpaw4.jpg",
    heading: "Safe and Comfortable Environment",
    description: "A stress-free grooming experience for your furry friend.",
    buttonText: "Learn More",
    buttonLink: "#safe-environment", // Link to Safe Environment
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop through slides
    }, 10000); // 10 seconds interval

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div
      className="hero-wrap"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="slider-content">
          <h1 className="heading">{slide.heading}</h1>
          <p className="description">{slide.description}</p>
          <p>
            <a href={slide.buttonLink} className="btn btn-primary">
              {slide.buttonText} <span className="arrow">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
