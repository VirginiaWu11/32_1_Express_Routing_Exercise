class CheckArrayValidity {
    static checkIfAllNumsAndReturnNumsArray(qStringNums) {
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

module.exports = CheckArrayValidity;
