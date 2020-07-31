import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";


let store = {
    state: {
        profilePage: {
            posts: [
                { id: 1, mes: "Приветики, я зарегалась ура" },
                { id: 2, mes: "Публикую второй пост, все заебись" },
            ],
            newTextPost: ""

        },

        dialogsPage: {

            dialogUsers: [
                { id: 1, userName: 'Liza' },
                { id: 2, userName: 'Sveta' },
            ],

            dialogMessages: [
                { userMessage: "hello" },
                { userMessage: "you disappointed me, Evgeniy" },

            ],
            newTextMes: ""
        },
    },
    rerenderTree() {
        console.log('')
    },
    subscribe(renderFunc) {
        this.rerenderTree = renderFunc;
    },
    dispatch(action) {
        this.state.profilePage = ProfileReducer(this.state.profilePage, action);
        this.state.dialogsPage = DialogsReducer(this.state.dialogsPage, action);

        this.rerenderTree(this.state);

    },
}


export default store;