"use strict";
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value.
exports.__esModule = true;
exports.Suit = void 0;
// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
var Suit;
(function (Suit) {
    Suit[Suit["clubs"] = 0] = "clubs";
    Suit[Suit["diamonds"] = 1] = "diamonds";
    Suit[Suit["hearts"] = 2] = "hearts";
    Suit[Suit["spade"] = 3] = "spade";
})(Suit || (Suit = {}));
exports.Suit = Suit;
var ace = {
    suit: Suit.spade,
    value: 1
};
