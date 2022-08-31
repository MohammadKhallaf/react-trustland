import React from "react";
import SectionDiv from "../../components/SectionDiv";
const HeroSection = (): JSX.Element => {
  return (
    <SectionDiv className="text-white h-full grid place-items-center" id="hero">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold">ترست لاين تقدم لأعمالك الحماية</h2>
        <p className="text-xs">
          ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول
          الأمن السيبراني.
        </p>
        <button className="text-md font-bold bg-mainBlue px-4 py-2 rounded-full mt-5">
          تواصل معنا
        </button>
      </div>
    </SectionDiv>
  );
};

export default HeroSection;
