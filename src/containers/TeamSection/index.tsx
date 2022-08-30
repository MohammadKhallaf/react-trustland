import React from "react";
import codingImg from "@img/teams/coding.png";
import "./TeamSection.css";
const TeamSection = () => {
  return (
    <section className="p-5">
      <div className="grid">
        <div className="col-start-1 col-span-1 teams__pic1"></div>
        <div className="col-start-2 col-end-12 row-start-1 w-full bg-darkGray h-3/4 my-auto rounded-2xl sm:pr-[160px]">
          <div>somffds</div>
        </div>
        <div className="col-start-2 col-span-1 row-start-1 teams__pic2"></div>
      </div>
    </section>
  );
};

export default TeamSection;
