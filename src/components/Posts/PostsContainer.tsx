import { connect } from 'react-redux';
import { AppStateType, AppDispatchType } from '../../redux/redux-store';
import { addPostAC } from '../../redux/profile-reducer';
import { updateNewMessageAC } from '../../redux/chats-reducer';
import Posts from './Posts';

const mapStateToProps = (state: AppStateType) => {
    return {
        postsPage: state.postsPage,
        message: state.postsPage.newPostText,

    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        newTextChangeHandler: (newText: string) => {
            dispatch(updateNewMessageAC(newText))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostContainer;