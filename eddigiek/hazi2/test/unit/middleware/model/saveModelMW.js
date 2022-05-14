const expect = require('chai').expect;
const saveModelMW = require('../../../../middleware/model/saveModelMW');

describe('saveModel middleware', function(){
    it('redirect to weaponmodels/factoryid', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });

        mw(
        {
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
                model:{
                    save:cb=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
                expect(where).to.be.eql('/weaponmodels/factoryid')
                done();
            }
        },
        err=>{}
        );
    });
    it('should call next with err when problem with db', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });

        mw(
        {
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
                model:{
                    save:cb=>{
                        cb('adatbazishiba');
                    }
                }
            },
            redirect: (where)=>{
            }
        },
        err=>{
            expect(err).to.be.eql('adatbazishiba')
            done();
        }
        );
    });
    it('req.body.sold contains not a nubmer', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });

        mw(
        {
            body:{
                name:'a',
                caliber:'b',
                sold:'valami',
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
                model:{
                    save:cb=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
            }
        },
        err=>{
            expect(err).to.be.instanceOf(Error);
            expect(err.toString()).to.be.eql('Error: sold must be a number!');
            done();
        }
        );
    });
    it('create new Model', function(done){
        class ModelMockModel{
            save(cb){
                cb(null);
            }
        };
        const mw = saveModelMW({
            ModelModel:ModelMockModel
        });

        mw(
        {
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
                model:{
                    save:cb=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
                expect(where).to.be.eql('/weaponmodels/factoryid')
                done();
            }
        },
        err=>{}
        );
    });
    it('name is undefined', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });

        mw(
        {
            body:{
                name:undefined,
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
                model:{
                    save:cb=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
                expect(where).to.be.eql('/weaponmodels/factoryid')
                done();
            }
        },
        err=>{
            done();
        }
        );
    });
    it('caliber is undefined', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });

        mw(
        {
            body:{
                name:'a',
                caliber:undefined,
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
                model:{
                    save:cb=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
                expect(where).to.be.eql('/weaponmodels/factoryid')
                done();
            }
        },
        err=>{
            done();
        }
        );
    });
    it('sold is undefined', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });

        mw(
        {
            body:{
                name:'a',
                caliber:'b',
                sold:undefined,
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
                model:{
                    save:cb=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
                expect(where).to.be.eql('/weaponmodels/factoryid')
                done();
            }
        },
        err=>{
            done();
        }
        );
    });
    it('develeopmentYear is undefined', function(done){
        const mw = saveModelMW({
            ModelModel:'model'
        });

        mw(
        {
            body:{
                name:'a',
                caliber:'b',
                sold:10,
                developmentYear:undefined
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
                model:{
                    save:cb=>{
                        cb(null);
                    }
                }
            },
            redirect: (where)=>{
                expect(where).to.be.eql('/weaponmodels/factoryid')
                done();
            }
        },
        err=>{
            done();
        }
        );
    });
});