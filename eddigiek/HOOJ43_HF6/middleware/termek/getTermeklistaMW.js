/**
 * Loads all termek entities from the database
 * The result is saved to res.locals.termeklista
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TermekModel = requireOption(objectrepository, 'TermekModel');

    return function(req, res, next) {
        if (typeof res.locals.fozde === 'undefined') {
            return next();
        }

        TermekModel.find({ _gyarto: res.locals.fozde._id }, (err, termeklista) => {
            if (err) {
                return next(err);
            }

            res.locals.termeklista = termeklista;
            return next();
        });
    };
};
