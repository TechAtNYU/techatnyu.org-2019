import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('./stylesheets/main.scss');

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
});