/*
 * Removes a fozde from the database, based on the value of res.locals.fozde
 * Redirects to /fozde after delete
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const TermekModel = requireOption(objectrepository, 'TermekModel');
    return function(req, res, next) {
        if (typeof res.locals.fozde === 'undefined') {
            return next();
        }

        /* a törlendő főzde termékeinek törlése 
           (utólag elérhetelenek lennének a webes felületről) */
        TermekModel.find({ _gyarto: res.locals.fozde._id }, (err, termeklista) => {
            if (err) {
                return next(err);
            }
            termeklista.forEach(deleteOne);
        });

        res.locals.fozde.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });

        /* függvény egy termék törlésére */
        function deleteOne(value, index, array) {
            value.remove(err => {
                if (err) {
                    return next(err);
                }
            });
        };
    };
};
