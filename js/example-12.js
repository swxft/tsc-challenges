"use strict";
// You are making a mapping application. 
exports.__esModule = true;
// Write an enum that defines the directions: 
// North, South, East, West
var Direction;
(function (Direction) {
    Direction["N"] = "North";
    Direction["S"] = "South";
    Direction["E"] = "East";
    Direction["W"] = "West";
})(Direction || (Direction = {}));
// Should having a heading property type Direction
var MapPosition = /** @class */ (function () {
    function MapPosition() {
        this.direction = Direction.N;
    }
    // takes a new Direction as an argument
    MapPosition.prototype.move = function (newDirection) {
        // set the direction on your property 
        this.direction = newDirection;
        // Print the new direction
        console.log("New heading ".concat(this.direction));
    };
    // Should return a string and print:
    // "you are heading <direction>"
    MapPosition.prototype.describe = function () {
        return "you are heading in ".concat(this.direction);
    };
    return MapPosition;
}());
var location = new MapPosition();
console.log(location.describe());
// Might output:
// "You are heading north"
location.move(Direction.N);
exports["default"] = MapPosition;
