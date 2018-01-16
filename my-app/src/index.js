import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, HashRouter} from "react-router-dom";

import { Toolbar } from './Components/toolbar'

//import createBrowserHistory from 'history/createBrowserHistory'
//const history = createBrowserHistory()
//You can put this history in an an attribute on BrowserRouter, but I think BrowserRouter
//handles the history component for you.

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
