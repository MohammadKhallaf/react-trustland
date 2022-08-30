import React from "react";
import ClientsSection from "../containers/ClientsSection";
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
      <ClientsSection />
      <section>news</section>
    </>
  );
};

export default Home;
