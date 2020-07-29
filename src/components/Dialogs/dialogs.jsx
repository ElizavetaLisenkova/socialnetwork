import React from 'react'
import gen_dic from './dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={gen_dic.dialogs}>
            <div className={gen_dic.users}>
                {props.componentUsers}
                <textarea></textarea>
                <button>Отправить</button>
            </div>
            <div className={gen_dic.messages}>
                {props.componentMessage}
            </div>
        </div>
    )
}



export default Dialogs