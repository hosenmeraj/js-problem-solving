// function interestRateCalculator(principle, time, interestRate) {
//     let si = (principle * time * interestRate) / (100 * 12);
//     const totalAmount = principle + si;
//     return totalAmount;
// }
// var principle = 100000;
// var time = 12;
// var interestRate = 3;
// var totalAmountIs = interestRateCalculator(principle, time, interestRate);
// console.log(totalAmountIs);

var calculateInterest = function (total, year, rate) {
    var interest = rate / 100 + 1;
    return parseFloat((total * Math.pow(interest, year)).toFixed(4))
}

var answer = calculateInterest(100000, 1, 3);
console.log(answer);
