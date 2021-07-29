import { sendMessageAC, updateNewMessageAC } from '../../redux/chats-reducer';
import Chats from './Chats';
import { connect } from 'react-redux';
import { AppStateType, AppDispatchType } from '../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.chatsPage
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        onSendNewMessageClick: () => {
            dispatch(sendMessageAC())
        },
        onNewMessageChange: (body: any) => {
            dispatch(updateNewMessageAC(body));
        }
    }
}

const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats);

export default ChatsContainer;