const HDwalletProvider = require('truffle-hdwallet-provider');

const Web3 = require('web3');

//const{interface,bytecode} = require('./compile');
const compileFactory = require('../ethereum/build/CampaignFactory.json');
const provider = new HDwalletProvider(

  'reflect bird damage repeat about crunch add royal tissue gas cargo index',
  'https://ropsten.infura.io/v3/600490a29aa240ae89086cfceef912d9'

);

//reflect bird damage repeat about crunch add royal tissue gas cargo index

const web3 = new Web3(provider);

const deploy = async () => {
  //    console.log(interface);
   const accounts =await  web3.eth.getAccounts();
  // console.log('attemp to deploy ',accounts[0]);

    const result= await new web3.eth.Contract(JSON.parse(compileFactory.interface)).deploy({data:'0x'+compileFactory.bytecode})
    .send({from:accounts[0],gas:'1000000'});


   console.log('contract deployed to',result.options.address);
 }

 deploy();
