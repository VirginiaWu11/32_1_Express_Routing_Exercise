const express = require("express");
const ExpressError = require("./expressError");

const app = express();

// mean (average)
// median (midpoint)
// mode (most frequent)

function mean(qString) {
    let arr = qString.split(",");
    let sum = arr.reduce((val, acc) => Number(val) + Number(acc));
    console.log(sum / arr.length);
}

function median(qString) {
    let arr = qString.split(",");
    let midIndex = arr.length / 2;
    let left, right;
    if (Number.isInteger(midIndex)) {
        right = midIndex;
        left = midIndex - 1;
        console.log((Number(arr[left]) + Number(arr[right])) / 2);
    } else {
        console.log(Number(arr[Math.floor(midIndex)]));
    }
}

// 5,5,5,6,6
// 0 1 2 3 4 5

// 5/2 = 2.5

// 6/2 = 3
