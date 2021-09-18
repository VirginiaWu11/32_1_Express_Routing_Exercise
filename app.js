const express = require("express");
const ExpressError = require("./expressError");
const Helper = require("./helpers");

const app = express();

app.get("/");

//TODO: figure out if the input is all numbers,
//  if not, handle error

// need three routes /mean, /median, /mode, all GET requests
