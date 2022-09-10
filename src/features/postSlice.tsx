import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsApi } from "../services/posts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: PostsState = { posts: [], loading: "idle" };

export const getAllPosts = createAsyncThunk("posts/all", (_, thunkAPI) =>
  postsApi.get("").then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    return response.data;
  })
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
