const delFactory = require('../middleware/factory/delFactory');
const getFactories = require('../middleware/factory/getFactories');
const getFactory = require('../middleware/factory/getFactory');
const saveFactory = require('../middleware/factory/saveFactory');
const delModel = require('../middleware/model/delModel');
const getModel = require('../middleware/model/gegtModel');
const getModels = require('../middleware/model/getModels');
const saveModel = require('../middleware/model/saveModel');
const render = require('../middleware/generic/render');

module.exports = function (app){

    app.use('weaponfactories',
        getFactories(),
        render('companies'));
    
    app.use('/weaponfactories/new',
        saveFactory(),
        render('companies_edit'));
    
    app.use('/weaponfactories/edit/:factoryid',
        getFactory(),
        saveFactory(),
        render('companies_edit'));
    
    app.use('weaponfactories/del/:factoryid',
        getFactory(),
        delFactory());
    
    app.use('weaponmodels/:factoryid',
        getModels(),
        render('models'));
    
    app.use('weaponmodels/:factoryid/new',
        saveModel(),
        render('models_edit'));

    app.use('weaponmodels/:factoryid/:modelid',
        getModel(),
        saveModel(),
        render('models_edit'));
    
    app.use('weaponmodels/:factoryid/:modelid/del',
        getModel(),
        delModel());
};
