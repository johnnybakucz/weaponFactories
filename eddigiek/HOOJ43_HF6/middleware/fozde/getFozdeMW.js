/**
 * Load a fozde from the database based on the :fozdeid parameter
 * If that fozde does not exist, redirect to /
 * The result is saved to res.locals.fozde
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
    const FozdeModel = requireOption(objectrepository, 'FozdeModel');

    return function(req, res, next) {
        FozdeModel.findOne(
            {
                _id: req.params.fozdeid
            }, 
            (err, fozde) => {
                if (err || !fozde) {
                    return next(err);
                }

                res.locals.fozde = fozde;
                return next();
            }
        );
    };
};
