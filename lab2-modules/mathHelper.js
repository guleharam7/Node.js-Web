function add(a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}
function multiply(a, b) {
    return a * b;
}
function isEven(num) {
    if (num%2==0){
        return true;
    } else {
        return false;
    }
}
function greet(name) {
return 'Hello, ' + name + '! Welcome to Node.js!';
}
module.exports = { add, subtract, multiply,isEven, greet };