/**
 * Delete a single model entry
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.model === 'undefined') {
            return next();
        }

        res.locals.model.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/model/${res.locals.factory._id}`);
        });
     };
 };