/**
 * Load a termek from the database using the :termekid parameter
 * The result is saved to res.locals.termek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TermekModel = requireOption(objectrepository, 'TermekModel');

    return function(req, res, next) {
        TermekModel.findOne(
            {
                _id: req.params.termekid
            },
            (err, termek) => {
                if (err || !termek) {
                    return next(err);
                }

                res.locals.termek = termek;
                return next();
            }
        );
    };
};
