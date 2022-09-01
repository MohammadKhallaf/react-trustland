import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components/macro";
import SectionHeader from "../../components/SectionHeader";

import ZidLogo from "@img/clients/zid-logo.png";
import MarsadLogo from "@img/clients/marsad-logo.png";
import MonshaatLogo from "@img/clients/monshaat-logo.png";

import prevIcon from "@img/carousel/arrow-right.svg";
import nextIcon from "@img/carousel/arrow-left.svg";
import "swiper/css/navigation";
import SectionDiv from "../../components/SectionDiv";

const NavIcon = styled.img`
  height: 100px;
  &:hover {
  }
`;

const ClientsSection = (): JSX.Element => {
  return (
    <SectionDiv
      className=" px-5 py-16"
      id="clients"
      divClass="md:px-4 px-[1rem]"
    >
      <SectionHeader>عملاؤنا</SectionHeader>
      <div className="flex flex-row">
        <button className="button-prev">
          <NavIcon src={prevIcon} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          effect="cards"
          grabCursor
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          preloadImages={false}
          preventClicks={true}
          slidesOffsetAfter={50}
          breakpoints={{
            500: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <img src={ZidLogo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={MarsadLogo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={MonshaatLogo} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="button-next">
          <NavIcon src={nextIcon} />
        </button>
      </div>
    </SectionDiv>
  );
};

export default ClientsSection;
