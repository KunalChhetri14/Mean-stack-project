var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.PizzaSize = "";
        this.PizzaType = "";
        this.price = null;
        this.toppings = "";
    }
    return Pizza;
}());
var Veg = /** @class */ (function (_super) {
    __extends(Veg, _super);
    function Veg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Veg;
}(Pizza));
var NonVeg = /** @class */ (function (_super) {
    __extends(NonVeg, _super);
    function NonVeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NonVeg;
}(Pizza));
var veg = new Veg();
veg.PizzaSize = "large";
var nonveg = new NonVeg();
nonveg.PizzaSize = "medium";
console.log(veg);
console.log(nonveg);
console.log("demo");
