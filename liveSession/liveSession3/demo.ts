class Pizza
{

    PizzaSize:string="";
    PizzaType:string="";
    price:number=null;
    toppings:string="";
}

class Veg extends Pizza
{

}

class NonVeg extends Pizza
{

}

var veg=new Veg();
veg.PizzaSize="large";

var nonveg=new NonVeg();
nonveg.PizzaSize="medium";


console.log(veg);
console.log(nonveg);
console.log("demo");

