import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./containers/PostsList";
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
          <Route path="posts" element={<Posts />}>
            <Route index element={<PostsList />} />
            <Route path=":postId" element={<PostDetails />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
