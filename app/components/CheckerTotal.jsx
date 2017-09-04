var React = require("react");

var CheckerTotal = ({listData, type}) => {
    
    var total = listData.map(function(item){
        return item[type] * item.price;
    }, this);
    var listTotal = 0;
    for(var i in total) { listTotal += total[i]; }
    listTotal = listTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
       return (
        <div>
            <h3>Grand total: £{listTotal}</h3>
        </div>
    );
} 

module.exports = CheckerTotal;
