import * as serviceWorker from './serviceWorker';
import state from './Redux/state'
import {rerenderTree} from './render'


rerenderTree(state);


serviceWorker.unregister();
