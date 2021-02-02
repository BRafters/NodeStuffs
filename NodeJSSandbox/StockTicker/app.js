const yargs = require("yargs");
const chalk = require("chalk");
const request = require("postman-request");

// API URL
const URL = "";

// Do an HTTP request on the stock API
request({url:}, (err, res) => {});