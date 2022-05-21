import {v1} from "uuid";
import {ACTIONS_TYPE, ActionsTypes} from "./action";

export type PhotosType = {
  small: string
  large: string
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type ProfileType = {
  aboutMe: string
  userId: number
  lookingForAJob: string
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}
export type PostType = {
  id: string
  post: string
  likeCount: number
}
export type ProfilePageType = {
  posts: PostType[]
  newPostText: string
  profile: null | ProfileType
}

const initialState: ProfilePageType = {
  newPostText: '',
  profile: null,
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
        newPostText: '',
        posts: [...state.posts, newPost],
      }

    case ACTIONS_TYPE.ADD_NEW_POST_TEXT_CALLBACK:
      return {
        ...state,
        ...action.payload
      }

    case ACTIONS_TYPE.SET_USER_PROFILE_CALLBACK:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}