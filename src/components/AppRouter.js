import React from 'react';
import {Route, Routes} from "react-router-dom"
import Users from "./Users";
import Posts from "./Posts";

const AppRouter = () => {
  return(
  <Routes>
      <Route path='/users' element={<Users/>}/>
      <Route path='/posts' element={<Posts/>}/>
  </Routes>
  );
};

export default AppRouter;