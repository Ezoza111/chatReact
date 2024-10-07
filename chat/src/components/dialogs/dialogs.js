import React from "react";
import style from "./dialogs.module.scss"
import { Outlet, Route, Routes } from "react-router-dom";
import { Message } from "./Messages/message";
import { DialogsItem } from './DialogItem/DialogItem';


export const Dialogs = (props) => {
    let dialogsItems = props.dialogs.map(el=><DialogsItem id={el.id} name={el.name}/>)
    return (
        <div className={style.dialogs}>
          <div className={style.dialogsItems}>
            <ul className={style.dialogsItemsList}>
              {dialogsItems}
            </ul>
          </div>
          <div className={style.dialogsMessages}>
            <Routes>
                {props.messageArr.map(el=> 
                  <Route path={el.id} element={<Message message={el.message}/>}/>
                )}
            </Routes>
            <Outlet />
          </div>
        </div>
    )
}