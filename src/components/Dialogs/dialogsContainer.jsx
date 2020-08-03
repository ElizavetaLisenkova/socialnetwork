import React from 'react'
import { addMesActionCreator, updateNewMesTextActionCreator } from '../../Redux/DialogsReducer'
import Dialogs from './dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
    users: state.dialogsPage.dialogUsers,
    messages: state.dialogsPage.dialogMessages,
    newTextMes: state.dialogsPage.newTextMes
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)


export default DialogsContainer;