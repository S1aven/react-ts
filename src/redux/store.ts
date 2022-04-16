import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {v1} from "uuid";
import {ActionsTypes} from "./action";

let renderOnChange = () => {
  console.log('Hello')
}

export const subscribe = (renderEntireTree: () => void) => {
  renderOnChange = renderEntireTree
}

export type PostType = {
  id: string
  post: string
  likeCount: number
}
export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}
export type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}
export type DialogsPageType = {
  newMessageText: string
  dialogs: DialogType[]
  messages: MessageType[]
}
export type Sidebar = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar?: Sidebar
}

export type StoreType = {
  _state: RootStateType
  renderOnChange: () => void
  subscribe: (renderEntireTree: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

export const Store: StoreType = {
  _state: {
    profilePage: {
      newPostText: '',
      posts: [
        {id: v1(), post: 'Hi, how are you?', likeCount: 15},
        {id: v1(), post: "It's my first post", likeCount: 43},
      ]
    },

    dialogsPage: {
      newMessageText: '',
      dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sacha'},
        {id: v1(), name: 'Sergei'},
      ],

      messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra'},
        {id: v1(), message: 'Yo'},
      ]
    },

    sidebar: {}
  },

  getState() {
    return this._state
  },

  renderOnChange() {
    console.log('Hello')
  },

  subscribe(renderEntireTree: () => void) {
    this.renderOnChange = renderEntireTree
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    renderOnChange()
  },

}