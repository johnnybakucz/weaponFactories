/**
 * Removes a termek from the database based on the value of: res.locals.termek
 * Redirects to /termek/:fozdeid after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.model === 'undefined') {
            return next();
        }

        res.locals.model.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/weaponmodels/${res.locals.factory._id}`);
        });
    };
};
