import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PostType } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import Posts from './Posts';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

type PostContainerType = {
    posts: PostType[]
    isAuth: boolean
}

export class PostContainer extends Component<PostContainerType>{
    render() {
        //@ts-ignore
        return <Posts {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.postsPage.posts,
    }
}
// const AuthRedirectComponent = (props: any) => {
//     if (!props.isAuth) return <Redirect to='/login' />;
//     return <PostContainer {...props} />;
// }

const AuthRedirectComponent = withAuthRedirect(PostContainer)
 //@ts-ignore
const WithUrlContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {})(WithUrlContainerComponent)
