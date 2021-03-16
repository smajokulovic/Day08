function localScope() {
 var myVariable = "I am here"
 console.log(myVariable);
}
 localScope();


 // Only change code below this line 
 // Only change code above this line
 // myVariable is not defined outside of localScope
 if (typeof myVariable != "undefined") {
     console.log('outsides localScope', myVariable)
} else {
     console.log('outside localScope UNDEFINED!!!')
}
 
 module.exports = localScope;

