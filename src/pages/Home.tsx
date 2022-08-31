import React from "react";
import ClientsSection from "../containers/ClientsSection";
import HeroSection from "../containers/HeroSection";
import NewsSection from "../containers/NewsSection";
import ServicesSection from "../containers/ServicesSection";
import TeamSection from "../containers/TeamSection";
import WhyUsSection from "../containers/WhyUsSection";

const Home = (): JSX.Element => {
  return (
    <>
      <WhyUsSection />
      <ServicesSection />
      <TeamSection />
      <ClientsSection />
      <NewsSection />
    </>
  );
};

export default Home;
