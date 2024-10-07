import React from "react";
import { Link } from "react-router-dom";

export const DialogItem = (props) =>{
    let path = "/" + props.id;
    return (
        <Link to={path}>{props.name}</Link>
    )
}