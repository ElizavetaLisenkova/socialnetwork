import React from 'react'
import gen_dic from './dialogs.module.css'
import Users from './Users/users'
import Messages from './Messages/messages'




const Dialogs = (props) => {
    const componentUsers = props.state.dialogUsers.map((el) => <Users id={el.id} userName={el.userName} />);
    const componentMessage = props.state.dialogMessages.map((el) => <Messages message={el.userMessage} />)
    return (
        
        <div className={gen_dic.dialogs}>
            <div className={gen_dic.users}>
                {componentUsers}
                <textarea></textarea>
                <button>Отправить</button>
            </div>
            <div className={gen_dic.messages}>
                {componentMessage}
            </div>

        </div>
    )
}



export default Dialogs