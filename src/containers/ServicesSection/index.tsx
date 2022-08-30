import React from "react";
import ServiceCard from "../../components/ServiceCard";

import peopleIcon from "@img/solutions/people.svg";
import shieldIcon from "@img/solutions/shield.svg";
import trendingUpIcon from "@img/solutions/trending-up.svg";
import codeIcon from "@img/solutions/code.svg";
import keyboardIcon from "@img/solutions/keyboard-open.svg";

const ServicesSection = (): JSX.Element => {
  return (
    <section className="bg-black py-5">
      <div className="bg-white rounded-3xl container-spacing ">
        <div className="p-5 grid  md:grid-cols-2 grid-rows-3 gap-4">
          <div className="header__line">
            <h3 className="font-bold text-3xl">الخدمات والحلول</h3>
            <p>نقدم خدمات وحلول احترافية في مجال الأمن السيبراني</p>
          </div>
          <ServiceCard
            title="الفريق الأحمر"
            description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة
        بالأمان"
            icon={peopleIcon}
          />
          <ServiceCard
            title="تقييم الضعف"
            description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة
        بالأمان"
            icon={trendingUpIcon}
          />
          <ServiceCard
            title="المصادر الأمنية"
            description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة
        بالأمان"
            icon={shieldIcon}
          />
          <ServiceCard
            title="مراجعة كود المصدر"
            description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة
        بالأمان"
            icon={codeIcon}
          />
          <ServiceCard
            title="فحص الموقع والجوال"
            description="مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة
        بالأمان"
            icon={keyboardIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
