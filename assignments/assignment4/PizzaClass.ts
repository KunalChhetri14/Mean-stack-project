class Pizza
{
    //color:string=null;
    Base:string=null;
    size:string;
    total_price:number;
    topplings:string;
    Quantity:number;
    priceCalculator=function(quantity:number,size:string,topplings:string,price:number,Base?:string)
    {
        
        this.total_price=quantity*price;
        console.log(`The cost for ${quantity} ${size} sized pizza with ${topplings} is ${this.total_price}`);
    }

}

class Veg extends Pizza
{
    //topplings:string;
    price={Small:99,Medium:190,Large:350};
    //topplings:string;

}

class NonVeg extends Pizza
{
    price={Small:150,Medium:290,Large:450}
}

let veg=new Veg();
veg.topplings='Onions';
veg.size='Medium';
veg.Quantity=2;
veg.priceCalculator(veg.Quantity,veg.size,veg.topplings,veg.price[veg.size]);

let Nveg=new NonVeg();
Nveg.topplings='Bacon';
Nveg.size='Medium';
Nveg.Quantity=2;
Nveg.priceCalculator(Nveg.Quantity,Nveg.size,Nveg.topplings,Nveg.price[Nveg.size]);









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