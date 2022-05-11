/**
 * Using POST params to update or save a fozde in the database
 * - If res.locals.fozde exists there, this MW updates it
 * - Otherwise this MW creates a new fozde 
 * Redirects to / after success
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
    const FozdeModel = requireOption(objectrepository, 'FozdeModel');

    return function(req, res, next) {

        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.telepules === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.fozde === 'undefined') {
            res.locals.fozde = new FozdeModel();
        }

        res.locals.fozde.nev = req.body.nev;
        res.locals.fozde.telepules = req.body.telepules;

        res.locals.fozde.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};
