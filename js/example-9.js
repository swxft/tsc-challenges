"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
exports.__esModule = true;
var example_8_1 = require("./example-8");
// Import Kaiju and KaijuType from example-8.js
// Fix the rampage function so it makes use of the KaijuType enum
function rampage(kaiju, city) {
    // const { name, type, power } = kaiju
    var action;
    switch (kaiju.type) {
        case example_8_1.KaijuType.ape:
            action = 'smash';
            break;
        case example_8_1.KaijuType.lizard:
            action = 'burn';
            break;
        case example_8_1.KaijuType.flying:
            action = 'flap';
            break;
    }
    var result = "".concat(kaiju.name, " ").concat(action, " over ").concat(city, " causing ").concat(kaiju.power * 10000, " damage!");
    return result;
}
console.log(rampage({ name: 'Gojira', type: example_8_1.KaijuType.lizard, power: 90 }, 'tokyo'));
console.log(rampage({ name: "Mothra", type: example_8_1.KaijuType.flying, power: 40 }, 'istanbul'));
console.log(rampage({ name: 'Kong', type: example_8_1.KaijuType.ape, power: 88 }, 'bishkek'));
