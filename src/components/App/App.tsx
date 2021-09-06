import React from 'react';
import { Route } from 'react-router-dom';

//import components
import ChatsContainer from '../Chats/ChatsContainer';
import PostsContainer from '../Posts/PostsContainer';
import UsersContainer from '../Users/UsersContainer';
import { Footer } from '../Footer/Footer';
import ProfileUserContainer from '../Posts/Sidebar/ProfileUser/ProfileUserContainer';
import LoginContainer from '../Login/LoginContainer';
import NavigationContainer from '../Navigation/NavigationContainer';

// import News from './components/News/News';
// import Setting from './components/Setting/Setting';
// import Other from './components/Other/Other';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from '../../redux/app-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Spinner } from '../common/Spinner/Spinner';

interface AppPropsType extends React.Component {
    initializeApp: () => void

}
type mapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<AppPropsType & mapStateToPropsType, {}> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Spinner />
        }

        return (
            <div>
                <NavigationContainer />
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
}



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);
