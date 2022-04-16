import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePageType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
  onPostChange: (text: string) => void
  addPost: () => void
  profilePage: ProfilePageType
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

  const postElements = props.profilePage.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount}/>)

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onPostChange(e.currentTarget.value)
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
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
