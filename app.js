const express = require("express");
const ExpressError = require("./expressError");

const app = express();

// mean (average)
// median (midpoint)
// mode (most frequent)

function mean(qString) {
    const arr = qString.split(",");
    let sum = arr.reduce((val, acc) => Number(val) + Number(acc));
    console.log(sum / arr.length);
}

function median(qString) {
    const arr = qString.split(",");
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
    const arr = qString.split(",");
    const newMap = new Map();
    const resultsArray = [];
    // let mostFreq = "";
    let maxCount = 0;
    for (let numStr of arr) {
        if (newMap.has(numStr)) {
            newMap.set(numStr, newMap.get(numStr) + 1);
        } else {
            newMap.set(numStr, 1);
        }
        if (newMap.get(numStr) > maxCount) {
            maxCount = newMap.get(numStr);
            // mostFreq = numStr;
        }
    }
    const valuesArray = [...newMap.values()];
    if (valuesArray.every((val) => val === maxCount)) {
        return 0;
    }

    for (let [key, value] of newMap) {
        if (value === maxCount) {
            resultsArray.push(key);
        }
    }
    console.log(resultsArray);
}
