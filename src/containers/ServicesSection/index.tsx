import React from "react";
import ServiceCard from "../../components/ServiceCard";

import redTeam from "@img/service-people.svg";

const ServicesSection = (): JSX.Element => {
  return (
    <section className="bg-black pt-5">
      <div className="bg-white rounded-3xl container-spacing ">
        <div className="p-5 grid grid-cols-2 grid-rows-3">
          <div className="header__line">
            <h3 className="font-bold text-3xl">الخدمات والحلول</h3>
            <p>نقدم خدمات وحلول احترافية في مجال الأمن السيبراني</p>
          </div>
          <ServiceCard
            title="الفريق الأحمر"
            description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة
        بالأمان"
            icon={redTeam}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
