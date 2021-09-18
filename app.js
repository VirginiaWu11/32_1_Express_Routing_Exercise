const express = require('express');
const ExpressError = require('./expressError')

const app = express();


mean (average)
median (midpoint)
mode (most frequent)

function mean (qString){
    let arr = qString.split(",")
    let sum = arr.reduce((val,acc) => Number(val) + Number(acc))
    console.log(sum/arr.length)
}

