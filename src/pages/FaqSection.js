import React from "react";

const FaqSection = () => {
  return (
    <section id="faq" className="ftco-section bg-light ftco-faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-md-last">
            <div
              className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
              style={{ backgroundImage: "url(images/image_1.jpg)" }}
            >
              <a
                href="https://youtube.com/shorts/6AHhrg0oKwg?si=oehsM1IKIMSqrBtG"
                className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="fa fa-play"></span>
              </a>
            </div>
            <div className="d-flex mt-3">
              <div
                className="img img-2 mr-md-2"
                style={{ backgroundImage: "url(images/grooming1.jpg)" }}
              ></div>
              <div
                className="img img-2 ml-md-2"
                style={{ backgroundImage: "url(images/image_6.jpg)" }}
              ></div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="heading-section mb-5 mt-5 mt-lg-0">
              <h2 className="mb-3">Frequently Asked Questions</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div
              id="accordion"
              className="myaccordion w-100"
              aria-multiselectable="true"
            >
              {faqData.map((faq, index) => (
                <div className="card" key={index}>
                  <div className="card-header p-0" id={`heading${index + 1}`}>
                    <h2 className="mb-0">
                      <button
                        href={`#collapse${index + 1}`}
                        className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index + 1}`}
                      >
                        <p className="mb-0">{faq.question}</p>
                        <i className="fa" aria-hidden="true"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    className={`collapse ${index === 0 ? "show" : ""}`}
                    id={`collapse${index + 1}`}
                    role="tabpanel"
                    aria-labelledby={`heading${index + 1}`}
                  >
                    <div className="card-body py-3 px-0">
                      {faq.answer.map((item, idx) => (
                        <ol key={idx}>
                          <li>{item}</li>
                        </ol>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "How long does a grooming session take?",
    answer: [
      "A typical grooming session can take anywhere from 1 to 2 hours, depending on the type of grooming your pet requires.",
    ],
  },
  {
    question: "Do I need to make a reservation?",
    answer: [
      "Yes, we recommend scheduling an appointment in advance to ensure your pet receives timely grooming.",
    ],
  },
  {
    question: "What if my pet has special needs?",
    answer: [
      "Our groomers are experienced in handling pets with special needs and will provide personalized care to ensure their comfort and safety.",
    ],
  },
];

export default FaqSection;
