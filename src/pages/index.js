import React, { Fragment } from "react";
import HeroSlider from "./heroslider";
import ServicesSection from "./service";
import WhyChooseUs from "./whychoose";
import CounterSection from "./counterSection";
import FaqSection from "./FaqSection";
import ContactInfo from "./ContactInfo";
import PremiumGroomingService from "./PremiumGroomingService";
import Navbar from "./Navbar ";
import FreeConsultationForm from "./FreeConsultationForm";
import TestimonialSection from "./TestimonialSection";
import Footer from "./footer";

function Index() {
  return (
    <Fragment>
      <>
        <ContactInfo />
        <Navbar />
        {/* END nav */}
        <HeroSlider />
        <PremiumGroomingService />

        <ServicesSection />

        <WhyChooseUs />

        <CounterSection />
        <FaqSection />
        <FreeConsultationForm />
        <TestimonialSection />
        <Footer />
      </>
    </Fragment>
  );
}

export default Index;
