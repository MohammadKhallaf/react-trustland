import React from "react";
import Layout from "./layout";
import Home from "./pages/Home";

function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
