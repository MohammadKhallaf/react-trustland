import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "../components/Icons/DeleteIcon";
import EditIcon from "../components/Icons/EditIcon";
import NewsItemContainer from "../components/NewsItemContainer";
import SectionDiv from "../components/SectionDiv";
import SectionHeader from "../components/SectionHeader";
import { useDeletePostMutation, useGetPostbyIdQuery } from "../services/posts";

const PostDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { postId } = useParams();
  const { data, error, isLoading } = useGetPostbyIdQuery(Number(postId));
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
  if (isLoading) {
    return (
      <SectionDiv id={`post-${postId}`} dir="ltr">
        <div className="animate-bounce text-2xl">Post Loading . . . </div>
      </SectionDiv>
    );
  }
  return (
    <div className="flex flex-col gap-5">
      {(isLoading && <>Loading ... </>) ||
        (data && (
          <div className="flex flex-col md:flex-row bg-lightgray p-5 rounded-xl hover:shadow-zinc-700 shadow-md transition-[box-shadow] hover:cursor-pointer group">
            <div className="h-24 aspect-square grid place-items-center text-6xl text-darkGray group-hover:shadow-inner md:mr-5 pb-3 rounded-lg transition-all duration-300">
              <span className="leading-[5.3rem]">{data.id}</span>
            </div>
            <div className="flex flex-col justify-around gap-5 mt-5 md:mt-auto">
              <h4 className="text-mainBlue font-bold text-xl">
                <span className="opacity-70">User </span>
                <div className="float-right space-x-5">
                  <button className=" text-green-800 hover:scale-110 transition-all duration-200 hover:drop-shadow-lg">
                    <EditIcon />
                  </button>
                  <button
                    className=" text-red-900 hover:scale-110 transition-all duration-200 hover:drop-shadow-lg disabled:text-zinc-300"
                    onClick={() =>
                      deletePost(Number(postId)).then((data) =>
                        console.log(data)
                      )
                    }
                    disabled={isDeleting}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <span>{data.userId}</span>
              </h4>
              <h5 className="text-4xl font-bold text-black">{data.title}</h5>
              <p className="text-lg text-black">{data.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostDetails;
