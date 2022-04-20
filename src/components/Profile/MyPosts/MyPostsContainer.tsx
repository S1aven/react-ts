import React from 'react';
import {addNewPostTextAC, addPostAC} from "../../../redux/action";
import {MyPosts} from "./MyPosts";
import StoreContext from '../../../StoreContext';
import {connect} from "react-redux";
import {AppRootState, store} from "../../../redux/redux-store";
import {ProfilePageType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

// export const MyPostsContainer = () => {
//
//   const state = props.store.getState().profilePage;
//
//   const addPost = () => {
//     props.store.dispatch(addPostAC(state.newPostText))
//   }
//
//   const onPostChange = (text: string) => {
//     props.store.dispatch(addNewPostTextAC(text))
//   }
//
//   return (<StoreContext.Consumer>
//       {(store) => {
//
//         const state = store.getState().profilePage;
//
//         const addPost = () => {
//           store.dispatch(addPostAC(state.newPostText))
//         }
//
//         const onPostChange = (text: string) => {
//           store.dispatch(addNewPostTextAC(text))
//         }
//
//         return <MyPosts
//           onPostChange={onPostChange}
//           profilePage={state}
//           addPost={addPost}
//         />}
//       }
//     </StoreContext.Consumer>
//   )
// };

type MapStateToPropsType = {
  profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
  addPost: () => void
  onPostChange: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

export const MapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}

export const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return{
    addPost: () => {
      dispatch(addPostAC())
    } ,
    onPostChange: (text: string) => {
      dispatch(addNewPostTextAC(text))
    }
  }
}

export const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)