import React from "react";
import HeroSection from "../containers/HeroSection";
import ServicesSection from "../containers/ServicesSection";
import WhyUsSection from "../containers/WhyUsSection";

const Home = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <section>team</section>
      <section>clients</section>
      <section>news</section>
    </>
  );
};

export default Home;
