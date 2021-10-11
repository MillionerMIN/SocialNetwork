import React from "react";
import { Redirect, Route, Switch } from "react-router"
import { withSuspense } from "../../hoc/withSuspense";
import { Logo } from "../logo/Logo";
import { ProfilePage } from "../profilePage/ProfilePage";


const ProfileUserContainer = React.lazy(
  () => import('../posts/Sidebar/ProfileUser/ProfileUserContainer')
);
const PostsContainer = React.lazy(() => import('../posts/PostsContainer'));
const ChatsContainer = React.lazy(() => import('../chats/ChatsContainer'));
const LoginContainer = React.lazy(
  () => import('../common/Login/LoginContainer')
);
const UsersContainer = React.lazy(() => import('../users/UsersContainer'));

export const PATH = {
  LOGIN: 'login',
  PROFILE: '/profile',
  POSTS: '/posts',
  CHATS: '/chats',
  USERS: '/users',

}

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Redirect to={PATH.PROFILE} />} />
      <Route path={PATH.PROFILE + '/:userId?'} render={() => <ProfilePage />} />
      <Route path={'/posts'} render={withSuspense(PostsContainer)} />
      <Route path={'/chats'} render={withSuspense(ChatsContainer)} />
      <Route path={'/users'} render={withSuspense(UsersContainer)} />
      <Route path={'/login'} render={withSuspense(LoginContainer)} />
    </Switch>
  );
}