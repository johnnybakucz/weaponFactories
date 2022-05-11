/**
 * Loads all termek entities from the database
 * The result is saved to res.locals.termeklista
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ModelModel = requireOption(objectrepository, 'ModelModel');

    return function(req, res, next) {
        if (typeof res.locals.factory === 'undefined') {
            return next();
        }

        ModelModel.find({ _producer: res.locals.factory._id }, (err, modelList) => {
            if (err) {
                return next(err);
            }

            res.locals.modelList = modelList;
            return next();
        });
    };
};
