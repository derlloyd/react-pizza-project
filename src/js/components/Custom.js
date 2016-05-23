var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Custom = React.createClass({
    render: function() {


        var toppings = [{
            name: 'pepperoni',
            displayName: 'Pepperoni',
            price: 1
        }, {
            name: 'anchovies',
            displayName: 'Anchovies',
            price: 10
        }, {
            name: 'lobster',
            displayName: 'Lobstah',
            price: 25
        }, {
            name: 'truffle oil',
            displayName: 'Mmmm... truffle oillll',
            price: 100
        }];

        var cheeses = [{
            name: 'mozzarella',
            displayName: 'Mozzarella cheese',
            price: 0
        }, {
            name: 'parmesan',
            displayName: 'Parmigiano Reggiano',
            price: 100
        }];

    


        return (
            <div>
            <h1>Create a custom pizza</h1>
            <p>list of custom ingredients</p>
            
            
            <ul>
                <li>cheese1</li>
                <li>cheese2</li>
                <li>cheese3</li>
                <li>cheese4</li>
                <li>cheese5</li>
            </ul>
            <ul>
                <li>ingredient1</li>
                <li>ingredient2</li>
                <li>ingredient3</li>
                <li>ingredient4</li>
                <li>ingredient5</li>
            </ul>
            <Link to="/done">Done!</Link>
        
        </div>
        )

    }

})

module.exports = Custom;