import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../features/postSlice";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPostbyId: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
    getAllPosts: builder.query<Post[], string>({
      query: () => "posts/",
    }),
  }),
});

// query hooks
export const { useGetPostbyIdQuery, useGetAllPostsQuery } = postAPI;
