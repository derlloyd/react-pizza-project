var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


// A simple navigation component
var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="main-menu">
        <ul className="nav nav-pills">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/twitter">Tweet</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
});

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <main>
        <Navigation/>
        
        {this.props.children}
        
        <footer className="main-footer">Pizza Palace 2016</footer>
      </main>
    );
  }
});

module.exports = App;