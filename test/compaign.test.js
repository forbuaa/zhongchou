const assert = require("assert");

const ganache = require("ganache-cli");

const Web3 = require("web3");

const compileFactory = require('../ethereum/build/CampaignFactory.json');
const compileCampain = require('../ethereum/build/Campaign.json');


var accounts;
var campaignAddress;
var campaign;
var factory;
const web3 = new Web3(ganache.provider());

beforeEach(async()=>{
      accounts = await web3.eth.getAccounts();

      factory = await new web3.eth.Contract(JSON.parse(compileFactory.interface)).deploy({data:'0x'+compileFactory.bytecode})
      .send({from:accounts[0],gas:'1000000'});

      await factory.methods.createCampaign('100').send({from:accounts[0],gas:'1000000'});

      [campaignAddress] = await factory.methods.getDeployedCampaign().call();

      campaign = await new web3.eth.Contract(JSON.parse(compileCampain.interface),campaignAddress);

})

describe('campaign',()=>{

     it('deploy a factory and campaign',()=>{

      assert.ok(factory.options.address);
       assert.ok(campaign.options.address);
     })

     it('manager address',async ()=>{

       const manager = await campaign.methods.manager().call();
       assert(manager,accounts[0]);
   })

     it('allow people to contribute',async ()=>{

       await campaign.methods.contribute().send({

         from:accounts[1],
         value:'200'
       });
      const isContribute =  await campaign.methods.approvers(accounts[1]).call();
      assert(isContribute);

     })

     it('require a minimum contribute',async ()=>{

        try{await campaign.methods.contribute().send({

          from:accounts[1],
          value:'5'
        });
       const isContribute =  await campaign.methods.approvers(accounts[1]).call();
       assert(isContribute);

     }catch(err){

       assert(err);
     }


     })
     it('require a manager to make request',async()=>{

      await  campaign.methods.createRequest('buy pig','100',accounts[1]).send({

         from:accounts[0],
         gas:'1000000'
       });

       const request = await campaign.methods.requests(0).call();
       assert.equal('buy pig',request.description);



     })

})
