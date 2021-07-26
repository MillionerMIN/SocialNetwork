import React from 'react';
import { Route } from 'react-router-dom';


//import components
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import { AppStateType } from './redux/redux-store';
import ChatsContainer from './components/Chats/ChatsContainer';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Setting from './components/Setting/Setting';
// import Other from './components/Other/Other';
// import { StoreType } from './redux/store';

type AppPropsType = {
    state: AppStateType
}

const App = (props: AppPropsType) => {

    // const state = props.state;
    return (
        <div>
            <Navigation />
            <Route path={'/posts'} render={() => <Posts postsPage={props.state.postsPage} />} />
            <Route path={'/chats'} render={() => <ChatsContainer />} />
            {/* <Route path={'/news'} render={() => <News />} />
            <Route path={'/music'} render={() => <Music />} />
            <Route path={'/setting'} render={() => <Setting />} />
            <Route path={'/other'} render={() => <Other />} /> */}
        </div>
    );
}

export default App;
