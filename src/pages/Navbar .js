import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sticky-top"
      id="ftco-navbar"
    >
      <div className="container">
        {/* Logo 1 */}
        <a className="navbar-brand ml-3" href="index.html">
          <img
            src="/images/betterpawslogo.png"
            alt="Better Paws Logo"
            style={{ height: "80px" }}
          />
        </a>

        {/* Second Logo */}
        <a className="navbar-brand ml-3" href="index.html">
          <img
            src="/images/pettrustlogo"
            alt="Pet Trust Logo"
            style={{ height: "80px" }}
          />
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
            {/* Links for section navigation */}
            <li className="nav-item active">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#facts" className="nav-link">
                Fact's
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">
                FAQ'S
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
