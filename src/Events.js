/**
 * Created by adisanarula on 2/24/17.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';
import Constants from './Constants';

const eventURL = 'https://api.tnyu.org/v3/events/upcoming-publicly-live?page%5Blimit%5D=15&sort=startDateTime?';
const placeholder = [
    {
        relationships: {
            teams: {
                data:[{
                    id:'56410d72e24ad83b0635516f'
                }]
            }
        },
        attributes: {
            title: 'VR Showcase',
            description: 'Come join us for an afternoon of awesome VR experiences and games!',
            startDateTime: '2017-04-21T16:30:00.000Z'
        }
    }, {
        relationships: {
            teams: {
                data:[{
                    id:'53f54dd98d1e62ff12539dc1'
                }]
            }
        },
        attributes: {
            title: 'Web Scraping with Selenium',
            description: 'Learn about webscraping and automating tasks with Selenium.',
            startDateTime: '2017-04-20T22:15:00.000Z'
        }
    },
    {
        relationships: {
            teams: {
                data:[{
                    id:'53f99d6bc66b44cf6f8f6d82'
                }]
            }
        },
        attributes: {
            title: 'Design Thinking with IDEO',
            description: 'Learn about design thinking from two designers at IDEO',
            startDateTime: '2017-04-19T21:00:00.000Z'
        }
    },
];

class Event extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const date = new Date(this.props.event.attributes.startDateTime);
        return (
            <div className="event-card">
                <p className="event-title"> {this.props.event.attributes.title} </p>
                <p className="event-team"> {Constants.teams[this.props.event.relationships.teams.data[0].id]}</p>
                <p className="event-description">{this.props.event.attributes.description}</p>
                <hr className="line-break"></hr>
                <p className="event-date"> {date.getMonth() + 1}.{date.getDate()} </p>
                <p className="event-rsvp"><a href={Constants.links.rsvp} target="_blank">RSVP</a></p>
            </div>
        )
    }
}

class EventMobile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const date = new Date(this.props.event.attributes.startDateTime);
        return (
            <div className="event-card-mobile">
                <p className="event-title-mobile"> {this.props.event.attributes.title} </p>
                <p className="event-team-mobile"> {Constants.teams[this.props.event.relationships.teams.data[0].id]}</p>
                <p className="event-description-mobile">{this.props.event.attributes.description}</p>
                <hr className="line-break"></hr>
                <p className="event-date-mobile"> {date.getMonth() + 1}.{date.getDate()} </p>
                <p className="event-rsvp-mobile"><a href={Constants.links.rsvp} target="_blank">RSVP</a></p>
            </div>
        )
    }
}

export class SimpleSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events:[]
        };
    }
    componentDidMount() {
        fetch(eventURL, {
            method:'GET',
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.data.length === 0) {
                    console.log("no upcoming events");
                }
                else {
                    this.setState({
                        events: responseData.data
                    });
                }
            });
    }
    render () {

        let listEvents = [];
        let numEvents = 0;

        if(this.state.events.length > 0) {
            for (let i = this.state.events.length-1; i >= 0; i--) {
                listEvents.push(<div key={numEvents}><Event event={this.state.events[i]} /></div>);
                numEvents += 1;
            }
        } else {
            for (let i = 0; i < placeholder.length; i++) { // add in placeholder events if there are no upcoming events
                listEvents.push(<div key={numEvents}><Event event={placeholder[i]} /></div>);
                numEvents += 1;
            }
        }

        // TODO: DELETE THIS
        for (let i = 0; i < placeholder.length; i++) { // add in placeholder events if there are no upcoming events
            listEvents.push(<div key={numEvents}><Event event={placeholder[i]} /></div>);
            numEvents += 1;
        }

        let settings = {
            dots: false,
            slidesToShow: 3,
            arrows:true,
        };
        return (
            <div>
                <Slider {...settings}>
                    {listEvents}
                </Slider>
            </div>
        );
    }
}

// TODO:: how to not repeat code?
export class MobileEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events:[]
        };
    }
    componentDidMount() {
        fetch(eventURL, {
            method:'GET',
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.data.length === 0) {
                    console.log("no upcoming events");
                }
                else {
                    this.setState({
                        events: responseData.data
                    });
                }
            });
    }

    render() {

        let listEvents = [];
        let numEvents = 0;

        if(this.state.events.length > 0) {
            for (let i = this.state.events.length-1; i >= 0; i--) {
                listEvents.push(<div className="event-mobile" key={numEvents}><EventMobile event={this.state.events[i]} /></div>);
                numEvents += 1;
            }
        } else {
            for (let i = 0; i < placeholder.length; i++) { // add in placeholder events if there are no upcoming events
                listEvents.push(<div  className="event-mobile" key={numEvents}><EventMobile event={placeholder[i]} /></div>);
                numEvents += 1;
            }
        }

        // TODO: DELETE THIS
        for (let i = 0; i < placeholder.length; i++) { // add in placeholder events if there are no upcoming events
            listEvents.push(<div  className="event-mobile" key={numEvents}><EventMobile event={placeholder[i]} /></div>);
            numEvents += 1;
        }

        return (
            <div>
                {listEvents}
            </div>
        )
    }
}

