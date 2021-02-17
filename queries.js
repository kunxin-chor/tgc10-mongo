// see all the databases
show databases

// we want to use an existing database
use sample_airbnb

// see all the collections
show collections

// display ALL documents from a collection
// db.<collection>.find()

db.listingsAndReviews.find();

// prettifiy the output
db.listingsAndReviews.find().pretty()

// projecting
// select which keys to display
db.listingsAndReviews.find({},{
    name: 1,
    address: 1
}).pretty()

// project a key of an embedd document
db.listingsAndReviews.find({},{
    name: 1,
    'address.country': 1
}).pretty()