import React, { useState, useEffect, useRef } from "react";

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
    buttonLink: "#services",
  },
  {
    id: 3,
    image: "/images/betterpaw2.jpg",
    heading: "Love and Care for Pets",
    description: "Your pet's health and happiness are our priority.",
    buttonText: "Join Us Today",
    buttonLink: "#join-us",
  },
  {
    id: 4,
    image: "/images/betterpaw4.jpg",
    heading: "Safe and Comfortable Environment",
    description: "A stress-free grooming experience for your furry friend.",
    buttonText: "Learn More",
    buttonLink: "#safe-environment",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  // Function to change the slide
  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to manually select a slide
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  // Set interval for slide change and clear it on unmount
  useEffect(() => {
    timeoutRef.current = setInterval(changeSlide, 10000); // Change slide every 10 seconds
    return () => {
      clearInterval(timeoutRef.current); // Cleanup on unmount
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <div
      id="home" // Add the id for the "Home" section
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
      <div className="indicator-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
      <img
        src={slide.image}
        alt={slide.heading}
        loading="lazy"
        style={{ visibility: "hidden" }}
      />
    </div>
  );
};

export default HeroSlider;
