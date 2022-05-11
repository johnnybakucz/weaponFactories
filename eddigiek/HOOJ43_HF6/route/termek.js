const renderMW = require('../middleware/renderMW');
const getFozdeMW = require('../middleware/fozde/getFozdeMW');
const delTermekMW = require('../middleware/termek/delTermekMW');
const getTermeklistaMW = require('../middleware/termek/getTermeklistaMW');
const getTermekMW = require('../middleware/termek/getTermekMW');
const saveTermekMW = require('../middleware/termek/saveTermekMW');
const saveTriedMW = require('../middleware/termek/saveTriedMW');

const TermekModel = require('../model/termek');
const FozdeModel = require('../model/fozde');

module.exports = function (app) {
    const objRepo = {
        FozdeModel: FozdeModel,
        TermekModel: TermekModel
    };

    app.use('/termek/:fozdeid/uj',
        getFozdeMW(objRepo),
        saveTermekMW(objRepo),
        renderMW(objRepo, 'termek_szerk')
    );
    app.use('/termek/:fozdeid/szerk/:termekid',
        getFozdeMW(objRepo),
        getTermekMW(objRepo),
        saveTermekMW(objRepo),
        renderMW(objRepo, 'termek_szerk')
    );
    app.get('/termek/:fozdeid/torles/:termekid',
        getFozdeMW(objRepo),
        getTermekMW(objRepo),
        delTermekMW(objRepo)
    );
    app.use('/termek/:fozdeid/kostolva/:termekid/',
        getFozdeMW(objRepo),
        getTermekMW(objRepo),
        saveTriedMW(objRepo, true)
    );
    app.use('/termek/:fozdeid/nem_kostolva/:termekid/',
        getFozdeMW(objRepo),
        getTermekMW(objRepo),
        saveTriedMW(objRepo, false)
    );
    app.get('/termek/:fozdeid',
        getFozdeMW(objRepo),
        getTermeklistaMW(objRepo),
        renderMW(objRepo, 'termeklista')
    );    
};