const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51HzRB6FXQdX7lmvWuuR5Vps43XA0nIsZOPv8JF1NrebMQPu8zRpdzl0wRMMH7Rz6nlh3rHhn1k9jKrzQWaL1tJZD00CK2PwLWk')
const { v4: uuidv4 } = require('uuid');
// Getting Module
const Property_Model = require('../models/Property');
const FloorPlan_Model = require('../models/FloorPlan');
const FavoriteFloor_Model = require('../models/Favorite');
const Payment_Model = require('../models/Payment');

// TEST
// @GET TEST
// GET 
router.get('/test', (req, res) => {
    res.send("Working");
});

// Database CRUD Operations
// @POST Request to the Payment
// POST 
router.post('/charges', async (req, res) => {
    const {email, amount} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
        receipt_email: email,
    });
    res.json({'client_secret': paymentIntent['client_secret']})
});


// Database CRUD Operations
// @POST Request to send questions
// POST 
router.post('/addnewproperty', (req, res) => {
    const { name, price, bedroom, kitchen, garden, restroom, address, googlemaps, about, photoDownloadUrl1, photoDownloadUrl2, photoDownloadUrl3, photoDownloadUrl4, photoDownloadUrl5, photoDownloadUrl6, photoDownloadUrl7, category, percentage, amountCharged } = req.body;
    const newProperty = new Property_Model({
        name,
        price,
        percentage,
        amountCharged,
        bedroom,
        kitchen,
        garden,
        restroom,
        address,
        googlemaps,
        about,
        photoDownloadUrl1,
        photoDownloadUrl2,
        photoDownloadUrl3,
        photoDownloadUrl4,
        photoDownloadUrl5,
        photoDownloadUrl6,
        photoDownloadUrl7,
        category
    });
    newProperty.save()
        .then((data) => {
            res.status(200)
        })
        .catch(err => console.log(err))
});

// Database CRUD Operations
// @POST Request to Add a New Floor Plan
// POST 
router.post('/addnewfloorplan', (req, res) => {
    const { suite, price, sqft, baths, maintenance, floor, occupancy, propertytax, view, photoDownloadUrl1 } = req.body;
    const newFloorPlan = new FloorPlan_Model({
        suite,
        price,
        sqft,
        baths,
        maintenance,
        floor,
        occupancy,
        propertytax,
        view,
        photo: photoDownloadUrl1
    });
    newFloorPlan.save()
        .then((data) => {
            res.status(200)
        })
        .catch(err => console.log(err))
});


// Database CRUD Operations
// @POST Request to GET Unlock from Me
// GET 
router.get('/getallproperty', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Property_Model.find({}).sort({date: -1})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
});

// Database CRUD Operations
// @POST Request to GET Unlock from Me
// GET 
router.get('/getallfloorplan', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    FloorPlan_Model.find({}).sort({date: -1})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => console.log(err))
});

// Database CRUD Operations
// @POST Request to GET Unlock from Me
// GET 
router.get('/getproperty/:search', (req, res) => {
    const { search } = req.params;
    res.setHeader('Content-Type', 'application/json');

    if ( search === "detached" ) {
        Property_Model.find({ category: 'Detached House' }).sort({date: -1})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => console.log(err)) 
    } else if ( search === "condominium" ) {
        Property_Model.find({ category: 'Condominium' }).sort({date: -1})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => console.log(err)) 
    } else if ( search === "town" ) {
        Property_Model.find({ category: 'Town House' }).sort({date: -1})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => console.log(err)) 
    } else {
        Property_Model.find({}).sort({date: -1})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => console.log(err))
    }

    
});

// Database CRUD Operations
// @POST Request to GET the Property
// GET 
router.get('/getpropertydetails/:id', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    Property_Model.findOne({ '_id': id }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Database CRUD Operations
// @POST Request to GET the Property
// GET 
router.get('/getfloordetails/:id', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    FloorPlan_Model.findOne({ '_id': id }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Database CRUD Operations
// @POST Request to Add a Favorite Floor
// POST 
router.post('/addtofavoritefloor', (req, res) => {
    const { floorId, userId, suite, price, sqft } = req.body;
    FavoriteFloor_Model.countDocuments({'userId': userId, 'floorId': floorId})
        .then((count) => {
            if (count === 0) {
                const newFavoriteFloorPlan = new FavoriteFloor_Model({
                    floorId,
                    userId,
                    suite,
                    price,
                    sqft
                });
                newFavoriteFloorPlan.save()
                    .then((data) => {
                        res.status(200)
                    })
                    .catch(err => console.log(err))
            }
        })
});

// Database CRUD Operations
// @POST Request to GET the user Favorites Floor Plan
// GET 
router.get('/getallfloorfavorite/:id', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    FavoriteFloor_Model.find({ 'userId': id }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});



// Database CRUD Operations
// @POST Request to send questions
// POST 
router.post('/paymentsuccessfull', (req, res) => {
    const { transactionId, email, fullName, address, phone, properties } = req.body;
    res.setHeader('Content-Type', 'application/json');
    Payment_Model.countDocuments({'propertyId': properties._id, email})
        .then((count) => {
            if (count === 0) {
                const newProperty = new Payment_Model({
                    propertyId: properties._id,
                    transactionId,
                    email,
                    fullName,
                    address,
                    phone,
                    properties
                });
                newProperty.save()
                    .then((data) => {
                        res.status(200)
                    })
                    .catch(err => console.log(err))
            }
        })
});


// Database CRUD Operations
// @POST Request to GET the user Reserved Properties
// GET 
router.get('/getallreservedproperty/:email', (req, res) => {
    const { email } = req.params;
    res.setHeader('Content-Type', 'application/json');
    Payment_Model.find({ email }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});


// Database CRUD Operations
// @POST Request to GET the all Reserved Properties
// GET 
router.get('/getalladminreservedproperty', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Payment_Model.find().sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});


// Database CRUD Operations
// @POST Request to GET the user Oder Property Details
// GET 
router.get('/getorderdetails/:id', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    Payment_Model.find({ '_id': id }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Database CRUD Operations
// @POST Request to GET the user Oder Property Details
// GET 
router.get('/getpropertydetailsadmin/:id', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    Property_Model.find({ '_id': id }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});


// Database CRUD Operations
// @DELETE Request to get all the Property
// DELETE
router.get('/deleteproperty/:id', (req, res) => {
    const { id } = req.params;
    Property_Model.findOneAndDelete({ '_id': id })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
});


// Database CRUD Operations
// @POST Request to GET the user Floor Plan
// GET 
router.get('/getfloorinfodetailsadmin/:id', (req, res) => {
    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    FloorPlan_Model.find({ '_id': id }).sort({date: -1})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Database CRUD Operations
// @DELETE Request to get all the Floor Plan
// DELETE
router.get('/deletefloorinfo/:id', (req, res) => {
    const { id } = req.params;
    FloorPlan_Model.findOneAndDelete({ '_id': id })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
});

module.exports = router;