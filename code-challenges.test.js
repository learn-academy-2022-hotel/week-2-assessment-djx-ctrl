// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// RED:
describe("threeObjects", () => {
    it("takes in a number returns if the numbers are divisible by 3", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(threeObjects(object1.number)).toEqual("15 is divisible by three")
        expect(threeObjects(object2.number)).toEqual("0 is divisible by three")
        expect(threeObjects(object3.number)).toEqual("-7 is not divisible by three")
    })
})
// //  FAIL  ./code-challenges.test.js
//   threeObjects
//   ✕ takes in a number returns if the numbers are divisible by 3 (1 ms)

// ● threeObjects › takes in a number returns if the numbers are divisible by 3

//   ReferenceError: threeObjects is not defined

// b) Create the function that makes the test pass.

// GREEN:
// declare a function named threeObjects
// input: numbers , parameter named object
// output: a object that whether the given values are divisble by 3
// Process: iteration across values, see if given values are divisible by 3 and return string stating if value is divisible or not by three

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

const threeObjects = ( string ) => {
      if (string % 3 == 0) {
        return `${string} is divisible by three`
      } else {
        return `${string} is not divisible by three`
      }
    }
// PASS:
// PASS  ./code-challenges.test.js
// threeObjects
//   ✓ takes in a number returns if the numbers are divisible by 3 (1 ms)


 // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// RED:
describe("randomNouns3", () => {
    it("takes an array of words and return the array all capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(randomNouns3(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(randomNouns3(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
// })
// FAIL:
// FAIL  ./code-challenges.test.js
// randomNouns3
//   ✕ takes an array of words and return the array all capitalized (1 ms)

// ● randomNouns3 › takes an array of words and return the array all capitalized

//   ReferenceError: randomNouns3 is not defined

// b) Create the function that makes the test pass.

// GREEN:
// declare a function named randomNouns3
// input: array of strings
// output: array with all letters capitalized in the string
// Process: interate within the array and return the string with all letters capilized using .map .charAt .slice and toUpperCase/toLowerCase

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

const randomNouns3 = (array) => {
    return array.map(element => {
     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
      })
    }
    // Note: This code I referenced from a Google search.
// PASS
// PASS  ./code-challenges.test.js
// randomNouns3
//   ✓ takes an array of words and return the array all capitalized (1 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelMaster", () => {
    it("takes in a string and logs index of the first vowel", () => {
        // const vowelTester1 = "learn"
        // // Expected output: 1
        // const vowelTester2 = "academy"
        // // Expected output: 0
        // const vowelTester3 = "challenges"
        // // Expected output: 2
        expect(vowelMaster(vowelTester1)).toEqual(1)
        expect(vowelMaster(vowelTester2)).toEqual(0)
        expect(vowelMaster(vowelTester3)).toEqual(2)
    })
})
// FAIL: 
// FAIL  ./code-challenges.test.js
// vowelMaster
//   ✕ takes in a string and logs index of the first vowel

// ● vowelMaster › takes in a string and logs index of the first vowel

//   ReferenceError: vowelMaster is not defined


// b) Create the function that makes the test pass.

// GREEN:
// declare a function that returns the index of the first vowel in the string
// input: string
// output: index of the first vowel in each string

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

const vowelMaster = (string) => {
  
}
// Note: I reached out for help with multiple classmates and got hints of what to do. I researched on google and applied multiple different codes and nothing passed. I get what the statement is telling me to do but I'm unclear how to make it happen though.

