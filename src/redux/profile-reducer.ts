import {
  // ACTIONS_TYPE,
  // ActionsTypes,
  PostType,
  ProfilePageType
} from "./state";
import {v1} from "uuid";
import {ACTIONS_TYPE, ActionsTypes} from "./action";



export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {

    case ACTIONS_TYPE.ADD_POST_CALLBACK:
      const newPost: PostType = {
        id: v1(),
        ...action.payload,
        // post: action.postText,
        likeCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      // renderOnChange()
      return state

    case ACTIONS_TYPE.ADD_NEW_POST_TEXT_CALLBACK:
      // state.newPostText = action.newPostText
      // renderOnChange()
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}