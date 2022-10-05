"use strict";
// Take a look at the code here. Notice the VSCode will 
// provide errors!
exports.__esModule = true;
exports.getPriceWithTax = void 0;
// Compile the code and check what type script says: 
// tsc example-2.ts
function getPriceWithTax(amount, rate) {
    var price = amount;
    var tax = price * rate;
    return (price + tax).toFixed(2);
}
exports.getPriceWithTax = getPriceWithTax;
var answer = getPriceWithTax(23.99, 9.5);
console.log(answer);
