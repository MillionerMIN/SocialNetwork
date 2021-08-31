import { applyMiddleware, combineReducers, createStore } from "redux";
import chatsReducer, { ChatActionsTypes } from "./chats-reducer";
import profileReducer, { ProfileActionsTypes } from "./profile-reducer";
import usersReducer from "./users-reducer";
// import sidebarReducer from "./sidebar-reducer";
import { authReducer, AuthActionsTypes } from './auth-reducer';
import thunk, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


const state = combineReducers({
   postsPage: profileReducer,
   chatsPage: chatsReducer,
   usersPage: usersReducer,
   profilePage: profileReducer,
   auth: authReducer,
   form: formReducer,
   // sidebar: sidebarReducer
});

const store = createStore(state, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof state>
export type AppDispatchType = typeof store.dispatch;
export type AppActionType = AuthActionsTypes | ProfileActionsTypes | ChatActionsTypes
export type AppThunkType<ReturnType = void> = ThunkAction<
   ReturnType,
   AppStateType,
   unknown,
   AppActionType
>

export default store;
declare const window: Window &
   typeof globalThis & {
      store: any
   }

window.store = store;