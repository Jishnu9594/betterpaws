import React from "react";

const ServicesSection = () => {
  return (
    <section className="services-section bg-light no-padding intro">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <br></br>
            <h2 className="section-heading">Our Pet Services</h2>
            <p className="section-subheading">
              Choose from a range of services to pamper your pet and keep them
              happy and healthy!
            </p>
          </div>
        </div>
        <div className="row">
          {/* Dog Walking Service */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="flaticon-blind"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Dog Walking</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right.
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

          {/* Pet Daycare Service */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="flaticon-dog-eating"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Pet Daycare</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right.
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

          {/* Better Paws Pet Grooming Service */}
          <div className="col-md-4 d-flex align-self-stretch px-4 animate-service">
            <div className="service-card">
              <div className="service-icon d-flex align-items-center justify-content-center">
                <span className="flaticon-grooming"></span>
              </div>
              <div className="service-body">
                <h3 className="service-title">Better Paws Pet Grooming</h3>
                <p>
                  Treat your pet to the best grooming experience at Better Paws!
                  Our expert groomers ensure your furry friend looks their best
                  with services like haircuts, bathing, and nail trimming.
                  Pamper your pet with love and care, and leave them feeling
                  fresh and happy!
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
