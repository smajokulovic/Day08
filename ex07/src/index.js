var sum = 0;
function addThree() {
    addThree = sum + 3;
    console.log(addThree);
}

// Only change code below this line
function addFive() {
    addFive = addThree + 5;
    console.log(addFive);
}

// Only change code above this line

module.exports = {
    addThree,
    addFive
};
addThree();
addFive();

