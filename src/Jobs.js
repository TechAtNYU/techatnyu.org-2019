/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react'
import Constants from './Constants';

const colorStyle = {
    color: "#f05158"
};

class Jobs extends Component{

    render() {
        return (
            <div>
                <img id="dots" src="/img/dots.png"/>
                <h1 className="page-title">jobs</h1>
                <div className="page-content">
                    <div className="page-intro">
                        Looking for an internship or more work experience in the tech industry?
                        Career opportunities will be posted here and updated reguarly. <br/><br/>
                        If you’re interested in hearing about job opportunities from our sponsors
                        or the companies we host events with, <a href={Constants.links.resumes} target="__blank" style={colorStyle}>drop your resume here </a>!
                    </div>
                </div>
                <div id="job-opps">
                    <img id="dots-2" src="/img/dots.png"/>
                    <div id="employer-contact">If you’re an employer looking to post a job opportunity here, please contact <a href="mailto:bizdev@techatnyu.org" style={colorStyle}>bizdev@techatnyu.org</a>. </div>
                </div>
                <footer id = "footer">
                    <Constants.footer/>
                </footer>
            </div>
        );
    }
}

export default Jobs;

