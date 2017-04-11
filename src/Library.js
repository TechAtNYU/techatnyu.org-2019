/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react';
import Navs from './Navs';


const marginStyle = {
    marginBottom: "10vh"
};

class Libraries extends Component {
    render(){
        return (
            <div id="libraries">
                <div className="library">
                    <div className="lib-title">career</div>
                    <div className="articles">
                        <p>article name</p>
                        <p>article name</p>
                        <p>article name</p>
                    </div>
                </div>
                <div className="library">
                    <div className="lib-title">jobs/companies</div>
                    <div className="articles">
                        <p>article name</p>
                        <p>article name</p>
                        <p>article name</p>
                    </div>
                </div>
                <div className="library">
                    <div className="lib-title">interview prep</div>
                    <div className="articles">
                        <p>article name</p>
                        <p>article name</p>
                        <p>article name</p>
                    </div>
                </div>
            </div>
        );
    }
}

class Library extends Component {

    render() {
        return (
            <div>
                <img id="dots" src="/img/dots.png"/>
                <h1 className="page-title">library</h1>
                <div className="page-content">
                    <div className="page-intro" style={marginStyle}>
                        We want to empower technologists everywhere by creating an open-sourced library of interview guides, tips and
                        skill-sharing for students to use. Here is where we gather what we know about things such as internships,
                        interviewing, and learning in general and offer it as a free resource.
                    </div>
                </div>
                <Libraries/>
                <footer id = "footer">
                    <Navs.footer/>
                </footer>
            </div>
        );
    }
}

export default Library;