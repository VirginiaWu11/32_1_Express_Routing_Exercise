//Helper functions

class MathHelpers {
    //The mean is the most commonly used measure of average. To calculate the mean, add the values together and divide the total by the number of values.
    static mean(numsArr) {
        let sum = numsArr.reduce((acc, nextVal) => acc + nextVal);
        console.log(sum / numsArr.length, numsArr);
        return sum / numsArr.length;
    }

    //If you place a set of numbers in order, the median number is the middle one. If there are two middle numbers, the median is the mean of those two numbers.
    static median(numsArr) {
        numsArr.sort((a, b) => a - b);
        let midIndex = numsArr.length / 2;
        let left, right;
        if (Number.isInteger(midIndex)) {
            right = midIndex;
            left = midIndex - 1;
            return (numsArr[left] + numsArr[right]) / 2;
        } else {
            return Number(numsArr[Math.floor(midIndex)]);
        }
    }

    //The mode is the value that occurs most often. The mode is the only average that can have no value, one value or more than one value.
    static mode(numsArr) {
        const newMap = new Map();
        const resultsArray = [];
        let maxCount = 0;
        for (let numStr of numsArr) {
            if (newMap.has(numStr)) {
                newMap.set(numStr, newMap.get(numStr) + 1);
            } else {
                newMap.set(numStr, 1);
            }
            if (newMap.get(numStr) > maxCount) {
                maxCount = newMap.get(numStr);
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
}

module.exports = MathHelpers;
