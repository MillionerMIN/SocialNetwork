import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StoreType } from './redux/state';

//import components
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import Chats from './components/Chats/Chats';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Setting from './components/Setting/Setting';
// import Other from './components/Other/Other';




type AppPropsType = {
    store: StoreType

}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState();
    return (<BrowserRouter>
        <div>
            <Navigation />
            <Route path={'/posts'} render={() => <Posts postsPage={state.postsPage}
                dispatch={props.store.dispatch.bind(props.store)} />} />
            <Route path={'/chats'} render={() => <Chats chatsPage={state.chatsPage}
            dispatch={props.store.dispatch.bind(props.store)} />} />
            {/* <Route path={'/news'} render={() => <News />} />
            <Route path={'/music'} render={() => <Music />} />
            <Route path={'/setting'} render={() => <Setting />} />
            <Route path={'/other'} render={() => <Other />} /> */}

        </div>
    </BrowserRouter>
        );
}

        export default App;
