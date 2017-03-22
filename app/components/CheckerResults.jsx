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
    var {results, button, heading, quantity} = this.props;    
    var listNodes = results.map(function (listItem) {
			return (
				<CheckerResultsItem object={listItem} item={listItem.name} price={listItem.price} quantity={ listItem[quantity] } increase={this.onIncrease} decrease={this.onDecrease} selected={this.onSelect} button={button} />
			);
		},this);
		return (
		    <div>
		        <h2>{heading}</h2>
    			<ul className="list-group">
    				{listNodes}
    			</ul>
			</div>
		);
    }
    });


module.exports = CheckerResults;
