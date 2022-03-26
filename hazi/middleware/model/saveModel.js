/**
 * Save the model values from the form submitted
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         next();
     };
 };