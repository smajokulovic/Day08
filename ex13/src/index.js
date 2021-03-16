function randomRangeNumber (minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

var randomRangeNumber = randomRangeNumber(5, 15);
console.log(randomRangeNumber);
module.exports = randomRangeNumber;