const delFactory = require('../middleware/factory/delFactory');
const getFactories = require('../middleware/factory/getFactories');
const getFactory = require('../middleware/factory/getFactory');
const saveFactory = require('../middleware/factory/saveFactory');
const delModel = require('../middleware/model/delModel');
const getModel = require('../middleware/model/getModel');
const getModels = require('../middleware/model/getModels');
const saveModel = require('../middleware/model/saveModel');
const render = require('../middleware/generic/render');

const modelModel = require('../models/model');
const factoryModel = require('../models/factory');

module.exports = function (app){
    const objRepo = {
        modelModel : modelModel,
        factoryModel : factoryModel
    };
    
    app.use('/weaponfactories/new',
        saveFactory(objRepo),
        render(objRepo,'companies_edit'));
    
    app.use('/weaponfactories/edit/:factoryid',
        getFactory(objRepo),
        saveFactory(objRepo),
        render(objRepo,'companies_edit'));
    
    app.get('weaponfactories/del/:factoryid',
        getFactory(objRepo),
        delFactory(objRepo));
    
    app.get('weaponfactories',
        getFactories(objRepo),
        render(objRepo, 'companies'));
    
    app.use('weaponmodels/:factoryid/new',
        saveModel(objRepo),
        render(objRepo,'models_edit'));

    app.use('weaponmodels/:factoryid/:modelid',
        getModel(objRepo),
        saveModel(objRepo),
        render(objRepo,'models_edit'));
    
    app.get('weaponmodels/:factoryid/:modelid/del',
        getModel(objRepo),
        delModel(objRepo));
    
    app.get('weaponmodels/:factoryid',
        getModels(objRepo),
        render(objRepo,'models'));
    
};
