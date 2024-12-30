import React from "react";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="services-section bg-light no-padding intro"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <br />
            <h2 className="section-heading">Our Grooming Services</h2>
            <p className="section-subheading">
              Choose from a range of services to pamper your pet and keep them
              happy and healthy!
            </p>
          </div>
        </div>
        <div className="row">
          {/* Bath & Blow Dry */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="fa fa-bath"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Bath & Blow Dry</h3>
                <p>
                  Give your pet a refreshing bath with high-quality shampoos and
                  conditioners that are gentle on their skin, followed by a
                  soothing blow-dry for a shiny, healthy coat.
                </p>
                <a
                  href="#"
                  className="custom-btn d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>

          {/* Haircuts & Styling */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="fa fa-scissors"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Haircuts & Styling</h3>
                <p>
                  From breed-specific cuts to custom grooming styles, our expert
                  groomers ensure your pet’s look is exactly as you envision it.
                </p>
                <a
                  href="#"
                  className="custom-btn d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>

          {/* Nail Care */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="fa fa-cut"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Nail Care</h3>
                <p>
                  Regular nail trimming is essential for your pet’s health. We
                  offer safe and gentle nail care services that promote paw
                  health and comfort.
                </p>
                <a
                  href="#"
                  className="custom-btn d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Ear Cleaning & Teeth Brushing */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="fa fa-ear"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Ear Cleaning & Teeth Brushing</h3>
                <p>
                  Ear care and dental hygiene are crucial for your pet’s
                  well-being. Our groomers provide gentle ear cleaning and teeth
                  brushing to help prevent infections and dental issues.
                </p>
                <a
                  href="#"
                  className="custom-btn d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>

          {/* Fur & Skin Treatments */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="fa fa-leaf"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Fur & Skin Treatments</h3>
                <p>
                  If your pet has sensitive skin or a specific condition, we
                  offer specialized treatments like de-shedding, flea
                  treatments, and more, ensuring their coat stays healthy and
                  vibrant.
                </p>
                <a
                  href="#"
                  className="custom-btn d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>

          {/* Special Packages */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="fa fa-gift"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Special Packages</h3>
                <p>
                  Choose from our tailored grooming packages, offering the best
                  combination of services for your pet's unique needs at a great
                  value.
                </p>
                <a
                  href="#"
                  className="custom-btn d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
