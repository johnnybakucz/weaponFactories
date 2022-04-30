/**
 * Load all model entries
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const ModelModel = requireOption(objectrepository, 'ModelModel');

    return function(req, res, next) {
        if (typeof res.locals.factory === 'undefined') {
            return next();
        }

        ModelModel.find({ _producer: res.locals.factory._id }, (err, models) => {
            if (err) {
                return next(err);
            }

            res.locals.models = models;
            return next();
        });
    };
 };