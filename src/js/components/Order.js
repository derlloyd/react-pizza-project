var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Order = React.createClass({
    render: function() {
      
      return (
        <div>
          <h1>Enter Your Info</h1>
          
          <form>
            <div className="form-group">
              <label forHtml="username">Enter username</label>
              <input type="text" name="username"></input>
            </div>
            <div className="form-group">
              <label forHtml="email">Enter email</label>
              <input type="text" name="email"></input>
            </div>
          </form>
          
          <Link to="/choose">Choose your pizza!</Link>
          
        </div>
    );
  }
});

module.exports = Order;