import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VerticalNavApp from './Components/VerticalNavBar';
import * as serviceWorker from './serviceWorker';
import AppTheme from './StyleTheme';
import {MuiThemeProvider} from '@material-ui/core/styles';

console.log(AppTheme);
ReactDOM.render(<MuiThemeProvider theme={AppTheme}><VerticalNavApp /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
