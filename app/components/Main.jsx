var React = require("react");
var Nav = require("Nav");

var Main = (props) =>{
       return (
            <div>
                <div className="top-bar"><h1>FridjChecker</h1></div>
                <Nav />
                {props.children}
            </div>
    );
 } 

module.exports = Main;