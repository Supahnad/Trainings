import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
// import BrowsePage from "./pages/BrowsePage";


function App() {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
