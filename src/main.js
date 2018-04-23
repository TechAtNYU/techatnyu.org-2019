require('../stylesheets/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Apps = () => (
<MuiThemeProvider>
    <App/>
</MuiThemeProvider>    
)


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Apps />,
        document.getElementById('root')
    );
});



