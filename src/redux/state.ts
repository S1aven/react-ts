let renderOnChange = () => {
  console.log('Hello')
}

export const subscribe = (renderEntireTree: () => void) => {
  renderOnChange = renderEntireTree
}

export type PostType = {
  id: number
  post: string
  likeCount: number
}
export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
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

// export type AddPostCallbackActionType = {
//   type: 'ADD_POST_CALLBACK'
//   postText: string
// }
export type AddPostCallbackActionType = ReturnType<typeof addPostAC>

// export type AddMessageCallbackActionType = {
//   type: 'ADD_MESSAGE_CALLBACK'
//   messageText: string
// }
export type AddMessageCallbackActionType = ReturnType<typeof addMessageAC>

// export type AddNewMessageTextCallbackActionType = {
//   type: 'ADD_NEW_MESSAGE_TEXT_CALLBACK'
//   newMessageText: string
// }
export type AddNewMessageTextCallbackActionType = ReturnType<typeof addNewMessageTextAC>

// export type AddNewPostTextCallbackActionType = {
//   type: 'ADD_NEW_POST_TEXT_CALLBACK'
//   newPostText: string
// }
export type AddNewPostTextCallbackActionType = ReturnType<typeof addNewPostTextAC>

export const addPostAC = (postText: string) => {
  return {
    type: 'ADD_POST_CALLBACK',
    postText: postText
  } as const
}

export const addMessageAC = (messageText: string) => {
  return {
    type: 'ADD_MESSAGE_CALLBACK',
    messageText: messageText
  } as const
}

export const addNewMessageTextAC = (newMessageText: string) => {
  return {
    type: 'ADD_NEW_MESSAGE_TEXT_CALLBACK',
    newMessageText: newMessageText
  } as const
}

export const addNewPostTextAC = (newPostText: string) => {
  return {
    type: 'ADD_NEW_POST_TEXT_CALLBACK',
    newPostText: newPostText
  } as const
}

export type ActionsTypes =
  // AddPostCallbackActionType
  ReturnType<typeof addPostAC>
  |
  // AddMessageCallbackActionType
  ReturnType<typeof addMessageAC>
  |
  // AddNewMessageTextCallbackActionType
  ReturnType<typeof addNewMessageTextAC>
  |
  // AddNewPostTextCallbackActionType
  ReturnType<typeof addNewPostTextAC>

export const Store: StoreType = {
  _state: {
    profilePage: {
      newPostText: '',
      posts: [
        {id: 1, post: 'Hi, how are you?', likeCount: 15},
        {id: 2, post: "It's my first post", likeCount: 43},
      ]
    },

    dialogsPage: {
      newMessageText: '',
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sacha'},
        {id: 5, name: 'Sergei'},
      ],

      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
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
    switch (action.type) {

      case 'ADD_POST_CALLBACK':
        const newPost: PostType = {
          id: new Date().getTime(),
          post: action.postText,
          likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        renderOnChange()
        break

      case 'ADD_MESSAGE_CALLBACK':
        const newMessage: MessageType = {
          id: new Date().getTime(),
          message: action.messageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        renderOnChange()
        break

      case 'ADD_NEW_POST_TEXT_CALLBACK':
        this._state.profilePage.newPostText = action.newPostText
        renderOnChange()
        break

      case 'ADD_NEW_MESSAGE_TEXT_CALLBACK':
        this._state.dialogsPage.newMessageText = action.newMessageText
        renderOnChange()
        break

      default:
        return this._state
    }
  }

}