import React from "react";

const NewsItemContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="flex flex-col md:flex-row bg-[#131414] p-5 rounded-xl hover:shadow-zinc-700 shadow-md transition-[box-shadow] hover:cursor-pointer group">
      {children}
    </article>
  );
};

export default NewsItemContainer;
