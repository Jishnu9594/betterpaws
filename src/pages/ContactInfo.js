import React from "react";

const ContactInfo = () => {
  return (
    <div className="wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <p className="mb-0 phone pl-md-2">
              <a href="#" className="mr-2">
                <i className="fas fa-phone mr-1" style={{ color: "white" }} />{" "}
                +91 6235806115
              </a>
              <a href="#">
                <i
                  className="fas fa-paper-plane mr-1"
                  style={{ color: "white" }}
                />{" "}
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
                  <i className="fab fa-facebook" style={{ color: "white" }}></i>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-twitter" style={{ color: "white" }}></i>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ color: "white" }}
                  ></i>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-dribbble" style={{ color: "white" }}></i>
                  <span className="sr-only">Dribbble</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
