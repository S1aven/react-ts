import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/profile-reducer";
import {ActionsTypes, addNewPostTextAC, addPostAC} from "../../../redux/action";

type MyPostsPropsType = {
  newPostText: string
  posts: PostType[]
  dispatch: (action: ActionsTypes) => void
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

  const postElements = props.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount}/>)

  const addPost = () => {
    props.dispatch(addPostAC(props.newPostText))
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(addNewPostTextAC(e.currentTarget.value))
  }

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}/>
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
