const renderMW = require('../middleware/renderMW');
const delFozdeMW = require('../middleware/fozde/delFozdeMW');
const getFozdelistaMW = require('../middleware/fozde/getFozdelistaMW');
const getFozdeMW = require('../middleware/fozde/getFozdeMW');
const saveFozdeMW = require('../middleware/fozde/saveFozdeMW');

const FozdeModel = require('../model/fozde');
const TermekModel = require('../model/termek');

module.exports = function (app) {
    const objRepo = {
        FozdeModel: FozdeModel,
        TermekModel: TermekModel
    };

    app.use('/fozde/uj',
        saveFozdeMW(objRepo),
        renderMW(objRepo, 'fozde_szerk')
    );
    app.use('/fozde/szerk/:fozdeid',
        getFozdeMW(objRepo),
        saveFozdeMW(objRepo),
        renderMW(objRepo, 'fozde_szerk')
    );
    app.get('/fozde/torles/:fozdeid',
        getFozdeMW(objRepo),
        delFozdeMW(objRepo)
    );
    app.get('/',
        getFozdelistaMW(objRepo),
        renderMW(objRepo, 'fozdelista')
    );
};