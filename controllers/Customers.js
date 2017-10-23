'use strict';

var url = require('url');

var Customers = require('./CustomersService');

module.exports.customersGET = function customersGET (req, res, next) {
  Customers.customersGET(req.swagger.params, res, next);
};

module.exports.customersPOST = function customersPOST (req, res, next) {
  Customers.customersPOST(req, res, next);
};