import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">
              BetterPaws-Pet Trust Veterinary Hospital
            </h2>
            <p>
              At Better Paws, we treat your pets like family. Our grooming
              services are designed to ensure your pet not only looks great but
              feels great too. Book an appointment today and give your furry
              friend the pampering they deserve.
            </p>
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <span className="fa fa-twitter"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <span className="fa fa-facebook"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <span className="fa fa-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="py-2 d-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="py-2 d-block">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="py-2 d-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#works" className="py-2 d-block">
                  Works
                </a>
              </li>
              <li>
                <a href="#blog" className="py-2 d-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="py-2 d-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">Have a Question?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon fa fa-map"></span>
                  <span className="text">
                    14/989, NGO Quarters – Mavelipuram Rd, Thrikkakara,
                    Kakkanad, Kerala 682030
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon fa fa-phone"></span>
                    <span className="text">
                      +91 6235806114 | +91 6235806115
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon fa fa-paper-plane"></span>
                    <span className="text">info@pettrust.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="copyright">
              Copyright &copy; {new Date().getFullYear()} Pet Trust All rights
              reserved | This website is made with by
              <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                INNVOATE_X LAB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
