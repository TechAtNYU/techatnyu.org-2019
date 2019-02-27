import React, {Component} from 'react'
import {SimpleSlider, MobileEvents} from './Events'
import Constants from './Constants'


class EmailForm extends Component {
  	constructor(props) {
		super(props);
		this.state = {
            email: "Enter your email",
		};
	}
  	handleChange (evt) {
	   this.setState({
	     email: evt.target.value
	   });
	}
  	validate (email) {
	    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
	      //source for regex validation: https://www.w3resource.com/javascript/form/email-validation.php
	      return true;
	    }
	    return false;
  	}
	submitChange (email) {
	    if(this.validate (email)){
	      const mailtrain = 'https://mailtrain.tnyu.org/subscription/ryeVfPjte?email=' + email + '&subscribe=Sign+Up';
	      var newWindow = window.open(mailtrain, '_blank');
	      newWindow.focus();
	    }
	}
	render () {
		return(
			<div id="signup-form">
			        <p> Be the first to know about upcoming events and opportunities. </p><br/>
			        <form>
			        	<input type="email" placeholder={this.state.email} onChange={this.handleChange.bind(this)}/>
				        <button onClick={()=>this.submitChange(this.state.email)} type="submit" className="btn btn-success">
		               <i className="material-icons arrow-submit">arrow_forward</i>
	            	</button>
			        </form>
	    	</div>
		);
	}
}


class Home extends Component {

    render () {
    	return (
	        <div>
	            <div id="tnyu-title">
	            	<h1>tech@nyu</h1>
			    </div>
                <EmailForm/>
                <div id="main-slider"><SimpleSlider team={this.state}/></div>
                <div id="mobile-events"><MobileEvents/></div>

			    <h2 id="tnyu-description"> We are NYC's largest student-run community <br/> of coders, designers, and builders. </h2>
			    <footer id= "footer">
			    	<Constants.footer/>
			    </footer>
	        </div>
	  );
    }
}

export default Home;
