import { connect } from 'react-redux';

import { AppStateType } from '../../redux/redux-store';
import Posts from './Posts';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.postsPage.posts,
        isAuth: state.auth.isAuth
    }
}
// const mapDispatchToProps = (dispatch: AppDispatchType) => {
//     return {
//         addPost: (postText: string) => {
//             dispatch(addPostAC(postText))
//         },
//         newTextChangeHandler: (newText: string) => {
//             dispatch(updateNewMessageAC(newText))
//         }
//     }
// }

const PostContainer = connect(mapStateToProps, {})(Posts)

export default PostContainer;