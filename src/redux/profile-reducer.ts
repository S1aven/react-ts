import {v1} from "uuid";
import {ACTIONS_TYPE, ActionsTypes} from "./action";

export type PostType = {
  id: string
  post: string
  likeCount: number
}
export type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}

const initialState: ProfilePageType = {
  newPostText: '',
  posts: [
    {id: v1(), post: 'Hi, how are you?', likeCount: 15},
    {id: v1(), post: "It's my first post", likeCount: 43},
  ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {

    case ACTIONS_TYPE.ADD_POST_CALLBACK:
      const newPost: PostType = {
        id: v1(),
        post: state.newPostText,
        // ...action.payload,
        // post: action.postText,
        likeCount: 0
      }
      return {
        ...state,
        newPostText: state.newPostText,
        posts: [...state.posts, newPost]
      }

    case ACTIONS_TYPE.ADD_NEW_POST_TEXT_CALLBACK:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}