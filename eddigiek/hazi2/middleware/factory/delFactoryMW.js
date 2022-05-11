/*
 * Removes a fozde from the database, based on the value of res.locals.fozde
 * Redirects to /fozde after delete
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const ModelModel = requireOption(objectrepository, 'ModelModel');
    return function(req, res, next) {
        if (typeof res.locals.factory === 'undefined') {
            return next();
        }

        /* a törlendő főzde termékeinek törlése 
           (utólag elérhetelenek lennének a webes felületről) */
        ModelModel.find({ _producer: res.locals.factory._id }, (err, modelList) => {
            if (err) {
                return next(err);
            }
            modelList.forEach(deleteOne);
        });

        res.locals.factory.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });

        /* függvény egy termék törlésére */
        function deleteOne(value) {
            value.remove(err => {
                if (err) {
                    return next(err);
                }
            });
        };
    };
};
