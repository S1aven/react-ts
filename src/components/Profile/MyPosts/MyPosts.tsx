import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionsTypes, addNewPostTextAC, addPostAC, PostType} from "../../../redux/state";

type MyPostsPropsType = {
  newPostText: string
  posts: PostType[]
  // addPostCallback: (postText: string) => void
  dispatch: (action: ActionsTypes) => void
  // addNewPostTextCallback: (newPostText: string) => void
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

  const postElements = props.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount}/>)

  const addPost = () => {
      // props.addPostCallback(props.newPostText)
    // props.dispatch({type: "ADD_POST_CALLBACK", postText: props.newPostText})
    props.dispatch(addPostAC(props.newPostText))
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // props.addNewPostTextCallback(e.currentTarget.value)
    // props.dispatch({type: "ADD_NEW_POST_TEXT_CALLBACK", newPostText: e.currentTarget.value})
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
