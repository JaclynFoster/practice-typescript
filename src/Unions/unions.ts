//unions allow the type to be 2 or more different types
let age: number | string = 21
age = 22
age = '22'

type Pointer = {
  xx: number,
  yy: number
}

type Loc = {
  lon: number,
  lat: number
}

let coordinates: Pointer | Loc = { xx: 2, yy: 4 }
coordinates = { lon: 230.23, lat: 3855.2465 }

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`)
}
printAge(33)
printAge('83')

//use type narrowing with union types to specify what you would like your function to do if there are multiple types
const calculateTax = (price: string | number, tax: number) => {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''))
  }
  return price * tax
}

//unions with arrays

const stuff: (number | string)[] = [1, 2, 3, 'string']

// const coords: (Point: Loc)[] = []

//Literal Types examples
let zero: 0 = 0

const giveAnswer = (answer: 'yes' | 'no' | 'maybe') => {
  return `The answer is ${answer}`
}

giveAnswer('yes')
giveAnswer('no')

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
const highScore: number | boolean = 87
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuffArr: (number | string)[] = [1, 2, 3, 4, 5]
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
  name: string,
  age: number,
  sport: 'ski' | 'snowboard',
  level: SkillLevel
}

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number
type RGB = {
  r: number,
  g: number,
  b: number
}
// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type HSL = {
  h: number,
  s: number,
  l: number
}
// Create an array called colors that can hold a mixture of RGB and HSL color types

let colorsArr: (RGB | HSL)[] = [{ r: 13, g: 39, b: 38 }]

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

const greeting = (person: string | string[]): void => {
  if (typeof person === 'string') {
    console.log(`Hello, ${person}`)
  } else {
    for (let p of person) {
      console.log(`Hello ${p}`)
    }
  }
}
