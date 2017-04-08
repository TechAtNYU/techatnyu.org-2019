import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import Navs from './Navs';
import Home from './Home';
import About from './About';
import FAQ from './FAQ';
import Jobs from './Jobs';
import Library from './Library';
import Policy from './Policy';


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
                    <Route path='about' component={About} />
                    <Route path = 'faq' component={FAQ} />
                    <Route path = 'jobs' component={Jobs} />
                    <Route path = 'library' component={Library} />
                    <Route path = 'policy' component={Policy} />
                    <Route path = '*' component={Navs.notFound} />
                </Route>
            </Router>
        )
    }
}

export default App;