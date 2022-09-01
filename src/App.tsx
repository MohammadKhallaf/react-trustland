import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Posts from "./pages/Posts";

function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
