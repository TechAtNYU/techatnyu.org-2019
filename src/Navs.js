/**
 * Created by adisanarula on 2/28/17.
 */
import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'

const constantLinks = {
    facebook: "https://www.facebook.com/TechatNYU/",
    twitter: "https://twitter.com/techatnyu",
    medium: "https://medium.com/@TechatNYU",
    instagram: "https://www.instagram.com/techatnyu/",
}; 

var Header = React.createClass ({

    render: function () {
        return(
            <nav className="navbar-header">
                <div className="navbar-content">
                    <ul>
                        <li><a href="index.html">home</a></li>
                        <li ><a href="about.html">about</a></li>
                        <li><a href="faq.html">faq</a></li>
                        <li><a href="jobs.html">jobs</a></li>
                        <li><a href="library.html">library</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return(
            <div>
                <hr></hr>
                <div id="footer-content">
                    <div id="copyright"> ©Tech@NYU, 2016 </div>
                    <div id="social-handles">
                        <a href = {constantLinks.facebook} target="_blank">Facebook</a>
                        <a href= {constantLinks.twitter} target="_blank">Twitter</a>
                        <a href= {constantLinks.medium} target="_blank">Medium</a>
                        <a href= {constantLinks.instagram} target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
        );
    }
});

const Navigation = {
    header:Header,
    footer: Footer
}

export default Navigation;