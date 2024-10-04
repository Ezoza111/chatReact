import React from "react";
import { Header } from "../header/Header";
import { Sidebar} from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
 return (
    <div className='app_wrapper'>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="app_wrapperContent">
        <Outlet></Outlet>
      </div>
    </div>
 )
}