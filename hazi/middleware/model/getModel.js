/**
 * Get the values of a single model entry
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ModelModel = requireOption(objectrepository, 'ModelModel');

    return function(req, res, next) {
        ModelModel.findOne(
            {
                _id: req.params.modelid
            },
            (err, model) => {
                if (err || !model) {
                    return next(err);
                }

                res.locals.model = model;
                return next();
            }
        );
    };
};