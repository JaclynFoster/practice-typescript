//Interfaces-similar to types except describe the shapes of objects and objects only

interface Person {
    readonly id: number; //can have readonly property
    name: string;
    age: number
    nickname?: string; //can add optional property
    // sayHi: () => string; //can have methods
    // sayHi(): string; //both of these work as methods
}

//Interface Parameters
//need to name the parameter but it does not matter the name only need it to define the type being used
interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number; //method will return a number with a number param
}

const shoes: Product = {
    name: "Blue Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount)
        this.price = newPrice
        return this.price
    }
}

console.log(shoes.applyDiscount(0.4))

//Interfaces vs Types 
//If you have 2 Types you cannot combine them using a variable, but you CAN using interface

//EXAMPLE types
// type Animal = {
//     name: string
// }

// type Animal = {
//     breed: string
// }

// const animal: Animal = {
//     name: "Marley",
//     breed: "Dachshund"
// }

//EXAMPLE interfaces (Valid)
interface Animal {
    name: string;
}

interface Animal {
    breed: string
}

const animal: Animal = {
    name: "Marley",
    breed: "Dachshund"
}

//You can also extend an interface much like you can with JS classes

interface ServiceAnimal extends Animal {
    job: string;
}

//interfaces can extend multiple interfaces inheritance
interface Human {
    name: string;
}

interface Employee {
   readonly id: number;
   email: string;

}

interface Engineer extends Human, Employee {
    level: string;
}

const pearl: Engineer = {
    name: "pearl",
    id: 12345,
    email: "email",
    level: "senior"
}