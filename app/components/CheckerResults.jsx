var React = require("react");
var CheckerResultsItem = require("CheckerResultsItem");

var CheckerResults = React.createClass({
    onSelect: function(item){
        this.props.handleButton(item);
    },
    render: function(){
    var {results, button, heading} = this.props;    
    var listNodes = results.map(function (listItem) {
			return (
				<CheckerResultsItem object={listItem} item={listItem.name} price={listItem.price} quantity={listItem.quantity} selected={this.onSelect} button={button} />
			);
		},this);
		return (
		    <div>
		        <h2>{heading}</h2>
    			<ul id="Results" className="list-group">
    				{listNodes}
    			</ul>
			</div>
		);
    }
    });


module.exports = CheckerResults;
