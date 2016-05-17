var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NotFound = React.createClass({
  render: function() {
    return (
      <div>Not Found!</div>
    );
  }
});

module.exports = NotFound;