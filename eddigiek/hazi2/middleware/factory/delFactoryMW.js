/*
 * Removes a fozde from the database, based on the value of res.locals.fozde
 * Redirects to /fozde after delete
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.factory === 'undefined') {
            return next();
        }

        res.locals.factory.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};
