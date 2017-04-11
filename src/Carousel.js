/**
 * Created by adisanarula on 2/24/17.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';
import Constants from './Constants';

// TODO:: Create dynamic event cards
// TODO:: Custom arrows

const eventURL = 'https://api.tnyu.org/v3/events/upcoming-publicly-live?page%5Blimit%5D=15&sort=startDateTime?';

class Event extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="event-card">
                <p className="event-title"> {this.props.event.attributes.title} </p>
                <p className="event-team"> {Constants.teams[this.props.event.relationships.teams.data[0].id]}</p>
                <p className="event-description">
                    Joel Kemp is a software engineer at Spotify.
                    The purpose of this workshop is to showcase the basics of the server-side language.
                </p>
                <hr></hr>
                <p className="event-date"> 10.12 </p>
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
                this.setState({
                    events: responseData.data
                });
            });
    }

    render () {

        let listEvents = [];

        if(this.state.events.length > 0) {
            for (var i = this.state.events.length-1; i >= 0; i--) {
                listEvents.push(<div key={i}><Event event={this.state.events[i]} /></div>);
            }
        } else {
            listEvents.push(<div></div>);
        }

        var settings = {
            dots: false,
            slidesToShow: 3,
            arrows:true,
            // nextArrow: <SampleNextArrow/>,
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

