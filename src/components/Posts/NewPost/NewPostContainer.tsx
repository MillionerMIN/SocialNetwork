import { connect } from 'react-redux';
import { addPostAC} from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { NewPost } from './NewPost';

const mapStateToProps = (state: AppStateType) => {
    return {
        message: state.postsPage.newPostText
    }
}

const NewPostContainer = connect(mapStateToProps, { addPostAC })(NewPost);

export {
    NewPostContainer
}