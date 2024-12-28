import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-5 d-flex">
            <div
              className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
              style={{ backgroundImage: "url(images/about-1.jpg)" }}
            ></div>
          </div>
          <div className="col-md-7 pl-md-5 py-md-5">
            <div className="heading-section pt-md-5">
              <h2 className="mb-4">Why Choose Us?</h2>
            </div>
            <div className="row">
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-stethoscope"></span>
                </div>
                <div className="text pl-3">
                  <h4>Care Advices</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries.
                  </p>
                </div>
              </div>
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="text pl-3">
                  <h4>Customer Supports</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries.
                  </p>
                </div>
              </div>
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-emergency-call"></span>
                </div>
                <div className="text pl-3">
                  <h4>Emergency Services</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries.
                  </p>
                </div>
              </div>
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-veterinarian"></span>
                </div>
                <div className="text pl-3">
                  <h4>Veterinary Help</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
