/**
 * Load all fozde entities from the database
 * The result is saved to res.locals.fozdelista
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const FozdeModel = requireOption(objectrepository, 'FozdeModel');

    return function(req, res, next) {
        FozdeModel.find({}, (err, fozdelista) => {
            if (err) {
                return next(err);
            }

            res.locals.fozdelista = fozdelista;
            return next();
        });
    };
};
