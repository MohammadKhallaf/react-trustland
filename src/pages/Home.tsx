import React from "react";
import HeroSection from "../containers/HeroSection";
import ServicesSection from "../containers/ServicesSection";
import TeamSection from "../containers/TeamSection";
import WhyUsSection from "../containers/WhyUsSection";

const Home = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <TeamSection />
      <section>clients</section>
      <section>news</section>
    </>
  );
};

export default Home;
