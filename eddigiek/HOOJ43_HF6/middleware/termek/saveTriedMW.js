/**
 * Using POST params update the kostolva attribute of a termek in the database
 * Redirects to /termek/:fozdeid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository, checked) {
    return function(req, res, next) {
        if (typeof res.locals.termek === 'undefined') {
            return next();
        }

        if(checked){
            res.locals.termek.kostolva = true;
        }
        else {
            res.locals.termek.kostolva = false;
        }
        
        res.locals.termek.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/termek/${res.locals.fozde._id}`);
        });
    };
};