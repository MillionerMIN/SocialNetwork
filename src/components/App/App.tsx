import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

//import components

import { Footer } from '../Footer/Footer';

import NavigationContainer from '../Navigation/NavigationContainer';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from '../../redux/app-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Spinner } from '../common/Spinner/Spinner';
import { withSuspense } from '../../hoc/withSuspense';

//lazy import

const ProfileUserContainer = React.lazy(
  () => import('../Posts/Sidebar/ProfileUser/ProfileUserContainer')
);
const PostsContainer = React.lazy(() => import('../Posts/PostsContainer'));
const ChatsContainer = React.lazy(() => import('../Chats/ChatsContainer'));
const LoginContainer = React.lazy(() => import('../Login/LoginContainer'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer'));

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
        {/* <Route path={'/news'} render={() => <News />} /> */}
        <Route path={'/users'} render={withSuspense(UsersContainer)} />
        <Route path={'/login'} render={withSuspense(LoginContainer)} />
        {/* <Route path={'/setting'} render={() => <Setting />} />
            <Route path={'/other'} render={() => <Other />} /> */}
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
