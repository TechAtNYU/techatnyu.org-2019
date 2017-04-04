import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import Home from './Home';


const Nav = () => (
         <nav className="navbar-header">
                <div className="navbar-content">
                    <ul>
                        <li><IndexLink  activeClassName="active" to="/">home</IndexLink></li>
                        <li><IndexLink  activeClassName="active" to="/about">about</IndexLink></li>
                        <li><IndexLink  activeClassName="active" to="/faq">faq</IndexLink></li>
                        <li><IndexLink  activeClassName="active" to="/jobs">jobs</IndexLink></li>
                        <li><IndexLink  activeClassName="active" to="/library">library</IndexLink></li>
                    </ul>
                </div>
        </nav>
)

const Container = (props) => <div>
    <Nav />
    {props.children}
</div>

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component = {Container}>
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        )
    }
}

export default App;