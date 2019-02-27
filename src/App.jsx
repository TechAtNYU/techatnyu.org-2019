import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import Constants from './Constants';
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
                        <li><IndexLink  title="home" activeClassName="active" to="/">home</IndexLink></li>
                        <li><IndexLink  title="about" activeClassName="active" to="/about">about</IndexLink></li>
                        <li><IndexLink  title="faq" activeClassName="active" to="/faq">faq</IndexLink></li>
                        <li><a href= {Constants.links.medium} target="_blank">blog</a></li>
                        {/*<li><a href= {Constants.links.calendar} target="_blank">calendar</a></li>*/}
                        {/*<li><a href= {Constants.links.rsvp} target="_blank">rsvp</a></li>*/}
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
            <Router onUpdate ={() => window.scrollTo(0,0)} history={hashHistory}>
                <Route path="/" component = {Container}>
                    <IndexRoute component={Home} />
                    <Route path='about' component={About} />
                    <Route path = 'faq' component={FAQ} />
                    {/*<Route path = 'jobs' component={Jobs} />*/}
                    <Route path = 'library' component={Library} />
                    <Route path = 'policy' component={Policy} />
                    <Route path = '*' component={Constants.notFound} />
                </Route>
            </Router>
        )
    }
}

export default App;
