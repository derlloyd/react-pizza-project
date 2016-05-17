var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
  render: function() {
    return (
      <div>
        
        <h1>Welcome to pizza place</h1>
        
        <button>click here to start your order</button>

      </div>
    );
  }
});

module.exports = Home;