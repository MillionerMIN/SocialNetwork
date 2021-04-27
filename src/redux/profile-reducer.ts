import {ActionsTypes, PostsPageType, PostType} from "./state";

const ADD_POST  = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



const profileReducer = (state: PostsPageType, action: ActionsTypes) => {

   switch (action.type) {
      case ADD_POST: {
         let newPost: PostType = {
            id: new Date().getTime(),
            messages: action.newPostText,
            name: 'Kesha',
            like: 0
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
      }
      case UPDATE_NEW_POST_TEXT: {
         state.newPostText = action.newText;
         return state;
      }
      default: {
         return state;
      }
   }
}

export const addPostAC = (postText: string) => ({ type: ADD_POST, newPostText: postText } as const)

export const updateNewPostTextAC = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText } as const)

export default profileReducer