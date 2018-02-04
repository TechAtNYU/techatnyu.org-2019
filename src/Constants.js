/**
 * Created by adisanarula on 2/28/17.
 */
import React, {Component} from 'react';

const ApiBase = {
    production: 'https://api.tnyu.org/v3/',
    test: 'https://api.tnyu.org/v3-test/'
}

const Constant = {
    facebook: "https://www.facebook.com/TechatNYU/",
    twitter: "https://twitter.com/techatnyu",
    medium: "https://medium.com/@TechatNYU",
    instagram: "https://www.instagram.com/techatnyu/",
    rsvp: "http://rsvp.techatnyu.org/",
    calendar: "http://cal.techatnyu.org/",
    resumes: "https://balloon.io/tnyuresumes"
};

const TeamIDs  = {
    '53f54dd98d1e62ff12539dc1': 'Hack Days',
    '53f54dd98d1e62ff12539dc2': 'After Hours',
    '53f99d48c66b44cf6f8f6d81': 'Demo Days',
    '53f99d6bc66b44cf6f8f6d82': 'Design Days',
    '54e8c420bc61fd4096c01048': 'Infrastructure',
    '5440609d6b0287336dfc51cf': 'Startup Week',
    '53f99d8fc66b44cf6f8f6d83': 'Business Development',
    '53f54dd98d1e62ff12539dc3': 'Marketing',
    '56410d72e24ad83b0635516f': 'Game Days'
};

class Footer extends Component {
    render () {
        return(
            <div>
                <hr></hr>
                <div id="footer-content">
                    <div id="copyright"> ©Tech@NYU, 2016 </div>
                    <div id="social-handles">
                        <a href = {Constant.facebook} target="_blank">Facebook</a>
                        <a href= {Constant.twitter} target="_blank">Twitter</a>
                        <a href= {Constant.medium} target="_blank">Medium</a>
                        <a href= {Constant.instagram} target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
        );
    }
}

const NotFound = () => (
    <div>
        <img id="dots" src="/img/dots.png"/>
        <h1 className="not-found">404 Page Not Found</h1>
    </div>
)

const Constants =  {
    links: Constant,
    footer: Footer,
    notFound: NotFound,
    teams: TeamIDs,
    apiBase: ApiBase
}

export default Constants;