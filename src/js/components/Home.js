var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
  continue: function() {
      
      
        this.props.history.push('/order')  
  },    
  render: function() {
    return (
      <div>
        <div className="jumbotron">
        <h1>Welcome to pizza place</h1>
        <p>We are the best place in the world</p>
        <p>Home made fresh etc etc...</p>
        
        </div>
        <Link to="/order">Order some pizza!</Link><br/>
        <Link to="/twitter">Send a tweet</Link>
  
      </div>
    );
  }
});

module.exports = Home;
