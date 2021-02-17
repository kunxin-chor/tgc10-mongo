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

// finding by criteria


// find all listings with exactly 5 beds
db.listingsAndReviews.find({
    beds:5
},{
    name: 1,
    beds: 1
}).pretty()

// find by a key in an embedded document
// (aka sub-document, aka nested object)
// find all listings in Brazil
db.listingsAndReviews.find({
    'address.country':'Brazil'
},{
    name: 1,
    'address.country': 1    
}).pretty()

// multiple critera
// find listings that have 5 beds
// and 5 bedrooms
db.listingsAndReviews.find({
    beds: 5,
    bedrooms: 5
}, {
    name: 1,
    beds: 1,
    bedrooms:1
}).pretty()

// find listings with 5 beds and 5 bedrooms
// and in Brazil
db.listingsAndReviews.find({
    beds: 5,
    bedrooms: 5,
    'address.country':'Brazil'
}, {
    beds: 1,
    bedrooms: 1,
    'address.country':1,
    name: 1
}).pretty()

// we want to find listings that have more than 3 beds
db.listingsAndReviews.find({
    beds: {
        '$gt': 3
    }
}, {
    name:1,
    beds:1
}).pretty()

// find listings with less than 4 beds
db.listingsAndReviews.find({
    beds: {
        '$lt': 4
    }
},{
    name: 1,
    beds: 1
}).pretty()

// find listings that have 4 to 8 beds
db.listingsAndReviews.find({
    beds: {
        '$gte': 4,
        '$lte': 8
    }
}, {
    name: 1,
    beds: 1
})