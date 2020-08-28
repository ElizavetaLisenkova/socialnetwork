import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleWare from 'redux-thunk'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;