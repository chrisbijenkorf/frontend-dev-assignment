import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SearchForm from '../src/components/SearchForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchForm />, document.getElementById('root'));
registerServiceWorker();
