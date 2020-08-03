import React from 'react'
import { addMesActionCreator, updateNewMesTextActionCreator } from '../../Redux/DialogsReducer'
import Dialogs from './dialogs'

const DialogsContainer = (props) => {

    let addMes = () => {
        props.dispatch(addMesActionCreator());
        props.dispatch(updateNewMesTextActionCreator(''));
    }
    let updateNewMesText = (text) => {
        props.dispatch(updateNewMesTextActionCreator(text));
    }
    return (
        <Dialogs addMes={addMes} updateNewMesText={updateNewMesText} users={props.state.dialogUsers} messages={props.state.dialogMessages} newTextMes={props.state.newTextMes}/>
    )
}


export default DialogsContainer