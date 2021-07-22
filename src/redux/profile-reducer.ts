

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
   id: number
   messages: string
   name: string
   like: number
}

type PostsPageType = {
   newPostText: string
   posts: Array<PostType>
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

const intilitionState: PostsPageType = {
   newPostText: '',
   posts: [
      { id: 1, messages: 'care if Harry lost his place on the House Quidditch', name: 'Petr', like: 10 },
      { id: 2, messages: 'What did the Dursleys care if Harry lost his place on ', name: 'Vova', like: 9 },
      { id: 3, messages: 'What did the Dursleys care if Huse Quidditch', name: 'Anna', like: 20 }
   ]
}

const profileReducer = (state = intilitionState, action: ActionsTypes) => {

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