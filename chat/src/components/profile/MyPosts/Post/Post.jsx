import React from "react";
import style from "./post.module.scss"

export const Post = (props) => {
    return (
        <div className={style.postsItem}>
          <div className={style.postsItemAvatar}></div>
          <div className={style.postsItemMessage}>{props.message}</div>
          <div className={style.postsItemLikeCount}>like:{props.likeCount}</div>
        </div>
    )
}