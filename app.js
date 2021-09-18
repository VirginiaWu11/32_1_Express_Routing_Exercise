const express = require("express");
const ExpressError = require("./expressError");
const MathHelpers = require("./mathHelpers");
const CheckArrayValidity = require("./checkNumsHelpers");

const app = express();

app.get("/", (req, res) => {
    console.log("hello");
});
app.get("/mean", (req, res, next) => {
    console.log(req.query);
    const { nums } = req.query;
    let numsArr, mean;
    try {
        if (!nums) {
            throw new ExpressError("Numbers are required", 400);
        }
        numsArr = CheckArrayValidity.checkIfAllNumsAndReturnNumsArray(nums);
        mean = MathHelpers.mean(numsArr);
    } catch (e) {
        next(e);
    }
    return res.json({ response: { operation: "mean", value: mean } });
});

app.get("/median", (req, res, next) => {
    const { nums } = req.query;
    let numsArr, median;
    try {
        if (!nums) {
            throw new ExpressError("Numbers are required", 400);
        }
        numsArr = CheckArrayValidity.checkIfAllNumsAndReturnNumsArray(nums);
        median = MathHelpers.median(numsArr);
    } catch (e) {
        next(e);
    }
    return res.json({ response: { operation: "median", value: median } });
});

app.get("/mode", (req, res, next) => {
    const { nums } = req.query;
    let numsArr, mode;
    try {
        if (!nums) {
            throw new ExpressError("Numbers are required", 400);
        }
        numsArr = CheckArrayValidity.checkIfAllNumsAndReturnNumsArray(nums);
        mode = MathHelpers.mode(numsArr);
    } catch (e) {
        next(e);
    }
    console.log(mode);
    return res.json({ response: { operation: "mode", value: mode } });
});

app.get("/all", (req, res, next) => {
    const { nums } = req.query;
    let numsArr, mean, median, mode;
    try {
        if (!nums) {
            throw new ExpressError("Numbers are required", 400);
        }
        numsArr = CheckArrayValidity.checkIfAllNumsAndReturnNumsArray(nums);
        mean = MathHelpers.mean(numsArr);
        median = MathHelpers.median(numsArr);
        mode = MathHelpers.mode(numsArr);
    } catch (e) {
        next(e);
    }
    console.log(mode);
    return res.json({
        response: { operation: "all", mean: mean, median: median, mode: mode },
    });
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404);
    next(e);
});

app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status },
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
