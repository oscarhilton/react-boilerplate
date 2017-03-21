 var mongoose = require("mongoose");
 var Schema = mongoose.Schema();
 
    var itemSchema = mongoose.Schema({
        name: String,
        quantity: Number
    });
    
    var Item = mongoose.model('Item', itemSchema);
    
    var carrot = new Item({ name: 'Carrot', quantity: '3' });
    
    console.log(carrot.name, carrot.quantity); 
    