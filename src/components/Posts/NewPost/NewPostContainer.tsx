import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { AppStateType, AppDispatchType } from '../../../redux/redux-store';
import { NewPost } from './NewPost';

// type NewPostPropsType = {
//     message: string
//     dispatch: (action: ActionsTypes) => void
// }

// export function NewPostContainer(props: NewPostPropsType) {

//     const addPost = () => {
//         props.dispatch(addPostAC(props.message))
//     }

//     const newTextChangeHandler = (newText: string) => {
//         props.dispatch(updateNewPostTextAC(newText))
//     }

//     return <NewPost message={props.message} addPost={addPost} newTextChangeHandler={newTextChangeHandler} />
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        message: state.postsPage.newPostText
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        newTextChangeHandler: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;