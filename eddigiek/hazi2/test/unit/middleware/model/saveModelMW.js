const expect = require('chai').expect;
const saveModelMW = require('../../../../middleware/model/saveModelMW');

describe('getModel middleware', function(){
    it('should set res.locals.model with a model object from db', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });
        mw({
            body:{
                name:'a',
                caliber:'b',
                sold:10,
                developmentYear:20
            },
            params:{
                modelid: '20'
            }
        },
        {
            locals:{
                factory:{
                    _id:'factoryid'
                },
                befott:{
                    save:(cb)=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
                expect(where).to.be.eql('factoryid')
                done();
            }
        },
        (err)=>{
        });
    });
});