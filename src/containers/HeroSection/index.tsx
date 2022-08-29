import React from "react";

const HeroSection = (): JSX.Element => {
  return (
    <section className="bg-black text-white h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold">ترست لاين تقدم لأعمالك الحماية</h2>
        <h3 className="text-xs">
          ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول
          الأمن السيبراني.
        </h3>
        <button className="bg-mainBlue px-4 py-1 rounded-full mt-5">
          تواصل معنا
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
