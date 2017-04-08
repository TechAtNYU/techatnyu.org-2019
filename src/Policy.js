/**
 * Created by adisanarula on 4/7/17.
 */

import React from 'react';
import Navs from './Navs';

const fontStyle = {
    fontSize: "2vmin"
};

var Policy = React.createClass({

    render: function() {
        return (
            <div>
                <img id="dots" src="/img/dots.png"/>
                <h1 className="page-title"> anti-harassment <br/> policy</h1>
                <div className="page-content">
                    <div id="policy">
                        The following anti-harassment policy covers all Tech@NYU events and
                        activities and applies to all members, presenters, and other participants. <br/><br/>
                        Furthermore, Tech@NYU will only lend its brand to or fund groups that
                        offer a similar anti-harassment policy. For information on how to offer an
                        anti-harassment policy to your group, see Code for America's guide, the
                        advice of which can be generalized to non–Code for America groups. <br/><br/>
                        Tech@NYU does not tolerate harassment in any form. We
                        welcome everyone regardless of sex, race, gender, gender identity and
                        expression, sexual orientation, disability, age, physical
                        appearance, religion/faith, national origin, source of income, and language
                        preference. <br/><br/>
                        Harassment includes but is not limited to: offensive verbal or
                        written comments related to, or exclusion based on, any of the characteristics
                        listed above (i.e. sex, race, gender, etc.); deliberate intimidation;
                        following or stalking; unwanted photography or recording; sustained
                        disruption of talks or other events;
                        inappropriate physical contact; unwelcome sexual attention; and
                        patronizing language or action. <br/><br/>
                        Further, sexual language and imagery is not appropriate at any
                        Tech@NYU event or activity, including talks.
                        Anyone in violation of this policy may be warned, expelled from the
                        event, and/or banned from future tech@nyu activities, at the sole discretion
                        of the Tech@NYU leadership and the event
                        organizers. <br/><br/>
                        If you are being harassed, notice that someone else is being harassed,
                        or have any other concerns, please contact a member of the event staff
                        immediately. Additionally, you can contact David Wang, Tech@NYU’s
                        President, at dhw249@stern.nyu.edu and [phone number]. To the largest
                        extent possible, reports of harassment will be kept confidential;
                        usually, this means they will only be shared Tech@NYU board members
                        who are not involved in the incident and are directly dealing with
                        anti-harassment enforcement, or with law enforcement/venue security
                        should their presence become necessary. <br/><br/>
                        Tech@NYU leadership and/or event staff will be happy to help participants
                        contact venue security or local law enforcement, provide escorts,
                        or otherwise assist those experiencing harassment to feel safe for the
                        duration of the event. <br/><br/>
                        We value your participation and hope that by widely communicating
                        these expectations we can all enjoy a welcoming environment. <br/><br/>

                        <a className="email-us" style={fontStyle}>Email Template for Anti-Harassment Reporting</a><br/><br/>

                        If you have any issue, please report in person, call the number above, or
                        use this email template. <br/><br/>
                        SUBJECT: Safe Space Alert at [EVENT NAME] <br/><br/>
                        I am writing because of harassment at a tech@nyu event, (NAME,
                        PLACE, DATE OF EVENT).
                        You can reach me at (CONTACT INFO). Thank you. <br/><br/>

                        <a className="email-us" style={fontStyle}>Contributors to this Policy</a><br/><br/>
                        This anti-harassment policy is based on Code for America’s Anti-Harassment
                        policy and the example policy from the Geek Feminism wiki,
                        created by the Ada Initiative and other volunteers. Those policies were in
                        turn based on several others, including the Ohio LinuxFest anti-harassment
                        policy, written by Esther Filderman and Beth Lynn Eicher, and the
                        Con Anti-Harassment Project. Mary Gardiner, Valerie Aurora, Sarah
                        Smith, and Donna Benjamin generalized the policies and added supporting
                        material. Many members of LinuxChix, Geek Feminism and other
                        groups contributed to this work. The policy shown above was edited into
                        its present form by Ethan Resnick.
                    </div>
                </div>
                <footer id="footer">
                    <Navs.footer/>
                </footer>
            </div>
        );
    }
});

export default Policy;