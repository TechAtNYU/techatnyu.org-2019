require('../stylesheets/index.scss');

import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
 
var Counter = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      photoAdded: false
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  },
  remainingCharacters: function() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  },
  overflowAlert: function() {
  var before = this.state.text.substring(140-10, 140);
  var after = this.state.text.substring(140);
  
  if (this.remainingCharacters() < 0) {
    return (
      <div className="alert alert-warning">
        <strong>Oops! Too Long:...</strong>
        &nbsp;...{before}
        <strong className="bg-danger"> {after} </strong>
      </div>
    );
  } else {
    return "";
  }
  },
  render: function() {
    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
          disabled={this.remainingCharacters()===140}>Tweet</button>
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>
        <p className="trial"> Hello I am green </p>
      </div>
    );
  }
});

export default Counter;