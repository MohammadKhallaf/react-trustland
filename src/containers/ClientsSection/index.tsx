import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SectionHeader from "../../components/SectionHeader";

import ZidLogo from "@img/clients/zid-logo.png";
import MarsadLogo from "@img/clients/marsad-logo.png";
import MonshaatLogo from "@img/clients/monshaat-logo.png";

import "swiper/css";
import "swiper/css/navigation";

const ClientsSection = (): JSX.Element => {
  return (
    <section className="bg-blue-400 px-5 py-16">
      <SectionHeader>عملاؤنا</SectionHeader>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation={true}
        >
          <SwiperSlide>
            <img src={ZidLogo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MarsadLogo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MonshaatLogo} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSection;
