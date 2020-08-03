const ADD_MES = "ADD_MES"
const UPDATE_NEW_MES_TEXT = "UPDATE_NEW_MES_TEXT"


export let addMesActionCreator = () => ({type: ADD_MES})
export let updateNewMesTextActionCreator = (text) => ({type: UPDATE_NEW_MES_TEXT, newMesText: text})


let InitialState ={
    
    dialogUsers: [
        { id: 1, userName: 'Liza' },
        { id: 2, userName: 'Sveta' },
    ],

    dialogMessages: [
        { userMessage: "hello" },
        { userMessage: "you disappointed me, Evgeniy" },

    ],
    newTextMes: ""
};

let DialogsReducer = (state=InitialState, action) => {
    switch(action.type) {
        case ADD_MES: {
            let stateCopy = {...state}
            stateCopy.newMesText = {...state.newMesText}
            let newMes = {userMessage: stateCopy.newTextMes};
            stateCopy.dialogMessages.push(newMes);
            return stateCopy;
        }
        case UPDATE_NEW_MES_TEXT:{
            let stateCopy = {...state}
            stateCopy.posts = {...state.posts}
            stateCopy.newTextMes = action.newMesText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default DialogsReducer;