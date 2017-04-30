/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react';
import Constants from './Constants'
import {Link} from 'react-router';

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

const colorStyle = {
    color: "#f05158"
};

const memberURL = 'https://api.tnyu.org/v3/memberships';

const Content = () => (
    <div className="page-content">
        <div className="tech-description">
            Tech@NYU is NYC’s largest community of students interested in technology and its possibilities. We provide spaces to help people ideate, experiment, learn, and build together. <br/><br/>
            Behind the operations of Tech@NYU is the Board, a group of students
            that runs events focused on coding, gaming, design, business, entrepreneurship, and more, to foster a fun and inclusive tech community in NYC. <br/><br/>
            These events are held throughout the academic year and are open to students of all backgrounds. We’d love see you! <br/><br/>
            If you have any questions, head to our <Link to="/faq" style={colorStyle}> FAQ</Link> or drop us a line at <a className="email-us" href="mailto:hello@techatnyu.org" style={fontStyle}>hello@techatnyu.org</a>.
        </div>
        <div className="events">events</div>
        <div style = {marginStyle}  className="tech-description">
            We host regular get-together in each of six categories: <br/> After Hours, Demo Days, Design Days, Freshman Circuit, Game Day and HackDays. In addition, we host Startup Week every semester.
        </div>
        <hr id="events-line" style={lineStyle}/>
    </div>
)

const Teams = () => (
    <table id="tnyu-teams-about">
        <tbody>
            <tr>
                <td className="team-name">After Hours</td>
                <td className = "team-description">Held weekly. Gives students an opportunity to link up, eat pizza, and
                    start creating awesome things! Events range from mixers to guest lectures.
                    All experience levels are welcome!</td>
            </tr>
            <tr>
                <td className="team-name">Demo Days</td>
                <td className = "team-description">Held monthly. Gathers a community of students who create things,
                    providing a platform for student builders to present their work, celebrate
                    their creations, and inspire other students to build projects they care
                    about. <a href="http://demodays.co" target = "__blank" className="email-us" style={fontStyle}>Apply to demo your project here!</a></td>
            </tr>
            <tr>
                <td className="team-name">Design Days</td>
                <td className = "team-description">Held bi-monthly. Brings in design professionals from around the country
                    to give workshops or talks on various design topics.</td>
            </tr>
            <tr>
                <td className="team-name">Freshman Circuit</td>
                <td className = "team-description">Open to freshman only. Tours NYC startups and meets with startup
                    employees to learn about what they do. This is a great way to explore
                    your interests and how they fit into the industry! Spaces are limited.
                    Applications open on September 1st every year.</td>
            </tr>
            <tr>
                <td className="team-name">Game Days</td>
                <td className = "team-description">Held monthly. Gathers students from all over New York City to explore
                    digital and physical game design, meet new people, express themselves creatively, and bring their ideas to fruition! </td>
            </tr>
            <tr>
                <td className="team-name">Hack Days</td>
                <td className = "team-description">Held bi-monthly. Brings in guest speakers to host lectures or workshops
                    about programming and web technologies. We cover everything from Angular to Zepto and all experience levels are welcome!</td>
            </tr>
            <tr>
                <td className="team-name">Startup Week</td>
                <td className = "team-description">Held once every semester. This is Tech@NYU’s flagship event, comprising a week-long series of events and
                    workshops that celebrate all things design, hacking,
                    entrepreneurship, and technology, wrapping up with a keynote speech
                    by the CEO of an NYC Startup.</td>
            </tr>
        </tbody>
    </table>
)


class Board extends Component {

    render() {
        return (
            <div id="board-members">
                <div className="events">board members </div>
            </div>
        )
    }
}


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardMembers:[]
        }
    }

    componentDidMount() {
        fetch(memberURL, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData)=> {
                this.setState({
                    boardMembers: responseData.data
                });
                console.log(this.state.boardMembers);
            });
    }

    render() {
        return (
            <div>
                <h1 className="page-title">about</h1>
                <img id="dots" src="/img/dots.png"/>
                <img id="clock" src="/img/clock.png"/>
                <img id = "squiggly" src="/img/squiggly.png"/>
                <img id = "comment-img" src="/img/comment-bubble.png"/>
                <img id = "team-photo" src="img/team-photo2.jpg"/>
                <Content/>
                <Teams/>
                <Board/>
                
                <div id="anti-harassment" >
                    <h1 className="events">  anti-harassment policy </h1>
                    <p style={fontStyle}>All Tech@NYU events and appearances are covered by a strict
                        anti-harrassment policy. <Link to="/policy" style={colorStyle}>Read about the policy</Link>.</p>
                </div>
                <footer id= "footer">
                    <Constants.footer/>
                </footer>
            </div>
        );
    }
}

export default About;
