import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers/counter'

const store = createStore(reducer)

store.subscribe(() => console.log("State updated!", store.getState()))

store.dispatch({
    type: 'INCREMENT'
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
