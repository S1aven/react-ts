import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export type ReduxStoreType = typeof store
export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;