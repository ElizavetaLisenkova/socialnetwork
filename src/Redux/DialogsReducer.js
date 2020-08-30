const ADD_MES = "ADD_MES"
const UPDATE_NEW_MES_TEXT = "UPDATE_NEW_MES_TEXT"


export let addMesActionCreator = () => ({ type: ADD_MES })
export let updateNewMesTextActionCreator = (text) => ({ type: UPDATE_NEW_MES_TEXT, newMesText: text })


let InitialState = {

    dialogUsers: [
        { id: 1, userName: 'Liza' },
        { id: 2, userName: 'Vova' },
    ],

    dialogMessages: [
        { id: 1, userMessage: "hello" },
        { id: 2, userMessage: "you disappointed me, Evgeniy" },

    ],
    newTextMes: ""
};

let DialogsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_MES: {
            return {
                ...state,
                dialogMessages: [...state.dialogMessages, { id: 3, userMessage: state.newTextMes }]
            }
        }
        case UPDATE_NEW_MES_TEXT: {
            return {
                ...state,
                posts: { ...state.posts },
                newTextMes: action.newMesText
            }
        }
        default:
            return state;
    }
}

export default DialogsReducer;