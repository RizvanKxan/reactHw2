import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import Home from "./Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
