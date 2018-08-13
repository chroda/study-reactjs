const express = require('express');

module.exports = function(server) {
  const router = express.Router();
  server.use('/api', router);

  const BillingCycle = this.require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
}
