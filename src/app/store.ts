import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postAPI } from "../services/posts";

export const store = configureStore({
  reducer: { posts: postReducer, [postAPI.reducerPath]: postAPI.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
