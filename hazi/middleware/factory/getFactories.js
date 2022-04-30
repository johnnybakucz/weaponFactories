/**
 * Load the values of all factory entries
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const FactoryModel = requireOption(objectrepository, 'FactoryModel');

    return function(req, res, next) {
        FactoryModel.find({}, (err, factories) => {
            if (err) {
                return next(err);
            }

            res.locals.factories = factories;
            return next();
        });
    };
 };