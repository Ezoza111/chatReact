import React from 'react';
import styles from'./profile.module.scss'

export const Profile = () => {
 return (
  <div className={styles.content}>
    <div className={styles.contentMain}>
        <img className={styles.contentMainPhoto} src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'></img>
    </div>
    <div className={styles.contentUser}>
        <img className={styles.contentPhoto} src='https://img.freepik.com/free-photo/little-grey-kitten-with-blue-eyes-lies-on-the-grey-couch_8353-7261.jpg?size=626&ext=jpg&ga=GA1.1.984129171.1670063774&semt=ais_hybrid'></img>
        <div className={styles.contentUserInfo}></div>
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={styles.posts}>
        <div className={styles.postsItem}>
          post 1
        </div>
        <div className={styles.postsItem}>
          post 1
        </div>
        <div className={styles.postsItem}>
          post 1
        </div>
      </div>
    </div>
  </div>
 )
}