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
var Pizza1 = /** @class */ (function () {
    function Pizza1() {
        this.PizzaSize = "";
        this.PizzaType = "";
        this.price = null;
        this.toppings = "";
    }
    return Pizza1;
}());
var Veg1 = /** @class */ (function (_super) {
    __extends(Veg1, _super);
    function Veg1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Price = { small: 99, medium: 150, large: 250 };
        return _this;
    }
    return Veg1;
}(Pizza1));
var NonVeg1 = /** @class */ (function (_super) {
    __extends(NonVeg1, _super);
    function NonVeg1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NonVeg1;
}(Pizza1));
console.log("its cools");
var veg = new Veg1();
veg.PizzaSize = "large";
console.log(veg.Price[(veg.PizzaSize)]);
var nonveg = new NonVeg1();
nonveg.PizzaSize = "medium";
console.log(veg);
console.log(nonveg);
console.log("demo");
