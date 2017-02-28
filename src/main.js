require('../stylesheets/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import SimpleSlider from './Carousel';


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <SimpleSlider/>,
        document.getElementById('main-slider')
    );
});



