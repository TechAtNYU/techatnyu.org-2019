/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router';
import Constants from './Constants';
import {IndexLink} from "react-router";
import Modal from "react-modal"
import axios from "axios"

const colorStyle = {
    color: "#f05158"
};

const jobsURL = 'https://api.tnyu.org/v3/jobs'
class JobsCard extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            modalIsOpen: false,
            data: []
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    render() {
        return (
            <div>
              <div className="jobs-card">
                  <div className="job-content" >
                      <span className="job-title">{this.props.job.attributes.positionTitle}</span><br/>
                      <span> {this.props.job.attributes.positionLevel} </span><br/><br/>
                      <div>Expires At: {this.props.job.attributes.exiresAt.substring(0, this.props.job.attributes.exiresAt.indexOf('T'))}</div>
                  </div>
                  <div className="job-apply">
                      <p> <button className = "job-apply" onClick ={() => {this.openModal()}}> Apply </button> </p>
                  </div>
              </div>
              { this.state.modalIsOpen == true ?
              <div id="myModal" className="modal">
                  <div className="modal-content">
                    <span className="job-title">{this.props.job.attributes.positionTitle}</span><br/>
                    <span> {this.props.job.attributes.positionLevel} </span><br/><br/>
                    <div dangerouslySetInnerHTML={{__html: this.props.job.attributes.description }} />
                    <div>Expires At: {this.props.job.attributes.exiresAt.substring(0, this.props.job.attributes.exiresAt.indexOf('T'))}</div>
                    <button className = "close-modal" onClick = {() => {this.setState({modalIsOpen: false})}}> Close Modal</button>
                  </div>
                </div>
                :
                console.log("Modal is currently closed")
              }
            </div>
              )

              // <!-- Trigger/Open The Modal -->


        // <Modal
        //   isOpen={this.state.modalIsOpen}
        //   onRequestClose = {this.closeModal}
        //   style= {this.state.customStyles}
        //   contentLabel= "Example Modal">
        //
        //     <div className = "page-intro" id  = "page-intro">
        //     <div> {this.props.job.attributes.positionTitle} </div>
        //     <div> Salary: IDK YET</div>
        //     <div dangerouslySetInnerHTML={{__html: this.props.job.attributes.description }} /></div>
        //     <a target="_blank" href = {`${this.props.job.attributes.applicationUrl}`}>
        //         <button> Job Link </button>
        //     </a>
        //
        //     <button onClick = {() => this.closeModal()}> Close </button>
        //
        // </Modal>
        //     </div>

    }
}


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
                    }) : console.log("Unavailable")}
                </div>
                <footer id = "footer">
                    <Constants.footer/>
                </footer>
            </div>
        );
    }
}

export default Jobs;
