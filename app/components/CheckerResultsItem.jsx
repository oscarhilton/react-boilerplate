var React = require("react");
var Button = require("Button")

var CheckerResultsItem = React.createClass({
	handleButton: function(e){
			
			var {object} = this.props;
    		e.preventDefault();
    		this.props.selected(object);
    		
    	},
    render: function(){
    	var {item, price, button, quantity} = this.props;
		return (
			<li>
				{item} , £{price}, quantity: {quantity}
				<Button onClick={this.handleButton} text={button} />
			</li>
		);
    }
});

module.exports = CheckerResultsItem;
