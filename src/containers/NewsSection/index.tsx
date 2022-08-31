import React from "react";
import SectionDiv from "../../components/SectionDiv";
import SectionHeader from "../../components/SectionHeader";
import NewsItem from "./NewsItem";
import NewsImg01 from "@img/news/news-01.png";
import NewsImg02 from "@img/news/news-02.png";
import NewsImg03 from "@img/news/news-03.png";

const newsArr = [
  {
    title:
      "الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية  ",
    description:
      "شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات",
    image: NewsImg01,
  },
  {
    title: "لماذا يعتبر أمان التطبيق مهمًا للأعمال؟  ",
    description:
      "تطبيقات البرمجيات هي مكونات أساسية لنجاح المنظمة. لسوء الحظ ، بينما التطبيق",
    image: NewsImg02,
  },
  {
    title: "حشد الأمن - هل هو بديل للاختراق؟  ",
    description:
      "نمت شعبية برامج الأمن الجماعي إلى الحد الذي وصلت إليه بعض الشركات",
    image: NewsImg03,
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewsSection = (props: Props) => {
  return (
    <SectionDiv className="bg-black text-white" id="news">
      <SectionHeader>الأخبار</SectionHeader>
      <div className="flex flex-col gap-4">
        {newsArr.map((item, idx) => (
          <NewsItem
            key={`${item.title}-${idx}`}
            title={item.title}
            img={item.image}
            description={item.description}
            id={idx}
          />
        ))}
      </div>
    </SectionDiv>
  );
};

export default NewsSection;
