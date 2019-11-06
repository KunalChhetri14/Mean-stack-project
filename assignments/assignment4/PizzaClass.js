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
        //color:string=null;
        this.Base = null;
        this.priceCalculator = function (quantity, size, topplings, price, Base) {
            this.total_price = quantity * price;
            console.log("The cost for " + quantity + " " + size + " sized pizza with " + topplings + " is " + this.total_price);
        };
    }
    return Pizza;
}());
var Veg = /** @class */ (function (_super) {
    __extends(Veg, _super);
    function Veg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //topplings:string;
        _this.price = { Small: 99, Medium: 190, Large: 350 };
        return _this;
        //topplings:string;
    }
    return Veg;
}(Pizza));
var NonVeg = /** @class */ (function (_super) {
    __extends(NonVeg, _super);
    function NonVeg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = { Small: 150, Medium: 290, Large: 450 };
        return _this;
    }
    return NonVeg;
}(Pizza));
var veg = new Veg();
veg.topplings = 'Onions';
veg.size = 'Medium';
veg.Quantity = 2;
veg.priceCalculator(veg.Quantity, veg.size, veg.topplings, veg.price[veg.size]);
var Nveg = new NonVeg();
Nveg.topplings = 'Bacon';
Nveg.size = 'Medium';
Nveg.Quantity = 2;
Nveg.priceCalculator(Nveg.Quantity, Nveg.size, Nveg.topplings, Nveg.price[Nveg.size]);
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person {
//     firstName1: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName1 + " " + person.lastName;
// }
// let user = new Student("Jane", "M.", "User");
// console.log(user);
// console.log(greeter(user));
