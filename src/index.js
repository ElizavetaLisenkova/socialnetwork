import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/state'
import * as serviceWorker from './serviceWorker';



let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById("root")
    );
}





rerenderTree(store.state);
store.subscribe(rerenderTree);

serviceWorker.unregister();
