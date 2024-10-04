import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfilInfo } from './ProfilInfo/ProfilInfo';
import style from "./profile.module.scss"


export const Profile = () => {
 return (
  <div className={style.content}>
      <ProfilInfo />
      <MyPosts />
  </div>
 )
}