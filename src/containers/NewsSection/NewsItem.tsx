import React from "react";
import styled from "styled-components/macro";

interface ImgProps {
  url: string;
}
const NewsImgDiv = styled.div<ImgProps>`
  height: 100%;
  max-width: 100%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;

  background-position: 50%;
  background-color: rgba(26, 154, 251, 0.5);
  background-blend-mode: overlay;
`;

interface Props {
  img: string;
  title: string;
  description: string;
  id?: number; //for future fetching
}

const NewsItem: React.FC<Props> = ({ img, title, description }) => {
  return (
    <article className="flex flex-col md:flex-row bg-[#131414] p-5 rounded-xl hover:shadow-zinc-700 shadow-md transition-[box-shadow]">
      <div className="basis-[150px] pb-5 md:pb-0 md:pl-5">
        <NewsImgDiv
          url={img}
          className="rounded-xl shadow-inner mx-auto w-full bg-cover
          md:aspect-square md:w-[150px] md:bg-[size:auto_100%]"
        />
      </div>
      <div className="flex flex-col justify-around max-w-[530px]">
        <h6 className="font-bold">{title}</h6>
        <div className="text-slate-300 font-light text-md">{description}</div>
        <button className="text-mainBlue w-fit">اقرأ المقال &#x219c;</button>
      </div>
    </article>
  );
};

export default NewsItem;
