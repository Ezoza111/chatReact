import React from "react";
import style from "./dialogs.module.scss"
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Message } from "./Messages/message";


export const Dialogs = () => {
    const DialogItem = (props) =>{
        let path = "" + props.id;
        return (
            <li key={props.id}>
                <Link to={path}>{props.name}</Link>
            </li>
        )
    }
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
    let dialogsItems = dialogs.map(el=><DialogItem id={el.id} name={el.name}/>)
    return (
        <div className={style.dialogs}>
          <div className={style.dialogsItems}>
            <ul>
              {dialogsItems}
            </ul>
          </div>
          <div className={style.dialogsMessages}>
            <Routes>
                
            </Routes>
            <Outlet />
          </div>
        </div>
    )
}