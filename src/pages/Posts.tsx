import React from "react";
import { Outlet } from "react-router-dom";

import SectionDiv from "../components/SectionDiv";
import SectionHeader from "../components/SectionHeader";

const Posts = () => {
  return (
    <SectionDiv id="posts" dir="ltr" className="bg-gradient-to-b">
      <SectionHeader>Posts</SectionHeader>
      <div>Form</div>
      <Outlet />
    </SectionDiv>
  );
};

export default Posts;
