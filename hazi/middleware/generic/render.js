/**
 * Using a template, render the values into it
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        res.render(viewName);
    };
};