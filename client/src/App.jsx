import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./page/home/Home";
import Post from "./page/post/Post";
import Header from "./components/Header/Header";
const App = () => {
  return (

    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
     
  );
};

export default App;
