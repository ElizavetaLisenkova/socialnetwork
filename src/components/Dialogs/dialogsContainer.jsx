import { addMesActionCreator, updateNewMesTextActionCreator } from '../../Redux/DialogsReducer'
import Dialogs from './dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
    users: state.dialogsPage.dialogUsers,
    messages: state.dialogsPage.dialogMessages,
    newTextMes: state.dialogsPage.newTextMes,
    
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMes: () => {
            dispatch(addMesActionCreator());
            dispatch(updateNewMesTextActionCreator(''));
        },
        updateNewMesText: (text) => {
            dispatch(updateNewMesTextActionCreator(text));
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);