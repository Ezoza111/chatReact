import React  from "react";
import style from'./sidebar.module.scss';
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
      <div className={style.sidebar}>
      <Link to ='/'>Profile</Link>
      <Link to ='/dialogs'>Dialogs</Link>
      <Link to ='/#'>Music</Link>
      <Link to ='/##'>Settings</Link>
     </div>

    )
}