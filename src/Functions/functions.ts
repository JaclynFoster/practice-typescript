//Function parameter types

function greet(person: string) {
  return `Hello, ${person}`
}

function square(num: number) {
  return num * num
}

square(3)
greet('Jaclyn')

//Function return types annotation-specify the type in the function

function helloWorld(person: string): string {
  return 'Hello'
}

const colors = ['red', 'blue', 'green']
colors.map(color => {
  return color
})
//TS infered the type of string

function printTwice(msg: string) {
  console.log(msg)
  console.log(msg)
}

//TS infered type void because the function does not return anything and we did not explicity determine function type or you can use :void type

function seconds() {
  return 24 * 60
}

//Never type annotates function that never occur- function should never return anything at all or a continous loop function
function makeErr(msg: string): never {
  throw new Error(msg)
}

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
const twoFer = (name: string = 'you'): string => {
  return `one for ${name}, one for me`
}
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
const isLeapYear = (year: number): boolean => {
  if (0 === year % 4 && 0 !== year % 100 || year % 400 === 0) {
    return true
  } else {
    return false
  }
}
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
console.log(twoFer('Jaclyn'))
console.log(isLeapYear(2013))
