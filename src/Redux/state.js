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
            ]
        },
    },
    rerenderTree(){
        console.log('')
    },
    addPost() {
        let newPost = { id: 3, mes: this.state.profilePage.newTextPost };
        this.state.profilePage.posts.push(newPost);
        this.rerenderTree(this.state);
    },
    updateNewPostText(newPostText) {
        this.state.profilePage.newTextPost = newPostText;
        this.rerenderTree(this.state);
    },
    subscribe(renderFunc) {
        this.rerenderTree = renderFunc;
    }
}

export default store;