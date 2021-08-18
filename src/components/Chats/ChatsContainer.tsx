import { sendMessageAC, updateNewMessageAC } from '../../redux/chats-reducer';
import Chats from './Chats';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { Component } from 'react';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { withRouter } from 'react-router';
import { compose } from 'redux';


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

export default compose<React.ComponentType>(
    connect(mapStateToProps, { sendMessageAC, updateNewMessageAC }),
    withRouter,
    withAuthRedirect
)(ChatsContainer);
