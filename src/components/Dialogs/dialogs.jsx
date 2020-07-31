import React from 'react'
import gen_dic from './dialogs.module.css'
import Users from './Users/users'
import Messages from './Messages/messages'
import { addMesActionCreator, updateNewMesTextActionCreator } from '../../Redux/DialogsReducer'

const Dialogs = (props) => {

    let newTextElement = React.createRef()
    let addMes = () => {
        props.dispatch(addMesActionCreator());
        props.dispatch(updateNewMesTextActionCreator(''));
    }
    let updateNewMesText = () => {
        props.dispatch(updateNewMesTextActionCreator(newTextElement.current.value));
    }
    
    const componentUsers = props.state.dialogUsers.map((el) => <Users id={el.id} userName={el.userName} />);
    const componentMessage = props.state.dialogMessages.map((el) => <Messages message={el.userMessage} />)
    return (
        <div className={gen_dic.dialogs}>
            <div className={gen_dic.users}>
                {componentUsers}
                <textarea onChange={updateNewMesText} ref={newTextElement} value={props.state.newTextMes}></textarea>
                <button onClick={addMes}>Отправить</button>
            </div>
            <div className={gen_dic.messages}>
                {componentMessage}
            </div>
        </div>
    )
}



export default Dialogs