/**
 * Created by adisanarula on 4/7/17.
 */

import React, { Component } from 'react';
import Constants from './Constants'

// TODO: Change html links

class FAQ extends Component {
    render() {
        return (
            <div>
                <img id="dots" src="/img/dots.png"/>
                <h1 className="page-title">faq</h1>
                <div className="page-content">
                    <div className="question-answer">
                        <div className="question"> Who can attend Tech@NYU events?</div>
                        <div className="answer"> Our events are open to the public. In any other case, we will clearly outline attendance requirements. </div>
                    </div>
                    <div className="question-answer">
                        <div className="question"> How much experience do I need to attend or participate? </div>
                        <div className="answer"> Most of our events are beginner-friendly, but additional details about the level of the workshop can usually be found on the event's facebook page. Check out
                            our <a href={Constants.links.facebook} target="_blank">Facebook</a> page here for more information about the upcoming event. </div>
                    </div>
                    <div className="question-answer">
                        <div className="question"> How do I find out about these events? </div>
                        <div className="answer"> Join our mailing list and follow us on our social media channels:<br/>
                             <a href={Constants.links.twitter} target="_blank">Twitter</a>, <a href={Constants.links.instagram} target="_blank">Instagram</a>, <a href={Constants.links.facebook} target="_blank">Facebook</a>
                        </div>
                    </div>
                    <div className="question-answer">
                        <div className="question"> Where are the events held? </div>
                        <div className="answer"> Most of our events are held on NYU's Washington Square Campus. These events usually take place at the Leslie eLab or the LaGuardia Co-op, but please check the event's <a href={Constants.links.facebook} target="_blank">Facebook</a> page for the exact location.
                        </div>
                    </div>
                    <div className="question-answer">
                        <div className="question"> Are these events free? Do I need tickets to attend events? </div>
                        <div className="answer"> Yes! Our events are usually free for both NYU students and the public, and does not require a ticket to attend but we encourage you to RSVP <a href={Constants.links.rsvp} target="_blank">here</a>. However, some of our events might require a ticket to attend. Please check the event's <a href={Constants.links.facebook} target="_blank">Facebook</a> page for details.
                        </div>
                    </div>
                    <div className="question-answer">
                        <div className="question"> How do I join Tech@NYU? </div>
                        <div className="answer"> Tech@NYU has become more a community than an organization that you "join." The Tech@NYU executive board (e-board) plans and runs events geared toward students who want to learn more about different topics in the tech industry, but anyone can come to these events! So, bring your friends! Bring your grandma! We want to create spaces where you can easily talk to and learn from other people about tech.</div>
                    </div>
                    <div className="question-answer">
                        <div className="question"> How do I join the Tech@NYU e-board? </div>
                        <div className="answer"> At the beginning of each semester we open applications for our e-board. Positions we recruit for depend on what roles we need filled and we tend to recruit more heavily in the fall than in the spring. If you're interested in joining our board look out for applications on our Facebook page and here on the website as we near the beginnings of each semester. </div>
                    </div>
                    <div className="question-answer">
                        <div className="question"> What roles are within the e-board? </div>
                        <div className="answer"> We have various roles and teams within the e-board. Normally each team will have a team lead and one or two other team members. Aside from the event teams, the e-board also has infrastructure, marketing, and other operational roles. Check out our <a href="about.html">about</a> page to find out more about the different teams in Tech@NYU and see additional information on our e-board members.</div>
                    </div>
                    <div className="email-us">
                        If you have additional questions, please don't hesitate to email us at <a href="mailto:hello@techatnyu.org">hello@techatnyu.org!</a>
                    </div>
                </div>
                <footer id="footer">
                    <Constants.footer/>
                </footer>
            </div>
        );
    }
}

export default FAQ;
