import React from 'react';
import { Route } from 'react-router-dom';


//import components
import Navigation from './components/Navigation/Navigation';

import ChatsContainer from './components/Chats/ChatsContainer';
import PostsContainer from './components/Posts/PostsContainer';
// import News from './components/News/News';
// import Music from './components/Music/Music';
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
            {/* <Route path={'/news'} render={() => <News />} />
            <Route path={'/music'} render={() => <Music />} />
            <Route path={'/setting'} render={() => <Setting />} />
            <Route path={'/other'} render={() => <Other />} /> */}
        </div>
    );
}

export default App;
