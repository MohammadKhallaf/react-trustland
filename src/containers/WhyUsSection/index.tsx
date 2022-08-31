import React from "react";
import "./WhyUsSection.css";
import WhyServicesImg from "@img/why-services.png";
import WhyTrustImg from "@img/why-trust.png";
import SectionHeader from "../../components/SectionHeader";
import SectionDiv from "../../components/SectionDiv";

const WhyUsSection = (): JSX.Element => {
  return (
    <SectionDiv className="bg-black text-white py-5 " id="why">
      <header className=" mx-auto flex flex-row gap-6">
        <div className="flex-1">
          <SectionHeader>لماذا ترست لاين؟</SectionHeader>
          <p>
            نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى لرفع
            مستوى الأمن في جميع الكيانات والمؤسسات
          </p>
        </div>
        <div className="flex-1 hidden md:block"> </div>
      </header>
      <div className="grid gap-6 mx-auto auto-rows-fr mt-5 ">
        <main className="contents">
          {/* BOX 1 - security */}
          <div className="bg-[#763BBF]  rounded-2xl p-5 why__box-1 col-start-1 col-end-2 row-start-1 row-span-3">
            <div className="mt-8 mr-10 relative z-[1]">
              <p className="font-bold text-xl">نقدم مستوى عالي من الحماية.</p>
              <p className="text-xs">تعرف أكثر على دورنا في توفير الحماية</p>
            </div>
          </div>
          {/* BOX 2 - services */}
          <div className="flex-1 bg-[#51B4FF]   rounded-2xl py-5 pr-5  col-start-1 col-end-2 why__box-2 md:col-start-2 md:col-end-3 md:row-start-1 row-span-4">
            <div>
              <p className="font-bold text-3xl">نقدم خدمات فعالة.</p>
              <p className="font-bold text-md">
                نسعى لتقليل المخاطر على مستوى المؤسسات
              </p>
            </div>
            <div>
              <img src={WhyServicesImg} alt="" className="mr-auto" />
            </div>
          </div>
          {/* BOX 3 - trusted */}
          <div className="flex-1 bg-[#152F4B]  rounded-2xl py-5 pr-5   why__box-3 col-start-1 col-end-2 row-span-4">
            <div>
              <img src={WhyTrustImg} alt="" />
            </div>
            <div>
              <p className="font-bold text-xl">نكون الشريك الموثوق لعملائنا.</p>
              <p className="text-xs">
                نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
              </p>
            </div>
          </div>

          {/* BOX 4 - precede */}
          <div className="bg-[#351D4F]   rounded-2xl p-5 why__box-4 col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-span-3">
            <div className="my-5">
              <p className="font-bold text-xl">
                نتقدم بخطوة على التهديدات السيبرانية ونقاط الضعف.
              </p>
            </div>
          </div>
        </main>
      </div>
    </SectionDiv>
  );
};

export default WhyUsSection;
