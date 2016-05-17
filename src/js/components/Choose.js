var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Choose = React.createClass({
    render: function() {
        return (
        <div>    
            <h1>What kind of pizza?</h1>
            <p>Choose from a list of pre-made pizzas or CUSTOM</p>
        </div>
        
        
        )
        
    }
    
})

module.exports = Choose;