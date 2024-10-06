import React from "react";
import style from "./dialogs.module.scss"


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
          <div className={style.dialogsItems}>
            
          </div>
          <div className={style.dialogsMessages}></div>
        </div>
    )
}