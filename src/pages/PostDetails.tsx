import React from "react";
import { useParams } from "react-router-dom";
import NewsItemContainer from "../components/NewsItemContainer";
import SectionDiv from "../components/SectionDiv";
import SectionHeader from "../components/SectionHeader";
import { useGetPostbyIdQuery } from "../services/posts";

const PostDetails = () => {
  const { postId } = useParams();
  const { data, error, isLoading } = useGetPostbyIdQuery(Number(postId));
  if (isLoading) {
    return (
      <SectionDiv id="posts" dir="ltr">
        <SectionHeader>
          <div className="animate-bounce">Post Loading . . . </div>
        </SectionHeader>
      </SectionDiv>
    );
  }
  return (
    <SectionDiv id="posts" dir="ltr">
      <SectionHeader>Post</SectionHeader>
      <div className="flex flex-col gap-5">
        {(isLoading && <>Loading ... </>) ||
          (data && (
            <div className="flex flex-col md:flex-row bg-lightgray p-5 rounded-xl hover:shadow-zinc-700 shadow-md transition-[box-shadow] hover:cursor-pointer group">
              <div className="h-24 aspect-square grid place-items-center text-6xl text-darkGray group-hover:shadow-inner mr-5 pb-3 rounded-lg transition-all duration-300">
                <span className="leading-[5.3rem]">{data.id}</span>
              </div>
              <div className="flex flex-col justify-around gap-5">
                <h4 className="text-mainBlue font-bold text-xl">
                  <span className="opacity-70">User </span>
                  <span>{data.userId}</span>
                </h4>
                <h5 className="text-4xl font-bold text-black">{data.title}</h5>
                <p className="text-lg text-black">{data.body}</p>
              </div>
            </div>
          ))}
      </div>
    </SectionDiv>
  );
};

export default PostDetails;
