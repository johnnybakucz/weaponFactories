/**
 * Using POST params to update or save a termek in the database
 * - If res.locals.termek exists there, this MW updates it
 * - Otherwise this MW creates a new termek 
 * Redirects to /termek/:fozdeid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TermekModel = requireOption(objectrepository, 'TermekModel');
    
    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.tipus === 'undefined' ||
            typeof req.body.alkohol === 'undefined' ||
            typeof req.body.keseruseg === 'undefined' ||
            typeof res.locals.fozde === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.termek === 'undefined') {
            res.locals.termek = new TermekModel();
        }

        res.locals.termek.nev = req.body.nev;
        res.locals.termek.tipus = req.body.tipus;
        res.locals.termek.alkohol = req.body.alkohol;
        res.locals.termek.keseruseg = req.body.keseruseg;
        res.locals.termek._gyarto = res.locals.fozde._id;

        res.locals.termek.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/termek/${res.locals.fozde._id}`);
        });
    };
};
