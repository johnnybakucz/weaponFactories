/**
 * Get the values of a single factory entry
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const FactoryModel = requireOption(objectrepository, 'FactoryModel');

    return function(req, res, next) {
        FactoryModel.findOne({ _id: req.params.factoryid }, (err, factory) => {
            if (err || !factory) {
                console.log("nem találom a gyárat!");
                return next(err);
            }

            res.locals.factory = factory;
            return next();
        });
    };
 };