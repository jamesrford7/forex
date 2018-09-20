import { createStore } from 'redux';

import reducer from './reducers';
import defaultState from './default-state';

const store = createStore(reducer, defaultState);

export default store;
