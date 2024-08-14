import React  from "react";
import style from'./sidebar.module.scss';

export const Sidebar = () => {
    return (
        <div className={style.sidebar}>
        <nav>
          <ul>
            <li>
              <a href='#i'>Profile</a>
            </li>
            <li>
              <a href='#8'>Messages</a>
            </li>
            <li>
              <a href='#9'>News</a>
            </li>
            <li>
              <a href='#i'>Music</a>
            </li>
            <li>
              <a href='#'>Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    )
}