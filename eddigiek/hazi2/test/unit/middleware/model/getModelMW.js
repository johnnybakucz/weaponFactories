const expect = require('chai').expect;
const getModelMW = require('../../../../middleware/model/getModelMW');

describe('getModel middleware', function(){
    it('should set res.locals.model with a model object from db', function(done){
        const mw = getModelMW({
            ModelModel:{
                findOne: (p1, cb)=>{
                    expect(p1).to.be.eql({_id:'20'});
                    cb(null, 'mockmodel');
                }
            }
        });
        const resMock={
            locals:{}
        };

        mw({
            params:{
                modelid: '20'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({model:'mockmodel'});
            done();
        });
    });
    it('should call next with error when there is a db problem', function(done){
        const mw = getModelMW({
            ModelModel:{
                findOne: (p1, cb)=>{
                    expect(p1).to.be.eql({_id:'20'});
                    cb('adatbazishiba', null);
                }
            }
        });
        const resMock={
            locals:{}
        };

        mw({
            params:{
                modelid: '20'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql('adatbazishiba')
            done();
        });
    });
    it('should call next when no model found in the db', function(done){
        const mw = getModelMW({
            ModelModel:{
                findOne: (p1, cb)=>{
                    expect(p1).to.be.eql({_id:'20'});
                    cb(undefined, null);
                }
            }
        });
        const resMock={
            locals:{}
        };

        mw({
            params:{
                modelid: '20'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql(undefined);
            done();
        });
    });
});