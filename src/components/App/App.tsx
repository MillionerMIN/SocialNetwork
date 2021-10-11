import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

//import components

import { Footer } from '../footer/Footer';

import NavigationContainer from '../navigation/NavigationContainer';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from '../../redux/app-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Spinner } from '../common/Spinner/Spinner';
import { withSuspense } from '../../hoc/withSuspense';
import { Routing } from '../routing/Routing';

//lazy import

const ProfileUserContainer = React.lazy(
  () => import('../posts/Sidebar/ProfileUser/ProfileUserContainer')
);
const PostsContainer = React.lazy(() => import('../posts/PostsContainer'));
const ChatsContainer = React.lazy(() => import('../chats/ChatsContainer'));
const LoginContainer = React.lazy(() => import('../common/Login/LoginContainer'));
const UsersContainer = React.lazy(() => import('../users/UsersContainer'));

interface AppPropsType extends React.Component {
  initializeApp: () => void;
}
type mapStateToPropsType = {
  initialized: boolean;
};

class App extends React.Component<AppPropsType & mapStateToPropsType, {}> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Spinner />;
    }

    return (
      <div>
        <NavigationContainer />

        <Routing/>
        
        <Route
          path={'/profile/:userId?'}
          render={() => {
            return (
              <Suspense fallback={<div>...Loading</div>}>
                <ProfileUserContainer />
              </Suspense>
            );
          }}
        />
        <Route path={'/posts'} render={withSuspense(PostsContainer)} />
        <Route path={'/chats'} render={withSuspense(ChatsContainer)} />
        <Route path={'/users'} render={withSuspense(UsersContainer)} />
        <Route path={'/login'} render={withSuspense(LoginContainer)} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
