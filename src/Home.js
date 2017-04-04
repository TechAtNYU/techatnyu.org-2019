import React from 'react';


var EmailForm = React.createClass({
	getInitialState: function() {
	    return {
	      value: "Type your email"
	    };
  	},
  	handleChange: function(evt) {
	    this.setState({
	      value: evt.target.value
	    });
	},
	submitChange: function(email) {
		console.log(email); // TODO: Connect to backend
	},
	render: function() {
		return(
			<div id="signup-form">
			        <p> Be the first to know about upcoming events and opportunities. </p><br/>
			        <form>
			        	<input type="email" value={this.state.value} onChange={this.handleChange}/>
				        <button onClick={()=>this.submitChange(this.state.value)} type="submit" className="btn btn-success">
		                	<i className="material-icons">arrow_forward</i>
	            		</button>
			        </form>
	    	</div>
		);
	}
});

var Home = React.createClass({
    render: function() {
    	return (
	        <div>
	            <div id="tnyu-title">
	            	<h1>tech@nyu</h1>
			    </div>
			    <EmailForm/>
	        </div>
	  );
    }
});

export default Home;