/**
 * Created by adisanarula on 2/24/17.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';
import Constants from './Constants';

const eventURL = 'https://api.tnyu.org/v3/events/upcoming-publicly-live?page%5Blimit%5D=15&sort=startDateTime?';

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

class SimpleSlider extends Component {

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
                    console.log("no upcomin events");
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
        if(this.state.events.length > 0) {
            for (let i = this.state.events.length-1; i >= 0; i--) {
                listEvents.push(<div key={i}><Event event={this.state.events[i]} /></div>);
            }
        } else {
            listEvents.push(<div key="0"></div>);
        }

        let settings = {
            dots: false,
            slidesToShow: 3,
            arrows:true,
            //nextArrow: <NextArrow/>,
            // prevArrow: <SamplePrevArrow/>
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


export default SimpleSlider;

