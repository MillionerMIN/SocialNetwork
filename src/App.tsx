import React from 'react';
import { Route } from 'react-router-dom';


//import components
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import Chats from './components/Chats/Chats';
import { AppStateType, AppDispatchType } from './redux/redux-store';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Setting from './components/Setting/Setting';
// import Other from './components/Other/Other';
// import { StoreType } from './redux/store';

type AppPropsType = {
    state: AppStateType
    dispatch: AppDispatchType
}

const App = (props: AppPropsType) => {

    const state = props.state;
    return (
        <div>
            <Navigation />
            <Route path={'/posts'} render={() => <Posts postsPage={state.postsPage}
                dispatch={props.dispatch} />} />
            <Route path={'/chats'} render={() => <Chats chatsPage={state.chatsPage}
                dispatch={props.dispatch} />} />
            {/* <Route path={'/news'} render={() => <News />} />
            <Route path={'/music'} render={() => <Music />} />
            <Route path={'/setting'} render={() => <Setting />} />
            <Route path={'/other'} render={() => <Other />} /> */}
        </div>
    );
}

export default App;
