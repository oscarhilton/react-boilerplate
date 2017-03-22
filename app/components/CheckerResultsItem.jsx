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
    	var {item, price, button, quantity, hasQuantity, hasTotal} = this.props; // TODO: remove buttons for different lists
		var total = (price * quantity).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		var price = price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		return (
			<tr className="Result">
				<td className="Item" >{item}</td>
				<td className="price" >£{price}</td>
				{hasTotal ? ( <td>£{total}</td> ) : (<td></td>)}
				<td className="action"><Button onClick={this.handleButton} text={button} /></td>
				{hasQuantity ? (<td className="quantity-button" ><Button onClick={this.handleIncrease} text="+" /></td>) : (<td></td>)}
				<td className="quantity">{quantity}</td>
				{hasQuantity ? (<td className="quantity-button" ><Button onClick={this.handleDecrease} text="-" /></td>) : (<td></td>)}
			</tr>
		);
    }
});

module.exports = CheckerResultsItem;
