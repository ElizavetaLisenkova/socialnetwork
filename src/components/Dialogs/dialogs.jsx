import React from 'react'
import gen_dic from './dialogs.module.css'
import User from './Users/user'
import Messages from './Messages/messages'

const Dialogs = (props) => {

    let newTextElement = React.createRef()
    let addMes = () => {
        props.addMes();
    }
    let updateNewMesText = () => {
        props.updateNewMesText(newTextElement.current.value);
    }
    
    const componentUsers = props.users.map((el) => <User id={el.id} key={el.id} userName={el.userName} />);
    const componentMessage = props.messages.map((el) => <Messages id={el.id} message={el.userMessage} key={el.id} />)
    return (
        <div className={gen_dic.dialogs}>
            <div className={gen_dic.users}>
                {componentUsers}
                <textarea onChange={updateNewMesText} ref={newTextElement} value={props.newTextMes}></textarea>
                <button onClick={addMes}>Отправить</button>
            </div>
            <div className={gen_dic.messages}>
                {componentMessage}
            </div>
        </div>
    )
}



export default Dialogs