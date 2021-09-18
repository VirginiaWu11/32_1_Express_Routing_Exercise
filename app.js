const express = require("express");
const ExpressError = require("./expressError");
const Helper = require("./helpers");

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
        numsArr = Helper.checkIfAllNums(nums);
        mean = Helper.mean(numsArr);
    } catch (e) {
        next(e);
    }
    return res.json({ response: { operation: "mean", value: mean } });
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404);
    next(e);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
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

//TODO: figure out if the input is all numbers,
//  if not, handle error

// need three routes /mean, /median, /mode, all GET requests

// who waht when where why, how?
