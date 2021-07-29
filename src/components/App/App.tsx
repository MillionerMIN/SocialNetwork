import React from 'react';
import { Route } from 'react-router-dom';


//import components
import Navigation from '../Navigation/Navigation';

import ChatsContainer from '../Chats/ChatsContainer';
import PostsContainer from '../Posts/PostsContainer';
import UsersContainer from '../Users/UsersContainer';
// import News from './components/News/News';
// import Setting from './components/Setting/Setting';
// import Other from './components/Other/Other';
// import { StoreType } from './redux/store';

// type AppPropsType = {
//     state: AppStateType
// }

const App = () => {

    // const state = props.state;
    return (
        <div>
            <Navigation />
            <Route path={'/posts'} render={() => <PostsContainer />} />
            <Route path={'/chats'} render={() => <ChatsContainer />} />
            {/* <Route path={'/news'} render={() => <News />} /> */}
            <Route path={'/users'} render={() => <UsersContainer />} />
            {/* <Route path={'/setting'} render={() => <Setting />} />
            <Route path={'/other'} render={() => <Other />} /> */}
        </div>
    );
}

export default App;
