const ADD_MES = "ADD_MES"
const UPDATE_NEW_MES_TEXT = "UPDATE_NEW_MES_TEXT"


export let addMesActionCreator = () => ({type: ADD_MES})
export let updateNewMesTextActionCreator = (text) => ({type: UPDATE_NEW_MES_TEXT, newMesText: text})


let DialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MES:
            let newMes = {userMessage: state.newTextMes};
            state.dialogMessages.push(newMes);
            return state;
        case UPDATE_NEW_MES_TEXT:
            state.newTextMes = action.newMesText;
            return state;
        default:
            return state;
    }
}

export default DialogsReducer;