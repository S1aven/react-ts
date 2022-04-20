import {addNewPostTextAC, addPostAC} from "../../../redux/action";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootState} from "../../../redux/redux-store";
import {ProfilePageType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

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