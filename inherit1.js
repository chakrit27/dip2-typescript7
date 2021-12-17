var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Animal parent class. Move...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.growl = function () {
        console.log("Dog child class. A dog can growl, but a duct can not quark..");
    };
    return Dog;
}(Animal));
var Duct = /** @class */ (function (_super) {
    __extends(Duct, _super);
    function Duct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Duct.prototype.quacl = function () {
        console.log("Duct child class. A duct can quark, but a dog can not growl..");
    };
    return Duct;
}(Animal));
var goofy = new Dog();
goofy.growl();
goofy.move();
var donald = new Duct();
donald.quacl();
donald.move();
