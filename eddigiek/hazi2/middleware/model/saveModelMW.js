/**
 * Using POST params to update or save a termek in the database
 * - If res.locals.termek exists there, this MW updates it
 * - Otherwise this MW creates a new termek 
 * Redirects to /termek/:fozdeid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ModelModel = requireOption(objectrepository, 'ModelModel');
    
    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.caliber === 'undefined' ||
            typeof req.body.sold === 'undefined' ||
            typeof req.body.developmentYear === 'undefined' ||
            typeof res.locals.factory === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.model === 'undefined') {
            res.locals.model = new ModelModel();
        }

        if (Number.isNaN(parseInt(req.body.sold, 10))) {
            return next(new Error('sold must be a number!'));
        }

        if (Number.isNaN(parseInt(req.body.developmentYear, 10))) {
            return next(new Error('developmentYear must be a number!'));
        }

        res.locals.model.name = req.body.name;
        res.locals.model.caliber = req.body.caliber;
        res.locals.model.sold = req.body.sold;
        res.locals.model.developmentYear = req.body.developmentYear;
        res.locals.model._producer = res.locals.factory._id;

        res.locals.model.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/weaponmodels/${res.locals.factory._id}`);
        });
    };
};
