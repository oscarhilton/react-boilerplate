var React = require("react");

var Button = React.createClass({
    render: function () {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
});

module.exports = Button;
