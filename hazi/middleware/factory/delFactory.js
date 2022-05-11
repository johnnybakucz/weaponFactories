/**
 * Delete a factory entry
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.factory === 'undefined') {
            console.log('nincsen factory, ezért nem törlöm')
            return next();
        }

        res.locals.factory.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/weaponfactories');
        });
    };
};