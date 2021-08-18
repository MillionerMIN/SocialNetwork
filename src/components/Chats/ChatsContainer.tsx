import { sendMessageAC, updateNewMessageAC } from '../../redux/chats-reducer';
import Chats from './Chats';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { Component } from 'react';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { withRouter } from 'react-router';



class ChatsContainer extends Component {
    render() {
        //@ts-ignore
        return <Chats {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.chatsPage,
    }
}

// const mapDispatchToProps = (dispatch: AppDispatchType) => {
//     return {
//         onSendNewMessageClick: () => {
//             dispatch(sendMessageAC())
//         },
//         onNewMessageChange: (body: any) => {
//             dispatch(updateNewMessageAC(body));
//         }
//     }
// }

const AuthRedirectComponent = withAuthRedirect(ChatsContainer)
//@ts-ignore
const WithUrlContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { sendMessageAC, updateNewMessageAC })(WithUrlContainerComponent);