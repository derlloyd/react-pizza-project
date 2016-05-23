var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Done = React.createClass({
    render: function() {
        return (
        <div>
            <h1>DONE: return all info and confirm</h1>
            
            <button className="btn btn-primary">Place order</button>
            
        </div>
        )

    }

})
module.exports = Done;