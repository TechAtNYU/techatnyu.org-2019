/**
 * Created by adisanarula on 2/24/17.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';

// TODO:: Create dynamic event cards
// TODO:: Custom arrows

class SimpleSlider extends Component {

    render () {
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
                    <div>
                        <div className="event-card">
                            <p className="event-title"> GHC MEETUP </p>
                            <p className="event-team"> After Hours </p>
                            <p className="event-description">
                                After Hours is back with the GHC Edition—anybody attending Grace Hopper from NYU is
                                welcome to attend so we can all get to meet each other before the celebration.
                            </p>
                            <hr></hr>
                            <p className="event-date"> 10.12 </p>
                        </div>
                    </div>
                    <div>
                        <div className="event-card">
                            <p className="event-title"> INTRO TO NODE JS W/JOEL </p>
                            <p className="event-team"> Hack Days </p>
                            <p className="event-description">
                                Joel Kemp is a software engineer at Spotify.
                                The purpose of this workshop is to showcase the basics of the server-side language.
                            </p>
                            <hr></hr>
                                <p className="event-date"> 10.17 </p>
                        </div>
                    </div>
                    <div>
                        <div className="event-card">
                            <p className="event-title"> REPORTING WITH VISUALS </p>
                            <p className="event-team"> Design Days </p>
                            <p className="event-description">
                                Larry Buchanan, graphics editor at the The New York Times,
                                will be leading a talk about covering the news visually.
                            </p>
                            <hr ></hr>
                                <p className="event-date"> 10.17 </p>
                        </div>
                    </div>
                    <div>
                        <div className="event-card">
                            <p className="event-title"> INTRO TO UNITY </p>
                            <p className="event-team"> Game Days </p>
                            <p className="event-description">
                                Larry Buchanan, graphics editor at the The New York Times,
                                will be leading a talk about covering the news visually.
                            </p>
                            <hr ></hr>
                            <p className="event-date"> 10.20 </p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}


export default SimpleSlider;

