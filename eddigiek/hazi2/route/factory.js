const renderMW = require('../middleware/renderMW');
const delFactoryMW = require('../middleware/factory/delFactoryMW');
const getFactoriesMW = require('../middleware/factory/getFactoriesMW');
const getFactoryMW = require('../middleware/factory/getFactoryMW');
const saveFactoryMW = require('../middleware/factory/saveFactoryMW');

const FactoryModel = require('../model/factory');
const FactoryModel = require('../model/model');

module.exports = function (app) {
    const objRepo = {
        FactoryModel: FactoryModel,
        FactoryModel: FactoryModel
    };

    app.use('/weaponfactories/new',
        saveFactoryMW(objRepo),
        renderMW(objRepo, 'factory_edit')
    );
    app.use('/weaponfactories/edit/:factoryid',
        getFactoryMW(objRepo),
        saveFactoryMW(objRepo),
        renderMW(objRepo, 'factory_edit')
    );
    app.get('/weaponfactories/del/:factoryid',
        getFactoryMW(objRepo),
        delFactoryMW(objRepo)
    );
    app.get('/',
        getFactoriesMW(objRepo),
        renderMW(objRepo, 'factories')
    );
};