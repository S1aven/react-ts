import React from 'react';
import {addNewPostTextAC, addPostAC} from "../../../redux/action";
import {MyPosts} from "./MyPosts";
// import {ReduxStoreType} from "../../../redux/redux-store";
import StoreContext from '../../../StoreContext';

// type MyPostsContainerPropsType = {
//   store: ReduxStoreType
// }

export const MyPostsContainer = () => {

  // const state = props.store.getState().profilePage;
  //
  // const addPost = () => {
  //   props.store.dispatch(addPostAC(state.newPostText))
  // }
  //
  // const onPostChange = (text: string) => {
  //   props.store.dispatch(addNewPostTextAC(text))
  // }

  return (<StoreContext.Consumer>
      {(store) => {

        const state = store.getState().profilePage;

        const addPost = () => {
          store.dispatch(addPostAC(state.newPostText))
        }

        const onPostChange = (text: string) => {
          store.dispatch(addNewPostTextAC(text))
        }

        return <MyPosts
          onPostChange={onPostChange}
          profilePage={state}
          addPost={addPost}
        />}
      }
    </StoreContext.Consumer>
  )
};
