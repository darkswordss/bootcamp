/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/
var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema'), 
    config = require('./config');
mongoose.connect(config.db.uri,{useNewUrlParser:true,useUnifiedTopology: true})
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
 
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
    
   */
  
  Listing.find({ 'name': 'Library West' }, function (err, element) {
    if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host".
    console.log(element)
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

  Listing.deleteOne({ 'code': 'CABL' }, function (err, element) {
    if (err) return handleError(err);
   
    console.log(element)
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({ 'code': 'PHL' },{$set:{name:"Phelps Memorial"}}, function (err, element) {
    if (err) return handleError(err);
    
    element.name='Phelps Memorial';
    console.log(element)
  });
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, docs) {
    if (!err){ 
        console.log(docs);
        process.exit();
    } else {throw err;}
});
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
