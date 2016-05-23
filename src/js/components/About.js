var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var About = React.createClass({
  render: function() {
    return (
      <div>
        
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
quis nostrud exerci tation ullamcorper suscipit lobortis nisl
ut aliquip ex ea commodo consequat.</p>
<p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
Claritas est etiam processus dynamicus, qui sequitur mutationem
consuetudium lectorum. Mirum est notare quam littera gothica,
quam nunc putamus parum claram, anteposuerit litterarum formas
humanitatis per seacula quarta decima et quinta decima. Eodem
modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
in futurum.</p>
      </div>
    );
  }
});

module.exports = About;