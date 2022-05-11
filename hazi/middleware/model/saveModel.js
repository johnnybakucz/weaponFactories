/**
 * Save the model values from the form submitted
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const ModelModel = requireOption(objectrepository, 'ModelModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.caliber === 'undefined' ||
            typeof req.body.sold === 'undefined' ||
            typeof req.body.developmentYear === 'undefined' ||
            typeof req.body.inProduction === 'undefined' ||
            typeof res.locals.factory === 'undefined'
        ) {
            console.log("undefined dolgok a save model middleware-ben")
            return next();
        }

        if (typeof res.locals.model === 'undefined') {
            res.locals.model = new ModelModel();
        }

        // if (Number.isNaN(parseInt(req.body.sold, 10))) {
        //     return next(new Error('Number sold must be a number!'));
        // }

        // if (Number.isNaN(parseInt(req.body.developmentYear, 10))) {
        //     return next(new Error('Development year must be a number!'));
        // }

        res.locals.model.name = req.body.name;
        res.locals.model.caliber = req.body.caliber;
        res.locals.model.sold = parseInt(req.body.sold,10);
        res.locals.model.developmentYear = parseInt(req.body.developmentYear,10);
        res.locals.model.inProduction = req.body.inProduction;
        res.locals.model._producer = res.locals.factory._id;

        console.log(res.locals.factory._id)
        res.locals.model.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/weaponmodels/${res.locals.factory._id}`);
        });
    };
 };