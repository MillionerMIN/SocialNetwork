import { combineReducers, createStore } from "redux";
import chatsReducer from "./chats-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
// import sidebarReducer from "./sidebar-reducer";


const state = combineReducers({
   postsPage: profileReducer,
   chatsPage: chatsReducer,
   usersPage: usersReducer,
   // sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof state>
export type AppDispatchType = typeof store.dispatch;

const store = createStore(state);

export default store;