// Generics are amazing!
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// The next function returns the next element of 
// arr. Since we don't know what type it is use 
// a generic.
function next(arr) {
    return arr.pop();
}
// function matchType<T>(defFunction: T): T {
// 	return defFunction
// }
// matchType(32)
// matchType('23')
// // Test next()
// const arr1 = [1,2,3,4,5]
// const arr2 = ['a', 'b', 'c']
// console.log(next(arr1))
// console.log(next(arr2))
// fill() fills an array with any number of a 
// repeated value. Since we don't know what type
// the value is use a generic. 
function fill(value, count) {
    var arr = new Array(count);
    arr.fill(value);
    return arr;
}
// Note! error TS2550: i got this error every time I compiled this 
// but it seemed to work anyway? 
// Test fill()
console.log(fill('a', 3));
console.log(fill(9, 4));
console.log(fill({}, 11));
// Shuffle randomizes an array. Since can` contain
// any type use a generic to return an array of 
// the generic type
function shuffle(arr) {
    var arrCopy = __spreadArray([], arr, true);
    arrCopy.sort(function () { return 0.5 - Math.random(); });
    return arrCopy;
}
// Test shuffle()
var arr3 = ['a', 'b', 'c', 'd'];
console.log(shuffle(arr3));
// This functions takes an array and returns a function.
// The function returns the next item in the array. 
function iterate(arr) {
    var i = 0;
    return function () {
        i += 1;
        if (i === arr.length) {
            i = 0;
        }
        return arr[i];
    };
}
// Test iterate()
var nextFruit = iterate(['🍓', '🍎', '🍐', '🍊']);
var nextNumber = iterate(shuffle([1, 2, 3, 4, 5]));
console.log(nextFruit());
console.log(nextFruit());
console.log(nextFruit());
console.log(nextFruit());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
