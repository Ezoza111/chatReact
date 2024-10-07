import React from "react";
import { Link } from "react-router-dom";

export const DialogsItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return (
        <Link to={path}>{props.name}</Link>
    )
}