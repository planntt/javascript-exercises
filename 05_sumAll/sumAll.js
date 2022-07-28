const sumAll = function(num1, num2) {
    let numsSum = 0;

    if (typeof num1 === "number" && typeof num2 === "number" && num1 >=0 && num2 >= 0) {
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                numsSum += i;
            }
        } else if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                numsSum += i;
            }
        }
        return numsSum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
