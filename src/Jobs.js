/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react'
import Constants from './Constants';

const colorStyle = {
    color: "#f05158"
};


class JobsCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jobs-card">
                <div className="job-content" >
                    <span className="job-title">{this.props.job.title}</span><br/>
                    <span>{this.props.job.paid} | {this.props.job.salary} </span><br/><br/>
                    <div>{this.props.job.description}</div>
                </div>
                <div className="job-apply">
                    <p> APPLY </p>
                </div>
            </div>
        )
    }
}

const placeholder = [{
        title: 'Data Scientist Intern',
        paid: 'Paid',
        salary: '15 hours/week',
        location: 'New York, NY',
        description: 'Description description description description description description description description.',
        link: ''
    },
    {
        title: 'Data Scientist Intern',
        paid: 'Paid',
        salary: '15 hours/week',
        location: 'New York, NY',
        description: 'Description description description description description description description description.',
        link: ''
    },
    {
        title: 'Data Scientist Intern',
        paid: 'Paid',
        salary: '15 hours/week',
        location: 'New York, NY',
        description: 'Description description description description description description description description.',
        link: ''
    },
    {
        title: 'Data Scientist Intern',
        paid: 'Paid',
        salary: '15 hours/week',
        location: 'New York, NY',
        description: 'Description description description description description description description description.',
        link: ''
    }];

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
                        or the companies we host events with, <a href={Constants.links.resumes} target="__blank" style={colorStyle}>drop your resume here </a>! <br/><br/>
                        <div>If you’re an employer looking to post a job opportunity here, please contact <a href="mailto:bizdev@techatnyu.org" style={colorStyle}>bizdev@techatnyu.org</a>. </div>
                    </div>
                </div>
                <div id="jobs-container">
                    {placeholder.map( (obj, index) => {
                        return <JobsCard key={index} job={obj}/>
                    })}
                </div>
                <footer id = "footer">
                    <Constants.footer/>
                </footer>
            </div>
        );
    }
}

export default Jobs;

