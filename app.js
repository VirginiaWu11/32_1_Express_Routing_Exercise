const express = require("express");
const ExpressError = require("./expressError");

const app = express();

//The mean is the most commonly used measure of average. To calculate the mean, add the values together and divide the total by the number of values.
function mean(qString) {
    const arr = qString.split(",");
    let sum = arr.reduce((val, acc) => Number(val) + Number(acc));
    return sum / arr.length;
}

//If you place a set of numbers in order, the median number is the middle one. If there are two middle numbers, the median is the mean of those two numbers.
function median(qString) {
    const arr = qString.split(",");
    arr = arr.map((val) => Number(val));
    arr.sort((a, b) = a - b));
    let midIndex = arr.length / 2;
    let left, right;
    if (Number.isInteger(midIndex)) {
        right = midIndex;
        left = midIndex - 1;
        return (arr[left] + arr[right]) / 2;
    } else {
        return Number(arr[Math.floor(midIndex)]);
    }
}

//The mode is the value that occurs most often. The mode is the only average that can have no value, one value or more than one value.
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
    return resultsArray;
}
