var React               = require('react');
var CheckerCamera       = require("CheckerCamera");
var CheckerMessage      = require("CheckerMessage");
var CheckerForm         = require("CheckerForm");
var CheckerResults      = require("CheckerResults");
var Button              = require("Button");
var TescoApi            = require("TescoApi");


function containsObject(obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    return true;
                }
            }
        
            return false;
        }

var Checker = React.createClass({
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
        
        var list = this.state.list;
        
        if( typeof item.quantity != 'number' ){
            item.quantity = 1;
        }
    
        
        if( !containsObject(item, list)){
            list.push(item);
        
            that.setState({
                list,
                message: "You added " + item.name + " to the fridge"
            })
            
        }else{
            item.quantity++;
            that.setState(({
                list,
                message: "You added another " + item.name + " in the fridge!"
            }))
        }
        
    },
    handleCheckout: function(item){
      var that = this;
        
      var list = this.state.list;
      var index = list.indexOf(item);
      var data = this.state.data;
      
      data.push(item);
      
        if (index > -1) {
          list.splice(index, 1);
        }
          
      that.setState({
          data,
          list
      })
    },
    render: function () {

        var {message, data, results, list} = this.state;

        return (
            <div>
                <CheckerMessage message={message}/>
                <CheckerForm onSearch={this.handleSearch} />
                <CheckerResults handleButton={this.handleAddList} results={results} button="Add this item" heading="Results" />
                <CheckerResults handleButton={this.handleCheckout} results={list} button="Checkout Item" heading="List" />
                <CheckerResults handleButton={this.handleAddList} results={data} button="Remove" heading="Fridge" />
            </div>
        );
    }
}); 

module.exports = Checker;


        // var that = this;
        
        // if( items.hasOwnProperty(item) ){
        //     that.setState({
        //         item: item,
        //         message: "Looks like we have that!",
        //         quantity: "we have " + items[item] + " of those",
        //         extra: true
        //     })
        // }else{
        //     that.setState({
        //         item: item,
        //         message: "Doesn't look like we have any of those",
        //         quantity: '',
        //         extra: true
        //     })
        // };


        // var button = null;
        // var add = null;
        
        // if(extra){
        //             button =    <div>
        //                             <p>Do you want to add this?</p>
        //                             <Button add={this.handleAdd}/>
        //                         </div>
        //         }else{
        //             button = <div></div>
        //         }
                
        //         if(add){
        //             add =    <div>
        //                             <p>hello</p>
        //                         </div>
        //         }else{
        //             add = <div></div>
        //         }