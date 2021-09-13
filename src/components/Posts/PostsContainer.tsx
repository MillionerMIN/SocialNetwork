import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PostType } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import {Posts} from './Posts';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type PostContainerType = {
    posts: PostType[]
    isAuth: boolean
}

type MSTPType = {
    posts: PostType[]

}

export class PostContainer extends Component<PostContainerType>{
    render() {
        return <Posts {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        posts: state.postsPage.posts
    }
}
// const AuthRedirectComponent = (props: any) => {
//     if (!props.isAuth) return <Redirect to='/login' />;
//     return <PostContainer {...props} />;
// }
export default compose<React.ComponentType>(
    connect(mapStateToProps),
    withRouter,
    withAuthRedirect
)(PostContainer);