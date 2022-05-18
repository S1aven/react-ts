import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

  const postElements = props.profilePage.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount}/>)

  const addPost = () => {
    props.addPost()
  }

  const addNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.addNewPostText(e.currentTarget.value)
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={addNewPostText} value={props.profilePage.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add</button>
        </div>
      </div>

      <div className={s.content}>
        {postElements}
      </div>
    </div>
  );
};
