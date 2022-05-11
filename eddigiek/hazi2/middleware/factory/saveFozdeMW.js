/**
 * Using POST params to update or save a fozde in the database
 * - If res.locals.fozde exists there, this MW updates it
 * - Otherwise this MW creates a new fozde 
 * Redirects to / after success
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
    const FactoryModel = requireOption(objectrepository, 'FactoryModel');

    return function(req, res, next) {

        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.country === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.factory === 'undefined') {
            res.locals.factory = new FactoryModel();
        }

        res.locals.factory.name = req.body.name;
        res.locals.factory.country = req.body.country;

        res.locals.factory.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};
