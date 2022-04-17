const delFactory = require('../middleware/factory/delFactory');
const getFactories = require('../middleware/factory/getFactories');
const getFactory = require('../middleware/factory/getFactory');
const saveFactory = require('../middleware/factory/saveFactory');
const delModel = require('../middleware/model/delModel');
const getModel = require('../middleware/model/getModel');
const getModels = require('../middleware/model/getModels');
const saveModel = require('../middleware/model/saveModel');
const render = require('../middleware/generic/render');

module.exports = function (app){
    const objRepo = {};
    
    app.use('/weaponfactories/new',
        saveFactory(objRepo),
        render(objRepo,'companies_edit'));
    
    app.use('/weaponfactories/edit/:factoryid',
        getFactory(objRepo),
        saveFactory(objRepo),
        render(objRepo,'companies_edit'));
    
    app.use('weaponfactories/del/:factoryid',
        getFactory(objRepo),
        delFactory(objRepo));
    
    app.use('weaponfactories',
        getFactories(objRepo),
        render(objRepo, 'companies'));
    
    app.use('weaponmodels/:factoryid/new',
        saveModel(objRepo),
        render(objRepo,'models_edit'));

    app.use('weaponmodels/:factoryid/:modelid',
        getModel(objRepo),
        saveModel(objRepo),
        render(objRepo,'models_edit'));
    
    app.use('weaponmodels/:factoryid/:modelid/del',
        getModel(objRepo),
        delModel(objRepo));
    
    app.use('weaponmodels/:factoryid',
        getModels(objRepo),
        render(objRepo,'models'));
    
};
