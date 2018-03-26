import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import SearchApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchApp />, document.getElementById('root'));
registerServiceWorker();
