class Pizza1
{

    PizzaSize:string="";
    PizzaType:string="";
    price:number=null;
    toppings:string="";
}

class Veg1 extends Pizza1
{
    Price={small:99,medium:150,large:250};


}

class NonVeg1 extends Pizza1
{

}
console.log("its cools");
var veg=new Veg1();
veg.PizzaSize="large";
console.log(veg.Price[(veg.PizzaSize)]);

var nonveg=new NonVeg1();
nonveg.PizzaSize="medium";


console.log(veg);
console.log(nonveg);
console.log("demo");