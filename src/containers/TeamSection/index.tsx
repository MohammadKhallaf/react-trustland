import React from "react";
import SectionHeader from "../../components/SectionHeader";
import styles from "./TeamSection.module.css";

const TeamSection = (): JSX.Element => {
  return (
    <div className="flex container-spacing">
      <div className={[styles.pic1, "hidden sm:block ml-3"].join(" ")}></div>
      <div className={[styles.pic2, "hidden sm:block  -ml-3"].join(" ")}></div>
      <div className="bg-lightGray my-auto rounded-2xl -z-[1] w-full pr-8 h-[250px] pl-[10%] flex flex-col justify-center">
        <div className="flex flex-row items-center">
          <SectionHeader>فريقنا</SectionHeader>
          <div className="mr-auto flex flex-row gap-3 items-center">
            <div
              className={[styles.pic1, styles.sm, "sm:hidden"].join(" ")}
            ></div>
            <div
              className={[styles.pic2, styles.sm, "sm:hidden"].join(" ")}
            ></div>
          </div>
        </div>
        <p>
          في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات قادمة.
        </p>
        <p>يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.</p>
      </div>
    </div>
  );
};

export default TeamSection;
