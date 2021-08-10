import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { AppStateType, AppDispatchType } from '../../../redux/redux-store';
import { NewPost } from './NewPost';

const mapStateToProps = (state: AppStateType) => {
    return {
        message: state.postsPage.newPostText
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        newTextChangeHandler: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export {
    NewPostContainer
}