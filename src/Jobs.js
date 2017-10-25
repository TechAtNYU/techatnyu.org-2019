/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react'
import Constants from './Constants';
import {IndexLink} from "react-router";
import Modal from "react-modal"
import axios from "axios"
import RaisedButton from 'material-ui/RaisedButton'

const colorStyle = {
    color: "#f05158"
};

const jobsURL = 'https://api.tnyu.org/v3/jobs'
class JobsCard extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            modalIsOpen: false,
            customStyles: {
                content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
              }},
            data: []
        }
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        this.setState({modalIsOpen: false})
    }
    render() {
       
        return (
            <div className="jobs-card">
                <div className="job-content" >
                    <span className="job-title">{this.props.job.attributes.positionTitle}</span><br/>
                    <span> {this.props.job.attributes.positionLevel} </span><br/><br/>
                    <div>{this.props.job.id}</div>
                </div>
                <div className="job-apply">
                    {<RaisedButton onClick = {() => {this.setState({modalIsOpen: true})}} label = "Apply" primary = {true} />}
                </div>       
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose = {this.closeModal}
          style={this.state.customStyles}
          contentLabel= "Example Modal"
            >
            <div> {this.props.job.attributes.positionTitle} </div>
            <div> Salary: IDK YET</div>
            <div> Description: {this.props.job.attributes.description} </div>
            <RaisedButton label = "Job Link" primary = {true} /> 
            <RaisedButton onClick={this.closeModal} label = "close" primary = {true}/>

        </Modal>     
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
    constructor(props){
    super(props)
        this.state = {
            data: []
        }
    }
     componentDidMount(){
         fetch(jobsURL, {
            method:'GET',
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('responseData', responseData)
                this.setState({data: responseData.data })
            })
    }

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
                    {console.log('In render method', this.state.data)}
                    {this.state.data.length !== 0 ? this.state.data.map( (obj, index) => {
                        return <JobsCard key={index} job={obj}/>
                    }) : console.log("")}
                </div>
                <footer id = "footer">
                    <Constants.footer/>
                </footer>
            </div>
        );
    }
}

export default Jobs;

