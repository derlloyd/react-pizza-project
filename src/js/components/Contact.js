var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Contact = React.createClass({
  render: function() {
    return (
      <div>
        
        <h1>Contact Us</h1>
        <p className="contact-number">1-800-123-9955</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
quis nostrud exerci tation ullamcorper suscipit lobortis nisl
ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
dolor in hendrerit in vulputate velit esse molestie consequat,
vel illum dolore eu feugiat nulla facilisis at.</p>
<p>Nam liber tempor cum soluta nobis eleifend option congue
nihil imperdiet doming id quod mazim placerat facer possim
assum. Typi non habent claritatem insitam; est usus legentis
in iis qui facit eorum claritatem. Investigationes
demonstraverunt lectores legere me lius quod ii legunt saepius.
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

module.exports = Contact;