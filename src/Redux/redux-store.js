import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});
let store = createStore(reducers);

export default store;