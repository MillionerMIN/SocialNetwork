

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

const profileReducer = (state = intilitionState, action: ActionsTypes): PostsPageType => {

   switch (action.type) {
      case ADD_POST: 
         return {
            ...state,
            posts: [...state.posts, { id: new Date().getTime(), messages: state.newPostText, name: '1',like: 0 }],
            newPostText: '',
         }  
      case UPDATE_NEW_POST_TEXT: 
         return { ...state,
            newPostText: action.newText,
         };
      default: {
         return state;
      }
   }
}

export const addPostAC = () => ({ type: ADD_POST} as const)

export const updateNewPostTextAC = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText } as const)

export default profileReducer