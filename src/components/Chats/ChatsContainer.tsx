import { sendMessageAC, updateNewMessageAC } from '../../redux/chats-reducer';
import Chats from './Chats';
import { connect } from 'react-redux';
import { AppStateType, AppDispatchType } from '../../redux/redux-store';


// type ChatsPropsType = {
//     chatsPage: ChatsPageType
//     dispatch: (action: ActionsTypes) => void
// }

// function ChatsContainer(props: ChatsPropsType) {

//     const state = props.chatsPage

//     let onSendNewMessageClick = () => {
//         props.dispatch(sendMessageAC())
//     }

//     let onNewMessageChange = (body: any) => {
//         props.dispatch(updateNewMessageAC(body));
//     }

//     return <Chats state={state} onSendNewMessageClick={onSendNewMessageClick}
//         onNewMessageChange={onNewMessageChange} />
// }

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