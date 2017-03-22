var React = require("react");
var CheckerResultsItem = require("CheckerResultsItem");

var CheckerResults = React.createClass({
    onSelect: function(item){
        this.props.handleButton(item);
    },
    onIncrease: function(item){
        this.props.handleIncrease(item);
    },
    onDecrease: function(item){
        this.props.handleDecrease(item);
    },
    render: function(){
    var {results, button, heading, quantity, hasQuantity, hasTotal} = this.props;    
    var listNodes = results.map(function (listItem) {
			return (
				<CheckerResultsItem hasTotal={hasTotal} hasQuantity={hasQuantity} object={listItem} item={listItem.name} price={listItem.price} quantity={ listItem[quantity] } increase={this.onIncrease} decrease={this.onDecrease} selected={this.onSelect} button={button} />
			);
		},this);
		return (
		    <div>
		        <h2>{heading}</h2>
    			<table>
                  <tr>
                    <th>Product Name</th>
                    <th>Price each</th> 
                    {hasTotal ? (<th>To pay</th>) : ''}
                    <th></th>
                    {hasQuantity ? (<th></th>) : ''}
                    <th>Quantity</th>
                    {hasQuantity ? <th></th> : ''}
                  </tr>
                  {listNodes}
                </table>
			</div>
		);
    }
    });


module.exports = CheckerResults;
