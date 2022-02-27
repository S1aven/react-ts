import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
  posts: PostType[]
  addPostCallback: (postText: string) => void
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

  const postElements = props.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount}/>)

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPost = () => {
    if(newPostElement.current) {
      props.addPostCallback(newPostElement.current.value)
    }
  }
  console.log(props.posts)

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
