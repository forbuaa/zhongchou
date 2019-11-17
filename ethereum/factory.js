import Web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new Web3.eth.Contract(

    JSON.parse(CampaignFactory.interface),
    '0xd2ed1d80016799B0c8592abBfc88389AbF25c451'

);

export default instance;
