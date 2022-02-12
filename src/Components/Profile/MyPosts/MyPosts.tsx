import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>

      <div className={s.content}>
        <Post post={'Hi, how are you?'} likeCount={15}/>
        <Post post={"It's my first post"} likeCount={43}/>
      </div>
    </div>
  );
};
