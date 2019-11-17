const routes = require('next-routes')();

routes.add('/compaigns/:address','/compaigns/show');
routes.add('/compaigns/:new','/compaigns/new');
routes.add('/compaigns/:address/requests','/compaigns/requests/index')
routes.add('/compaigns/:address/requests/new','/compaigns/requests/new')
module.exports = routes;
