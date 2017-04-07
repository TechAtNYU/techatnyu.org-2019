/**
 * Created by adisanarula on 4/7/17.
 */

import React from 'react';

const fontStyle = {
    fontSize: "2vmin"
};

const marginStyle = {
     marginBottom:"10vh"
};

const lineStyle = {
    height: "1px",
    border: "none",
    color: "#f05158",
    backgroundColor: "#f05158",
    marginBottom:"10vh",
    marginLeft: "0"
};

// TODO: How to link to another page via route

const Content = () => (
    <div className="page-content">
        <div className="tech-description">
            Tech@NYU is NYC’s largest community of students interested in technology and its possibilities. We provide spaces to help people ideate, experiment, learn, and build together. <br/><br/>
            Behind the operations of Tech@NYU is the Board, a group of students
            that runs events focused on coding, gaming, design, business, entrepreneurship, and more, to foster a fun and inclusive tech community in NYC. <br/><br/>
            These events are held throughout the academic year and are open to students of all backgrounds. We’d love see you! <br/><br/>
            If you have any questions, head to our <a className="email-us" style={fontStyle} href="faq.html">FAQ</a> or drop us a line at <a className="email-us" href="mailto:hello@techatnyu.org" style={fontStyle}>hello@techatnyu.org</a>.
        </div>
        <div className="events">events</div>
        <div style = {marginStyle}  className="tech-description">
            We host regular get-together in each of six categories: <br/> After Hours, Demo Days, Design Days, Freshman Circuit, Game Day and HackDays. In addition, we host Startup Week every semester.
        </div>
        <hr id="events-line" style={lineStyle}/>
    </div>
)


var About = React.createClass({

    render: function() {
        return (
            <div>
                <h1 className="page-title">about</h1>
                <img id="dots" src="/img/dots.png"/>
                <img id="clock" src="/img/clock.png"/>
                <img id = "squiggly" src="/img/squiggly.png"/>
                <img id = "comment-img" src="/img/comment-bubble.png"/>
                <Content/>
            </div>
        );
    }
});

export default About;
