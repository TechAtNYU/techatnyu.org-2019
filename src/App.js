import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'



const Header = () => (
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
)

// const Container = (prop)  => 
// <div>
//     <Navigation.header />
//     {props.children}
// </div> 


class App extends Component {
    render() {
        return (
            <div>
            	<Header />
            </div>
        )
    }
}


const Home = () => <h1> Hello from Home! </h1>

export default App;