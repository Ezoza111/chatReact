import React from "react";
import { NewPost } from "./NewPost/NewPost";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
    let posts = postsData.map(el => <Post message = {el.message} likeCount={el.likesCount}/>)
    return (
        <div className="myPosts">
         <h3>My Posts</h3>
         <NewPost />
         {posts}
        </div>
    )
}