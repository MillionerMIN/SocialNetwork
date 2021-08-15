import { applyMiddleware, combineReducers, createStore } from "redux";
import chatsReducer from "./chats-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
// import sidebarReducer from "./sidebar-reducer";
import { authReducer } from './auth-reducer';
import thunk from "redux-thunk";

const state = combineReducers({
   postsPage: profileReducer,
   chatsPage: chatsReducer,
   usersPage: usersReducer,
   profilePage: profileReducer,
   auth: authReducer,
   // sidebar: sidebarReducer
});

const store = createStore(state, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof state>
export type AppDispatchType = typeof store.dispatch;

export default store;
declare const window: Window &
   typeof globalThis & {
      store: any
   }

window.store = store;