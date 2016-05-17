var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Order = React.createClass({
    render: function() {
      return (
        <div>
          <h1>Enter Your Info</h1>
          
          <p>input name</p>
          <p>input email</p>
          
          <button>NEXT</button>
          
        </div>
    );
  }
});

module.exports = Order;