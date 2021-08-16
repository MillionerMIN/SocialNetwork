import React from 'react';
import { Route } from 'react-router-dom';

//import components
import Navigation from '../Navigation/Navigation';
import ChatsContainer from '../Chats/ChatsContainer';
import PostsContainer from '../Posts/PostsContainer';
import UsersContainer from '../Users/UsersContainer';
import { Footer } from '../Footer/Footer';
import ProfileUserContainer from '../Posts/Sidebar/ProfileUser/ProfileUserContainer';
import LoginContainer from '../Login/LoginContainer';

// import News from './components/News/News';
// import Setting from './components/Setting/Setting';
// import Other from './components/Other/Other';

const App = () => {
    return (
        <div>
            <Navigation />
            <Route path={'/profile/:userId?'} render={() => <ProfileUserContainer />} />
            <Route path={'/posts'} render={() => <PostsContainer />} />
            <Route path={'/chats'} render={() => <ChatsContainer />} />
            {/* <Route path={'/news'} render={() => <News />} /> */}
            <Route path={'/users'} render={() => <UsersContainer />} />
            <Route path={'/login'} render={() => <LoginContainer />} />
            {/* <Route path={'/setting'} render={() => <Setting />} />
            <Route path={'/other'} render={() => <Other />} /> */}
            <Footer />
        </div>
    );
}

export default App;
