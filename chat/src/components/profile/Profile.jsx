import React from 'react';
import styles from'./profile.scss'
import { Post } from './MyPosts/Post/Post';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
 return (
  <div className={styles.content}>
    <div className={styles.contentMain}>
    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div className={styles.contentUser}>
    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
        <div className={styles.contentUserInfo}></div>
    </div>
    <div>
      <MyPosts />
    </div>
  </div>
 )
}