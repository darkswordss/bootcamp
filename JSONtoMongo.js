'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema'), 
    config = require('./config');

    var listingData, id;
    


    

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
mongoose.connect(config.db.uri,{useNewUrlParser:true,useUnifiedTopology: true})

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  
  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
  
 fs.readFile('listings.json', 'utf8', function(err, data) {

 
  if (err) {
    console.log(err); }
  else{
      listingData=JSON.parse(data);
      
      listingData.entries.forEach(function(element) {
        var obj = new Listing();
        obj.code=element.code;
        obj.name=element.name;
        obj.coordinates=element.coordinates;
        obj.address=element.address;
        // console.log(obj);
        obj.save(function (err) {if (err) console.log ('Error on save!')});
       



      
      
      
       });
       
    
  }
  
})

