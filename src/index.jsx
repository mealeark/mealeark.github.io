import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouter from './components/App.jsx';

ReactDOM.render(<Router><AppWithRouter /></Router>, document.getElementById('app'));