/**
 * poiRouter.js - Router for handling poi-related routes.
 * This router handles routes for retrieving poi data
 */

// Import required modules
const express = require('express');
const router = express.Router();
const poiModel = require('../models/poiModel');
const userModel = require('../models/userModel');

/**
 * Route to retrieve all POIs
 */
router.get('/', async (req, res) => {
    if((!userModel.validSessionKey(req.query.key)) || (req.query.key === undefined)){ // Check if the session key is valid (i.e., the user is signed in)
        res.status(401).send({ message: 'Invalid session key'});
    }else{
        try{
            const pois = await poiModel.getAll();
            res.status(200).json(pois);
        }catch(error){
            res.status(500).send({ message: error.message });
        }
    }
});

/**
 * Route to retrieve Trailheads (Starting Points)
 */
router.get('/trailhead', async (req, res) => {
    if((!userModel.validSessionKey(req.query.session_key)) || (req.query.session_key === undefined)){ // Check if the session key is valid (i.e., the user is signed in)
        res.status(401).send({ message: 'Invalid session key'});
    }else{
        try{
            const trailheads = await poiModel.getTrailheads();
            res.status(200).json(trailheads);
        }catch(error){
            res.status(500).send({ message: error.message });
        }
    }
});

/**
 * Route to retrieve all daily POI usage
 */
router.get('/allUsage', async (req, res) => {
    if((!userModel.validSessionKey(req.query.session_key)) || (req.query.session_key === undefined)){ // Check if the session key is valid (i.e., the user is signed in)
        res.status(401).send({ message: 'Invalid session key'});
    }else{
        try{
            const data = await poiModel.getAllUsage();
            res.status(200).json(data);
        }catch(error){
            res.status(500).send({ message: error.message });
        }
    }
});

/**
 * Route to retrieve total POI usage
 */
router.get('/totalUsage', async (req, res) => {
    try{
        const requiredFilterParams = ['step', 'from', 'to', 'types', 'min', 'max', 'pois'];
        const missingFilterParams = requiredFilterParams.filter(param => !(param in req.query));
        if((!userModel.validSessionKey(req.query.session_key)) || (req.query.session_key === undefined)){ // Check if the session key is valid (i.e., the user is signed in)
            res.status(401).send({ message: 'Invalid session key'});
        }
        if(missingFilterParams.length === 0){
            const usage = await poiModel.getTotalUsage(req.query.step, req.query.from, req.query.to, req.query.types, req.query.pois, req.query.min, req.query.max);
            res.status(200).json(usage);
        }else{
            res.send({ message: 'Not all requied query parameters (step, from, to, types, pois, min, and max) were provided'});
        }
    }catch(error){
        res.status(500).send({ message: error.message });
    }
});

/**
 * Route to retrieve average POI usage
 */
router.get('/averageUsage', async (req, res) => {
    try{
        const requiredFilterParams = ['step', 'from', 'to', 'types', 'min', 'max', 'pois'];
        const missingFilterParams = requiredFilterParams.filter(param => !(param in req.query));
        if((!userModel.validSessionKey(req.query.session_key)) || (req.query.session_key === undefined)){ // Check if the session key is valid (i.e., the user is signed in)
            res.status(401).send({ message: 'Invalid session key'});
        }
        if(missingFilterParams.length === 0){
            const usage = await poiModel.getAverageUsage(req.query.step, req.query.from, req.query.to, req.query.types, req.query.pois, req.query.min, req.query.max);
            res.status(200).json(usage);
        }else{
            res.send({ message: 'Not all requied query parameters (step, from, to, types, pois, min, and max) were provided'});
        }
    }catch(error){
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
