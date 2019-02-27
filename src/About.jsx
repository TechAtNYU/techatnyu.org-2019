/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react';
import Slider from 'react-slick';
import Constants from './Constants'
import {Link} from 'react-router';
import members from '../data/eboard.json';
import sponsors from '../data/sponsors.json';

const fontStyle = {
    fontSize: "1.8vmin"
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
);

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
);


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardMembers: []
        }
    }

    getInfo(id, array) {
        let url = Constants.apiBase['test'] + 'memberships/' + id + '?include=member,position';
        let info = fetch(url, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseData) => {

            let person = {
                "name": responseData.included[0].attributes.name
            }

            person["role"] = Constants.teams[responseData.included[1].relationships.team.data.id];
            person["link"] = responseData.included[1].attributes.contact;
            
            if (person["role"] != null) {
                let temp = this.state.boardMembers;
                temp.push(person);
                this.setState({boardMembers: temp});
            }
        })
    }

    getMembers() {
        let array = [];
        fetch(Constants.apiBase['test'] + 'memberships', {
            method:'GET',
        })
        .then((response) => response.json())
        .then((responseData) => {
            for (let i = 0; i < responseData.data.length; i++) {
                if (responseData.data[i].attributes.isActive) {
                    let id = responseData.data[i].id;
                    this.getInfo(id, array);
                }
            }
        });
    }

    componentDidMount() {
        this.getMembers(this.state.boardMembers);
    }

    render() {

        let memberPairs = [];
        // Pair members together to put them in the table
        for (let i = 0; i < this.state.boardMembers.length; i+=2) {

            let pairs = {
                0: this.state.boardMembers[i],
                1: this.state.boardMembers[i+1]
            };

            memberPairs.push(pairs);
        }

        return (
            <div id="board-members">
                <div className="events">board members</div>
                <table>
                    <tbody>
                      {memberPairs.length > 0 && memberPairs.map( (obj, index) => {
                         if (obj[1] != undefined) {
                             return <tr key={index}>
                                 <td className="cell-1">
                                    <span className="member-name">
                                        {obj[0].name}, {obj[0].role}
                                    </span>
                                     <br/>
                                     <span>
                                        <a className = "member-handle" href={obj[0].link} target="__blank">@{obj[0].name}</a>
                                     </span>
                                 </td>
                                 <td className="cell-2">
                                     <span className="member-name">
                                        {obj[1].name}, {obj[1].role}
                                    </span>
                                    <br/>
                                     <span>
                                        <a className="member-handle" href={obj[1].link} target="__blank">@{obj[1].name}</a>
                                    </span>
                                 </td>
                             </tr>
                         } else {
                             return <tr key={index}>
                                 <td className="cell-1">
                                     <span className="member-name">
                                        {obj[0].name}, {obj[0].role}
                                    </span>
                                    <br/>
                                     <span>
                                        <a className = "member-handle" href={obj[0].link} target="__blank">@{obj[0].name}</a>
                                    </span>
                                 </td>
                             </tr>
                         }
                     })}

                    </tbody>
                </table>
                <br/>
                <a target="__blank" href="http://ship.techatnyu.org" id="alum-link"> see our alum and an archive of their projects </a>
            </div>
        )
    }
}

class Sponsors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsors: sponsors['sponsors']
        };
    }
    render () {

        let sponsorLists = [];
        if(this.state.sponsors.length > 0) {
            for (let i = 0; i < this.state.sponsors.length; i++) {
                let img = '/img/sponsors/' + this.state.sponsors[i].img;
                sponsorLists.push(<div key={i}><img src={img}/></div>);
            }
        }
        let settings = {
            dots: false,
            slidesToShow: 4,
            arrows:true,
        };

        return (
            <div id="sponsor-list">
                <div className="events">sponsors</div>
                <p className="sponsor-description">
                    Our awesome sponsors help keep Tech@NYU up and running.
                    We are so grateful for their support. If you would like to help sponsor
                    Tech@NYU, please contact hello@techatnyu.org!
                </p>

                <div id="sponsor-slider">
                    <Slider {...settings}>
                        {sponsorLists}
                    </Slider>
                </div>
            </div>
        );
    }

}

class About extends Component {

    constructor(props) {
        super(props);
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
                <Sponsors/>

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
