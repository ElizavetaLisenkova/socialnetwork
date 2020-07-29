let rerenderTree = () => {
    console.log('')
}


let state = {
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
};


export let addPost = () => {
    let newPost = {id: 3, mes: state.profilePage.newTextPost};
    state.profilePage.posts.push(newPost);
    rerenderTree(state);
}

export let updateNewPostText = (newPostText) => {
    state.profilePage.newTextPost = newPostText;

    rerenderTree(state);

}

export const subscribe = (renderFunc) => {
    rerenderTree = renderFunc;
}

export default state