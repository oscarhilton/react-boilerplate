var React = require("react");

var CheckerForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        
        var item = this.refs.item.value;
        
        if (item.length > 0){
            this.props.onSearch(item);
        }
        
        this.props.onSearch(item);
    },
    render: function () {
       return (
                <input className="input-field" type="text" ref="item" onChange={this.onFormSubmit} />
    );
   } 
});

module.exports = CheckerForm;
