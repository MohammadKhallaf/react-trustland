import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NewsItemContainer from "../components/NewsItemContainer";
import SectionDiv from "../components/SectionDiv";
import SectionHeader from "../components/SectionHeader";
import { useGetAllPostsQuery } from "../services/posts";

const Posts = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllPostsQuery("");
  return (
    <SectionDiv id="posts" dir="ltr">
      <SectionHeader>Posts</SectionHeader>
    
      <div className="flex flex-col gap-5">
        {(isLoading && (
          <NewsItemContainer>
            <div className="h-24 aspect-square grid place-items-center text-6xl text-white mr-5 pb-3 rounded-lg duration-300 animate-pulse">
              <span className="leading-[5.3rem]">0</span>
            </div>
            <div className="flex flex-col justify-around">
              <h4 className="text-mainBlue font-bold text-xl">
                <span className="opacity-70">User </span>
                <span>0</span>
              </h4>
              <h5 className="text-xl font-bold text-lightGray">Loading</h5>
              <p className="text-sm text-darkGray line-clamp-2">Loading</p>
            </div>
          </NewsItemContainer>
        )) ||
          (data &&
            data.map((item) => {
              return (
                <div key={item.id} onClick={() => navigate("./" + item.id)}>
                  <NewsItemContainer>
                    <div className="h-24 aspect-square grid place-items-center text-6xl text-white group-hover:ring mr-5 pb-3 rounded-lg transition-all duration-300">
                      <span className="leading-[5.3rem]">{item.id}</span>
                    </div>
                    <div className="flex flex-col justify-around">
                      <h4 className="text-mainBlue font-bold text-xl">
                        <span className="opacity-70">User </span>
                        <span>{item.userId}</span>
                      </h4>
                      <h5 className="text-xl font-bold text-lightGray">
                        {item.title}
                      </h5>
                      <p className="text-sm text-darkGray line-clamp-2">
                        {item.body}
                      </p>
                    </div>
                  </NewsItemContainer>
                </div>
              );
            }))}
      </div>
    </SectionDiv>
  );
};

export default Posts;
