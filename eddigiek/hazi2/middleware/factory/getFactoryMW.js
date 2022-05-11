/**
 * Load a fozde from the database based on the :fozdeid parameter
 * If that fozde does not exist, redirect to /
 * The result is saved to res.locals.fozde
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
    const FactoryModel = requireOption(objectrepository, 'FactoryModel');

    return function(req, res, next) {
        FactoryModel.findOne(
            {
                _id: req.params.factoryid
            }, 
            (err, factory) => {
                if (err || !factory) {
                    return next(err);
                }

                res.locals.factory = factory;
                return next();
            }
        );
    };
};
