import {addNewPostText, addPost} from "../../../redux/action-thunk";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootState} from "../../../redux/redux-store";
import {ProfilePageType} from "../../../redux/profile-reducer";

type MapStateToPropsType = {
  profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
  addPost: () => void
  addNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}

// export const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//     addPost: () => {
//       dispatch(addPostAC())
//     },
//     onPostChange: (text: string) => {
//       dispatch(addNewPostTextAC(text))
//     }
//   }
// }

export const MyPostsContainer = connect(MapStateToProps,
  {addPost, addNewPostText,})(MyPosts)