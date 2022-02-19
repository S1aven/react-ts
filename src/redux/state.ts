export type PostType  = {
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
}
export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
}
export type Sidebar = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar?: Sidebar
}


export const state: RootStateType = {
  profilePage: {
    posts:  [
      {id: 1, post: 'Hi, how are you?', likeCount: 15},
      {id: 2, post: "It's my first post", likeCount: 43},
    ]
  },

  dialogsPage: {
    dialogs:  [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sacha'},
      {id: 5, name: 'Sergei'},
    ],

    messages:  [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra'},
      {id: 3, message: 'Yo'},
    ]
  },

  sidebar: {}
}