/**
 * Load all fozde entities from the database
 * The result is saved to res.locals.fozdelista
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const FactoryModel = requireOption(objectrepository, 'FactoryModel');

    return function(req, res, next) {
        FactoryModel.find({}, (err, factoryList) => {
            if (err) {
                return next(err);
            }

            res.locals.factoryList = factoryList;
            return next();
        });
    };
};
