//Helper functions
const ExpressError = require("./expressError");

class Helper {
    // constructor(queryString){
    //     const stringArr = qString.split(",")
    //     this.numsArr = stringArr.map((val) => Number(val))
    // }
    //The mean is the most commonly used measure of average. To calculate the mean, add the values together and divide the total by the number of values.
    static mean(numsArr) {
        let sum = numsArr.reduce((val, acc) => val + acc);
        console.log(sum / numsArr.length, numsArr);
        return sum / numsArr.length;
    }

    //If you place a set of numbers in order, the median number is the middle one. If there are two middle numbers, the median is the mean of those two numbers.
    static median(qString) {
        const arr = qString.split(",");
        arr = arr.map((val) => Number(val));
        arr.sort((a, b) => a - b);
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
    static mode(qString) {
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
    static checkIfAllNums(qStringNums) {
        const stringsArr = qStringNums.split(",");
        // const numsArr = stringsArr.map((val) => parseInt(val));
        const numsArr = [];
        for (let numStr of stringsArr) {
            if (Number.isNaN(parseInt(numStr))) {
                throw new ExpressError(`${numStr} is not a number`, 400);
            } else {
                numsArr.push(parseInt(numStr));
            }
        }
        return numsArr;
    }
}
module.exports = Helper;
