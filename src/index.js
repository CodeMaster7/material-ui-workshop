import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// ===== THESE ARE FOR CHANGING YOUR THEME TYPE (LIGHT (default), DARK, OR CUSTOM) ===== //
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

ReactDOM.render(

    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>

, document.getElementById('root'));
registerServiceWorker();
