var axios = require("axios");

var key = 'f736507c07904df89265c07c3620a044';

const TESCO_API_URL = 'https://dev.tescolabs.com/grocery/products/?';
const TESCO_BARCODE = 'https://dev.tescolabs.com/product/?gtin=';

module.exports = {
    
    getProduct: function (product){
        var prodcut = encodeURIComponent(product);
        var requestUrl = `${TESCO_API_URL}query=${product}&offset=0&limit=10`;
        
        return axios.get(requestUrl , {
            
            headers: { "Ocp-Apim-Subscription-Key": key }
            
        }).then(function(res){
            
            console.log(res.data.uk.ghs.products.results);
            return {
                results: res.data.uk.ghs.products.results
            };
            
        }, function(res) {
            throw new Error(res.data.message);
        });
    },
    scanProduct: function (barcode){
        var requestUrl = TESCO_BARCODE + barcode;
        
        return axios.get(requestUrl, {
            headers: { "Ocp-Apim-Subscription-Key": key }
        }).then(function(res){
            console.log(res);
            
            var newDiv = document.createElement("div");
            newDiv.write(res);
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}