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

function mode(qString) {
    let arr = qString.split(",");
    let newMap = new Map();
    let mostFreq = "";
    let max = 0;
    for (let numStr of arr) {
        if (newMap.has(numStr)) {
            newMap.set(numStr, newMap.get(numStr) + 1);
        } else {
            newMap.set(numStr, 1);
        }
        if (newMap.get(numStr) > max) {
            max = newMap.get(numStr);
            mostFreq = numStr;
        }
    }
    console.log(Number(mostFreq));
}
