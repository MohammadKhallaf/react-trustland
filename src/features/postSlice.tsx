import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: Post[] = [];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// export const { get, post, delete } = postSlice.actions

export default postSlice.reducer;
