
function printName(person: {first: string, last: string}): void {
 console.log(`${person.first} ${person.last}`)
}

printName({first: "Jaclyn", last: "Foster"})

let coordinate: {x: number, y: number} = {x: 34, y: 13}

function randomCoordinate(): {x: number, y: number} {
    return {x: 3, y: 6}
}

//different ways to write objects and object types

//Type Alias- allow to make more readable code 
type Person = {
    name: string,
    age: number
}

const sayHappyBirthday = (person: Person): string => {
    return `Hey ${person.name}, congrats on turning ${person.age}`
}

console.log(sayHappyBirthday({name: "Jaclyn", age: 34}))

//Nested Objects

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {producer: string, writer: string}
}

function calculatePayout(song: Song): number {
return song.numStreams * .0033 
}

function printSong(song: Song): void {
    console.log(`${song.title}-${song.artist}`)
}


const mySong: Song = {
    title: "title",
    artist: "artist",
    numStreams: 200,
    credits: {
        producer: "producer",
        writer: "writer"
    }
}

const earning = calculatePayout(mySong)
console.log(earning)
printSong(mySong)

//Optional Properties
type Point = {
    x: number,
    y: number,
    z?: number //z is not required
}

const myPoint: Point = {x: 1, y: 2, z: 3} //or you can leave z off


//readonly modifier

type User = {
   readonly id: number, 
   username: string
}

//the id is readonly and you cannot write to it-cannot be updated or modified

const user: User = {
    id: 12345,
    username: "username"
}

console.log(user.id)

//Intersection Types
//multiple types and combine them with ampersand

type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number
}

//can add on a type to intersection with another & and add the type

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
}

// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movie = {
    readonly title: string,
    originalTitle?: string,
    director: string,
    releaseYear: number,
    boxOffice: {
        budget: number,
        grossUS: number,
        grossWorldwide: number
    }
}
const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
      budget: 165000000,
      grossUS: 108327830,
      grossWorldwide: 400671789,
    },
  };
  
  console.log(dune)
  const cats: Movie = {
      title: "Cats",
      director: "Tom Hooper",
      releaseYear: 2019,
      boxOffice: {
          budget: 95000000,
          grossUS: 27166770,
          grossWorldwide: 73833348,
        },
    };
    
    console.log(cats)
  // Write a function called getProfit that accepts a single Movie object
  // It should return the movie's worldwide gross minus its budget
  
  // For example...
  // getProfit(cats) => -21166652

  const getProfit = (movie: Movie): number => {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
    
  }

 console.log(getProfit(cats))