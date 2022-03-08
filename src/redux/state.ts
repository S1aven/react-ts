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
  addPostCallback: (postText: string) => void
  addMessageCallback: (messageText: string) => void
  addNewPostTextCallback: (newPostText: string) => void
  addNewMessageTextCallback: (newMessageText: string) => void
  renderOnChange: () => void
  subscribe: (renderEntireTree: () => void) => void
  getState: () => RootStateType
}

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
  addPostCallback(postText) {
    const newPost: PostType = {
      id: new Date().getTime(),
      post: postText,
      likeCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''

    renderOnChange()
  },
  addMessageCallback(messageText) {
    const newMessage: MessageType = {
      id: new Date().getTime(),
      message: messageText
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''

    renderOnChange()
  },
  addNewPostTextCallback(newPostText) {
    this._state.profilePage.newPostText = newPostText

    renderOnChange()
  },
  addNewMessageTextCallback(newMessageText) {
    this._state.dialogsPage.newMessageText = newMessageText

    renderOnChange()
  },
  renderOnChange() {
    console.log('Hello')
  },
  subscribe (renderEntireTree: () => void) {
    this.renderOnChange = renderEntireTree
  }
}

// export const state: RootStateType = {
//   profilePage: {
//     newPostText: '',
//     posts: [
//       {id: 1, post: 'Hi, how are you?', likeCount: 15},
//       {id: 2, post: "It's my first post", likeCount: 43},
//     ]
//   },
//
//   dialogsPage: {
//     newMessageText: '',
//     dialogs: [
//       {id: 1, name: 'Dimych'},
//       {id: 2, name: 'Andrey'},
//       {id: 3, name: 'Sveta'},
//       {id: 4, name: 'Sacha'},
//       {id: 5, name: 'Sergei'},
//     ],
//
//     messages: [
//       {id: 1, message: 'Hi'},
//       {id: 2, message: 'How is your it-kamasutra'},
//       {id: 3, message: 'Yo'},
//     ]
//   },
//
//   sidebar: {}
// }

// export const addPostCallback = (postText: string) => {
//   const newPost: PostType = {
//     id: new Date().getTime(),
//     post: postText,
//     likeCount: 0
//   }
//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ''
//
//   renderOnChange()
// }
//
// export const addMessageCallback = (messageText: string) => {
//   const newMessage: MessageType = {
//     id: new Date().getTime(),
//     message: messageText
//   }
//   state.dialogsPage.messages.push(newMessage)
//   state.dialogsPage.newMessageText = ''
//
//   renderOnChange()
// }
//
// export const addNewPostTextCallback = (newPostText: string) => {
//   state.profilePage.newPostText = newPostText
//
//   renderOnChange()
// }
//
// export const addNewMessageTextCallback = (newMessageText: string) => {
//   state.dialogsPage.newMessageText = newMessageText
//
//   renderOnChange()
// }