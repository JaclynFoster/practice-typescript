let movieTitle: string = "Annihilation"
movieTitle = "Hello"

let myNumber: number = 42
myNumber = 22

const myBool: boolean = true

let thing: any = "hello"
thing = 1
thing = false
//any variable overrides TS types

const movies = ["Arrival", "The Thing", "Aliens"]
let foundMovie;

for(let movie of movies) {
    if (movie === "Arrival") {
        foundMovie = "Arrival"
    }
}


//this is an example of a type "any"