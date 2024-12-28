import React, { useEffect, useState } from "react";

const CounterSection = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [professionalCount, setProfessionalCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [petsHostedCount, setPetsHostedCount] = useState(0);

  useEffect(() => {
    const animateCount = (target, setter) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count += Math.ceil(target / 100); // adjust increment for smoother animation
          setter(count);
        } else {
          clearInterval(interval);
        }
      }, 20);
    };

    animateCount(50, setCustomerCount);
    animateCount(8500, setProfessionalCount);
    animateCount(20, setProductCount);
    animateCount(50, setPetsHostedCount);
  }, []);

  return (
    <section className="counter-section">
      <div className="container">
        <div className="row">
          <div className="counter-item col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="counter-block text-center">
              <div className="counter-value">
                <strong>{customerCount}</strong>
              </div>
              <div className="counter-label">Customers</div>
            </div>
          </div>
          <div className="counter-item col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="counter-block text-center">
              <div className="counter-value">
                <strong>{professionalCount}</strong>
              </div>
              <div className="counter-label">Professionals</div>
            </div>
          </div>
          <div className="counter-item col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="counter-block text-center">
              <div className="counter-value">
                <strong>{productCount}</strong>
              </div>
              <div className="counter-label">Products</div>
            </div>
          </div>
          <div className="counter-item col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="counter-block text-center">
              <div className="counter-value">
                <strong>{petsHostedCount}</strong>
              </div>
              <div className="counter-label">Pets Hosted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
