/**
 * Using POST params update the kostolva attribute of a termek in the database
 * Redirects to /termek/:fozdeid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository, checked) {
    return function(req, res, next) {
        if (typeof res.locals.model === 'undefined') {
            return next();
        }

        if(checked){
            res.locals.model.active = true;
        }
        else {
            res.locals.model.active = false;
        }
        
        res.locals.model.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/weaponmodels/${res.locals.factory._id}`);
        });
    };
};