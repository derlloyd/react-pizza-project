var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Custom = React.createClass({
    render: function() {
        return (
        <div>
            <h1>Create a custom pizza</h1>
            <p>list of custom ingredients</p>
        </div>
        )
        
    }
    
})

module.exports = Custom;