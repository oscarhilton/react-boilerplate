var React = require("react");

var CheckerForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        
        var item = this.refs.item.value;
        
        if (item.length > 0){
            this.refs.item.value = '';
            this.props.onSearch(item);
        }
        
        this.props.onSearch(item);
    },
    render: function () {
       return (
            <form onSubmit={this.onFormSubmit}>
                <input className="input-field" type="text" ref="item" />
                <button>Look up item</button>
            </form>
    );
   } 
});

module.exports = CheckerForm;
