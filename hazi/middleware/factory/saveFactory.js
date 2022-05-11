/**
 * Save the values submitted by the form
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const FactoryModel = requireOption(objectrepository, 'FactoryModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.country === 'undefined' ||
            typeof req.body.worth === 'undefined' ||
            typeof req.body.estabilished === 'undefined' ||
            typeof req.body.noModels === 'undefined' ||
            typeof req.body.active === 'undefined' 
        ) {
            return next();
        }

        if (typeof res.locals.factory === 'undefined') {
            res.locals.factory = new FactoryModel();
        }

        res.locals.factory.name = req.body.name;
        res.locals.factory.country = req.body.country;
        res.locals.factory.worth = req.body.worth;
        res.locals.factory.estabilished = req.body.estabilished;
        res.locals.factory.noModels = req.body.noModels;
        res.locals.factory.active = req.body.active;

        res.locals.factory.save(err => {
            if (err) {
                return next(err);
            }
            
            return res.redirect('/');
        });
    };
};