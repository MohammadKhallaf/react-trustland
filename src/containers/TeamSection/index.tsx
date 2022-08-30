import React from "react";
import SectionHeader from "../../components/SectionHeader";
import "./TeamSection.css";

const TeamSection = (): JSX.Element => {
  return (
    <section className="py-5">
      <div className="flex container-spacing">
        <div className="teams__pic1 ml-3"></div>
        <div className="teams__pic2 -ml-3"></div>
        <div className="bg-lightGray my-auto rounded-2xl -z-[1] w-full pr-8 h-[250px] pl-[10%] flex flex-col justify-center">
          <SectionHeader>فريقنا</SectionHeader>
          <p>
            في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات
            قادمة.
          </p>
          <p>يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
