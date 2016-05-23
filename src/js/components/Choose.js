var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Choose = React.createClass({
    render: function() {



        var pizzas = [{
            name: 'Cheese Pizza',
            cheese: 'mozzarella',
            toppings: [],
            price: 5
        }, {
            name: 'The Monster',
            cheese: 'parmesan',
            toppings: ['anchovies', 'lobster', 'truffle oil'],
            price: 100
        }];


        return (
            <div>    
            <h1>Hi Username</h1>
            <h1>What kind of pizza?</h1>
            <p>Choose from a list of pre-made pizzas or CUSTOM</p>
            
            
<form action="">
<input type="radio" name="pizza" value="cheese">cheese</input><br/>
<input type="radio" name="pizza" value="monster">monster</input>
</form>
            
            
            <ul>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>option4</li>
                <li>option5</li>
                <li><Link to="/custom">Custom</Link></li>
            </ul>
            <Link to="/done">Done!</Link>
            
        </div>


        )

    }

})

module.exports = Choose;