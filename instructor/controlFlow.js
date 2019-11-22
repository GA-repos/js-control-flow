// run the file in the terminal using:
// node controlFlow.js

// variable key words: var let const
// let -> able to reassigned
// const -> one time assignment...but it can perhaps be mutated

// let activeLog = 1
// console.log('first log');
// if(activeLog === 2) {
//     console.log('second log');
// }
// console.log('third log');

// LOOPING CONSTRUCTS
// FOR LOOP
//  initialize condition(true) counter(increment/decrement)

// INCREMENT
// for(let i = 0;  i < 3;   i += 1) {
//     // code block
//     console.log('inside codeblock - i', i)
// }
// initalize..condition..codeblock..couter

// => (fat arrow)
// DECREMENT
// for (let i = 3; i >= 0; i -= 1) {
//   // code block
//   console.log("inside codeblock - i", i);
// }

// WHILE LOOP
// while(condition) { codeblock }
// condition is either true/false
// while true it runs..
// let i = 0
// let runLoop = true
// while(runLoop) {
//   // code block
//   i += 1
//   console.log("inside codeblock - i", i, runLoop);
//   if(i > 3) {
//       runLoop = false
//   }
// }

// h = 0, e = 1, l = 2, l = 3, o = 4
// const string = "hello";
// // const subString = string.substr(0, 1);
// // const position = string[4]
// const charAt = string.charAt(4)
// console.log('this is the last char - ', charAt);
// // ES6 String Template Literal
// console.log( `this is the last char - ${charAt}`);
// // STRING CONCATENATION
// let newString = ''
// newString += 'h'
// console.log(`this is newString - ${newString}`)
// newString2 = newString + 'h' + 'e' + 'l'


// CONDITIONAL LOGIC
// condition is either true or false
// only the first matching matching condition executes
// all other matching conditions are ignored
// if(false){
//  // codeblock runs if true
//  console.log('condition is true')
// } else if(false) {
//     console.log('second else is true')  
// } else if(true) {
//     console.log('third else is true')
// } else {
//     // the last else isn't required but if you wanted
//     // to run something anyway if all the conditions were
//     // false..you would do that here
// }

// let assignmentCompletion = 3

// if (assignmentCompletion === 0) {
//   console.log("Work on your homework!")
// } else if (assignmentCompletion === 1) {
//   console.log("Good work, still more to go")
// } else if (assignmentCompletion === 2) {
//   console.log("Almost there!")
// } else {
//   console.log("You are done!")
// }

let dreamCar = 'wrangler'
let dreamCarCost = 200

let savings = 200

// if(dreamCar === 'wrangler') {
//     console.log('do you have enough $$')
//     if(savings >= dreamCarCost) {
//         console.log('buy it...')
//     } else {
//         console.log('you better start saving')
//     }
// }

// USING && (AND) OPERATOR
// if(dreamCar === 'wrangler' && savings >= dreamCarCost) {
//     console.log('buy it...')
// } else {
//     console.log('you better start saving')
// }

// if(dreamCar === 'wrangler' || savings >= dreamCarCost) {
//     console.log('buy it...')
// } else {
//     console.log('you better start saving')
// }

// ternary operator
// dreamCar === 'wrangler' && savings >= dreamCarCost // if true
//     ? console.log('buy it')  // do this
//     : console.log('start saving') // else do this
