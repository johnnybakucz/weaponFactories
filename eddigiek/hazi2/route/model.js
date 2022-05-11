const renderMW = require('../middleware/renderMW');
const getFactoryMW = require('../middleware/factory/getFactoryMW');
const delModelMW = require('../middleware/model/delModelMW');
const getModelsMW = require('../middleware/model/getModelsMW');
const getModelMW = require('../middleware/model/getModelMW');
const saveModelMW = require('../middleware/model/saveModelMW');
const saveActiveMW = require('../middleware/model/saveActiveMW');

const ModelModel = require('../model/model');
const FactoryModel = require('../model/factory');

module.exports = function (app) {
    const objRepo = {
        FactoryModel: FactoryModel,
        ModelModel: ModelModel
    };

    app.use('/weaponmodels/:factoryid/new',
        getFactoryMW(objRepo),
        saveModelMW(objRepo),
        renderMW(objRepo, 'model_edit')
    );
    app.use('/weaponmodels/:factoryid/edit/:modelid',
        getFactoryMW(objRepo),
        getModelMW(objRepo),
        saveModelMW(objRepo),
        renderMW(objRepo, 'model_edit')
    );
    app.get('/weaponmodels/:factoryid/del/:modelid',
        getFactoryMW(objRepo),
        getModelMW(objRepo),
        delModelMW(objRepo)
    );
    app.use('/weaponmodels/:factoryid/active/:modelid/',
        getFactoryMW(objRepo),
        getModelMW(objRepo),
        saveActiveMW(objRepo, true)
    );
    app.use('/weaponmodels/:factoryid/not_active/:termekid/',
        getFactoryMW(objRepo),
        getModelMW(objRepo),
        saveActiveMW(objRepo, false)
    );
    app.get('/weaponmodels/:factoryid',
        getFactoryMW(objRepo),
        getModelsMW(objRepo),
        renderMW(objRepo, 'models')
    );    
};