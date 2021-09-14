import profileReducer, { addPostAC, PostsPageType, removePostAC, updateStatusAC } from './profile-reducer';

const state: PostsPageType = {
  newPostText: '',
  posts: [
    {
      id: 1, messages: 'care if Harry lost his place on the House Quidditch',
      avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1888987/pub_5d2c7ff331878200ad93db8d_5d2c8196c31e4900aebf535d/scale_1200',
      name: 'Petr', like: 10
    },
    {
      id: 2, messages: 'What did the Dursleys care if Harry lost his place on ',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsilMFO40hHXJ8wnaDFPIfauqkGrWB5VVoVA&usqp=CAU',
      name: 'Vova', like: 9
    },
    {
      id: 3, messages: 'What did the Dursleys care if Huse Quidditch',
      avatar: 'https://cdna.artstation.com/p/assets/images/images/022/619/308/large/dmitry-gaborak-aka-neverwintered-green-2-3-sm-ava.jpg?1576091791',
      name: 'Anna', like: 20
    }
  ],
  profile: null,
  status: '---',
}

test('length of post should be incremented', () => {
  //1.test data
  let action = addPostAC('Hello')
  //2. action
  let newState = profileReducer(state, action);
  //3. expected
expect(newState.posts.length).toBe(4)
expect(newState.posts[3].messages).toBe('Hello')
});


test('message of new post should be correct', () => {
  let action = addPostAC('Hello')
  let newState = profileReducer(state, action);
  expect(newState.posts[3].messages).toBe('Hello')
});

test('after deleting length of messages should be decrement', () => {
  let action = removePostAC(1)
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2)
});

test('set users status should be correct', () => {
  let action = updateStatusAC('Hi goys')
  let newState = profileReducer(state, action);
  expect(newState.status).toBe('Hi goys')
});