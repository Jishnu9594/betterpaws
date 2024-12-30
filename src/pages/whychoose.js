import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb" id="facts">
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
              <h2 className="mb-4">Why Choose Better Paws?</h2>
            </div>
            <div className="row">
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-user-md"></span>
                </div>
                <div className="text pl-3">
                  <h4>Expert Groomers</h4>
                  <p>
                    Our team of certified and experienced groomers specializes
                    in all breeds of pets, ensuring a safe and professional
                    grooming experience tailored to your pet’s specific needs.
                  </p>
                </div>
              </div>
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paw"></span>
                </div>
                <div className="text pl-3">
                  <h4>Pet-Friendly Environment</h4>
                  <p>
                    Our grooming facility is designed to provide a calm and
                    stress-free environment, with dedicated spaces equipped with
                    the latest grooming tools and equipment.
                  </p>
                </div>
              </div>
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-heartbeat"></span>
                </div>
                <div className="text pl-3">
                  <h4>Health-Focused Grooming</h4>
                  <p>
                    Grooming is not just about appearance—it’s about the health
                    and well-being of your pet. Our services include thorough
                    coat cleaning, skin care, nail trimming, ear cleaning, and
                    more, all while ensuring your pet’s comfort.
                  </p>
                </div>
              </div>
              <div className="col-md-6 services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-stethoscope"></span>
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
