import {compose, createStore} from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export {store};
