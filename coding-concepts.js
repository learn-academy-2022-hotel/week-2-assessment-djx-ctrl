// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer: ["H", "o", "t", "e", "l", " ", "2", "0", "2", "2"]
// b) Verify and explain: My answer was correct. .split made the string into an array and then separated each letter. 

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student!
// b) Verify and explain: My answer was incorrect. There is not a return so therefore the answer came back undefined.

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: My answer was correct. .map interated through the initial array and returned the numbers multiplied by 2.

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: My answer was correct. .filter filtered the array and pulled out only odds based on if the number could be divided by two and have no remainder.

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: My answer was correct. When running the console.log it was asked to pull from myCodingSkills then languages and the 0 position inside that array.

// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Hotel"
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Missing a return.
// b) Verify and explain: My answer was incorrect. My thought process on this question was not in the right direction. "George" is the new value for this.student.
