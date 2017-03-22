var React = require("react");
var Button = require("Button")



var CheckerResultsItem = React.createClass({
	handleButton: function(e){
			var {object} = this.props;
    		e.preventDefault();
    		this.props.selected(object);
    	},
    handleIncrease: function(e){
			var {object} = this.props;
    		e.preventDefault();
    		this.props.increase(object, this.props.quantity); // TODO: Make more DRY
    	},
    handleDecrease: function(e){
			var {object} = this.props;
    		e.preventDefault();
    		this.props.decrease(object, this.props.quantity);
    	},
    render: function(){
    	var {item, price, button, quantity} = this.props; // TODO: remove buttons for different lists
		return (
			<li>
				{item}
				, 
				£{price}
				, 
				total: £{price * quantity}
				<Button onClick={this.handleButton} text={button} />
				<Button onClick={this.handleIncrease} text="+" /> 
				{quantity}
				<Button onClick={this.handleDecrease} text="-" />
			</li>
		);
    }
});

module.exports = CheckerResultsItem;
