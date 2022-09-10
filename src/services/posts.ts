import axios from "axios";
import { Post } from "../features/postSlice";

export const postsApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});


export const getPostById = (id: number) =>
  postsApi.get(`${id}`).then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

export const updatePostByData = ({ id, title, body }: Omit<Post, "userId">) =>
  postsApi
    .patch(
      `${id}`,
      { id, title, body },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });

export const delPostById = (id: number) =>
  postsApi.delete(`${id}`).then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

// Add a request interceptor
postsApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
postsApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
