import React, { Fragment } from "react";
import HeroSlider from "./heroslider";
import ServicesSection from "./service";
import WhyChooseUs from "./whychoose";
import CounterSection from "./counterSection";
import FaqSection from "./FaqSection";
import PricingSection from "./ PricingSection";

function Index() {
  return (
    <Fragment>
      <>
        <div className="wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <p className="mb-0 phone pl-md-2">
                  <a href="#" className="mr-2">
                    <span className="fa fa-phone mr-1" /> +91 6235806115
                  </a>
                  <a href="#">
                    <span className="fa fa-paper-plane mr-1" />{" "}
                    info@pettrust.com
                  </a>
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end">
                <div className="social-media">
                  <p className="mb-0 d-flex">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook">
                        <i className="sr-only">Facebook</i>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter">
                        <i className="sr-only">Twitter</i>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram">
                        <i className="sr-only">Instagram</i>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-dribbble">
                        <i className="sr-only">Dribbble</i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <span className="flaticon-pawprint-1 mr-2" />
              Betterpaws
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="vet.html" className="nav-link">
                    Veterinarian
                  </a>
                </li>
                <li className="nav-item">
                  <a href="services.html" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="gallery.html" className="nav-link">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pricing.html" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog.html" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <HeroSlider />

        <ServicesSection />

        <WhyChooseUs />

        <CounterSection />
        <FaqSection />

        <PricingSection />
      </>
    </Fragment>
  );
}

export default Index;
