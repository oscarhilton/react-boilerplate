var React               = require('react');
var CheckerCamera       = require("CheckerCamera");
var CheckerMessage      = require("CheckerMessage");
var CheckerForm         = require("CheckerForm");
var CheckerResults      = require("CheckerResults");
var CheckerTotal        = require("CheckerTotal");
var Button              = require("Button");
var TescoApi            = require("TescoApi");


var Checker = React.createClass({
    containsObject: function(obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    return true;
                }
            }
        
            return false;
        },
    getInitialState: function(){
        return{
            message: 'use the search bar to look up an item',
            data: [],
            results: [],
            list: []
        }
    },
    handleSearch: function(item) {
        
        var that = this;
        
        
        // TODO: Barcode scanner option
        
        TescoApi.getProduct(item).then(function(item){

            
            that.setState({
                results: item.results
            });
        
            
        }, function(errorMessage){
            alert(errorMessage);
        });
        

    },
    handleAddList: function(item) {
        var that = this;
        
        var {data, list} = this.state;
        
        if( this.containsObject(item, data)){ // If there is already item in Fridge
            that.setState({
                message: "you have one already!"
            })
        }else{
            if( typeof item.list != 'number' ){
                item.list = 1;
            }
    
        
            if( !this.containsObject(item, list)){ // If there is already item in List
                list.push(item);
            
                that.setState({
                    list,
                    message: "You added " + item.name + " to your shopping list!"
                })
                
            }else{
                item.list++;
                that.setState(({
                    list,
                    message: "You added another " + item.name + " to your shopping list!"
                }))
            }
        }
        
    },
    handleCheckout: function(item){
      var that = this;
        
      var {list, data} = this.state;
      var index = list.indexOf(item);
      
      if( typeof item.fridge != 'number' ){
            item.fridge = 0;
        }
      
      if( !this.containsObject(item, data)){
            data.push(item);
        
            that.setState({
                data,
                message: "You added " + item.name + " to the fridge!"
            })
            
        }else{
            
            that.setState(({
                data,
                message: "You added another " + item.name + " in the fridge!"
            }))
        }
        
        item.fridge = item.fridge + item.list;
        item.list = 1;
      
      
        if (index > -1) {
          list.splice(index, 1);
        }
          
      that.setState({
          data,
          list
      })
    },
    handleIncrease: function(item, list){
        var that = this;
        
        item.list++;
        
        var {data, list} = this.state;
        
        that.setState({
            list,
            data
        })
        
    },
    handleDecrease: function(item){
        var that = this;
        
        var {data, list} = this.state;
        
        var index = list.indexOf(item);
        
        if(item.list > 1){
            item.list--;
        }else{
            if (index > -1) {
              list.splice(index, 1);
            }
            item.list == 0;
        }
    
        that.setState({
            list,
            data
        })
    },
    render: function () {

        var {message, data, results, list} = this.state;

        return (
            <div>
                <CheckerMessage message={message}/>
                <CheckerForm onSearch={this.handleSearch} />
                <CheckerResults hasQuantity={false} hasTotal={false} handleButton={this.handleAddList} results={results} quantity="" button="Add this item" heading="Results" />
                <CheckerResults hasQuantity={true} hasTotal={true} handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} handleButton={this.handleCheckout} results={list} quantity="list" button="Checkout Item" heading="List" />
                <CheckerTotal listData={list} type="list"/>
                <CheckerResults hasQuantity={false} hasTotal={true} handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} handleButton={this.handleAddList} results={data} quantity="fridge" button="Remove" heading="Fridge" />
                <CheckerTotal listData={data} type="fridge"/>
            </div>
        );
    }
}); 

module.exports = Checker;