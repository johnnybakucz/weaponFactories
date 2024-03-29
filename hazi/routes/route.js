const delFactory = require('../middleware/factory/delFactory');
const getFactories = require('../middleware/factory/getFactories');
const getFactory = require('../middleware/factory/getFactory');
const saveFactory = require('../middleware/factory/saveFactory');
const delModel = require('../middleware/model/delModel');
const getModel = require('../middleware/model/getModel');
const getModels = require('../middleware/model/getModels');
const saveModel = require('../middleware/model/saveModel');
const render = require('../middleware/generic/render');

const ModelModel = require('../models/model');
const FactoryModel = require('../models/factory');

module.exports = function (app){
    const objRepo = {
        ModelModel : ModelModel,
        FactoryModel : FactoryModel
    };
    
    app.use('/weaponfactories/new',
        saveFactory(objRepo),
        render(objRepo,'companies_edit'));
    
    app.use('/weaponfactories/edit/:factoryid',
        getFactory(objRepo),
        saveFactory(objRepo),
        render(objRepo,'companies_edit'));
    
    app.get('/weaponfactories/del/:factoryid',
        getFactory(objRepo),
        delFactory(objRepo));
    
    app.get('/weaponfactories',
        getFactories(objRepo),
        render(objRepo, 'companies'));
    
    app.use('/weaponmodels/:factoryid/new',
        getFactory(objRepo),
        saveModel(objRepo),
        render(objRepo,'models_edit'));

    app.use('/weaponmodels/:factoryid/:modelid',
        getFactory(objRepo),
        getModel(objRepo),
        saveModel(objRepo),
        render(objRepo,'models_edit'));
    
    app.get('/weaponmodels/:factoryid/:modelid/del',
        getFactory(objRepo),
        getModel(objRepo),
        delModel(objRepo),
        render(objRepo, 'models_edit'));
    
    app.get('/weaponmodels/:factoryid',
        getFactory(objRepo),
        getModels(objRepo),
        render(objRepo,'models'));
    
    app.use('/',
        getFactories(objRepo),
        render(objRepo, 'companies'));
};
