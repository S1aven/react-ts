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
  // addPostCallback: (postText: string) => void
  // addMessageCallback: (messageText: string) => void
  // addNewPostTextCallback: (newPostText: string) => void
  // addNewMessageTextCallback: (newMessageText: string) => void
  renderOnChange: () => void
  subscribe: (renderEntireTree: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

// export enum ACTIONS_TYPE {
//   ADD_POST_CALLBACK = 'ProfilePageExchange/ADD_POST_CALLBACK',
//   ADD_NEW_POST_TEXT_CALLBACK = 'ProfilePageExchange/ADD_NEW_POST_TEXT_CALLBACK',
//   ADD_MESSAGE_CALLBACK = 'DialogsPageExchange/ADD_MESSAGE_CALLBACK',
//   ADD_NEW_MESSAGE_TEXT_CALLBACK = 'DialogsPageExchange/ADD_NEW_MESSAGE_TEXT_CALLBACK',
// }
//
// // export type AddPostCallbackActionType = {
// //   type: 'ADD_POST_CALLBACK'
// //   postText: string
// // }
// // export type AddPostCallbackActionType = ReturnType<typeof addPostAC>
//
// // export type AddMessageCallbackActionType = {
// //   type: 'ADD_MESSAGE_CALLBACK'
// //   messageText: string
// // }
// // export type AddMessageCallbackActionType = ReturnType<typeof addMessageAC>
//
// // export type AddNewMessageTextCallbackActionType = {
// //   type: 'ADD_NEW_MESSAGE_TEXT_CALLBACK'
// //   newMessageText: string
// // }
// // export type AddNewMessageTextCallbackActionType = ReturnType<typeof addNewMessageTextAC>
//
// // export type AddNewPostTextCallbackActionType = {
// //   type: 'ADD_NEW_POST_TEXT_CALLBACK'
// //   newPostText: string
// // }
// // export type AddNewPostTextCallbackActionType = ReturnType<typeof addNewPostTextAC>
//
// export const addPostAC = (post: string) => {
//   return {
//     type: ACTIONS_TYPE.ADD_POST_CALLBACK,
//     payload: {
//       post
//     }
//     // postText: postText
//   } as const
// }
//
// export const addNewPostTextAC = (newPostText: string) => {
//   return {
//     type: ACTIONS_TYPE.ADD_NEW_POST_TEXT_CALLBACK,
//     payload: {
//       newPostText
//     }
//     // newPostText: newPostText
//   } as const
// }
//
// export const addMessageAC = (message: string) => {
//   return {
//     type: ACTIONS_TYPE.ADD_MESSAGE_CALLBACK,
//     payload: {
//       message
//     },
//     // messageText: messageText
//   } as const
// }
//
// export const addNewMessageTextAC = (newMessageText: string) => {
//   return {
//     type: ACTIONS_TYPE.ADD_NEW_MESSAGE_TEXT_CALLBACK,
//     payload: {
//       newMessageText
//     },
//     // newMessageText: newMessageText
//   } as const
// }
//
// export type ActionsTypes =
// // AddPostCallbackActionType
//   ReturnType<typeof addPostAC>
//   |
//   // AddMessageCallbackActionType
//   ReturnType<typeof addMessageAC>
//   |
//   // AddNewMessageTextCallbackActionType
//   ReturnType<typeof addNewMessageTextAC>
//   |
//   // AddNewPostTextCallbackActionType
//   ReturnType<typeof addNewPostTextAC>

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

  // addPostCallback(postText) {
  //   const newPost: PostType = {
  //     id: new Date().getTime(),
  //     post: postText,
  //     likeCount: 0
  //   }
  //   this._state.profilePage.posts.push(newPost)
  //   this._state.profilePage.newPostText = ''
  //
  //   renderOnChange()
  // },

  // addMessageCallback(messageText) {
  //   const newMessage: MessageType = {
  //     id: new Date().getTime(),
  //     message: messageText
  //   }
  //   this._state.dialogsPage.messages.push(newMessage)
  //   this._state.dialogsPage.newMessageText = ''
  //
  //   renderOnChange()
  // },

  // addNewPostTextCallback(newPostText) {
  //   this._state.profilePage.newPostText = newPostText
  //
  //   renderOnChange()
  // },

  // addNewMessageTextCallback(newMessageText) {
  //   this._state.dialogsPage.newMessageText = newMessageText
  //
  //   renderOnChange()
  // },

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

    // switch (action.type) {
    //
    //   case 'ADD_POST_CALLBACK':
    //     const newPost: PostType = {
    //       id: new Date().getTime(),
    //       post: action.postText,
    //       likeCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     renderOnChange()
    //     break
    //
    //   case 'ADD_MESSAGE_CALLBACK':
    //     const newMessage: MessageType = {
    //       id: new Date().getTime(),
    //       message: action.messageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = ''
    //     renderOnChange()
    //     break
    //
    //   case 'ADD_NEW_POST_TEXT_CALLBACK':
    //     this._state.profilePage.newPostText = action.newPostText
    //     renderOnChange()
    //     break
    //
    //   case 'ADD_NEW_MESSAGE_TEXT_CALLBACK':
    //     this._state.dialogsPage.newMessageText = action.newMessageText
    //     renderOnChange()
    //     break
    //
    //   default:
    //     return this._state
    // }
  }

}