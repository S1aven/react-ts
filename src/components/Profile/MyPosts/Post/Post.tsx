import React from 'react';
import s from "./Post.module.css";
import {PostType} from "../../../../redux/store";

type postPropsType = PostType

export const Post: React.FC<postPropsType> = (props) => {
  return (
    <div className={s.item}>
      <img alt={'avatar'} src={'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150'}/>
      <div>{props.post}</div>
      <div>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
};