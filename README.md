# Control Flow

## Lesson Objectives

  - Describe the role of control flow
  - Identify elements of control flow
  - Utilize control flow elements to direct the execution of a program with conditional logic

## What is Control Flow? (5 min, 0:05)

Control flow is simply applying conditional logic to how your code is run. You may want to run certain blocks of code but not others, or you might want to run certain code blocks over and over again. We probably wouldn't want to show a user account page to a user who isn't logged in, since there would be no data to display!

## Conditionals (a.k.a. Control Flow) (10 minutes / 0:15)

A common feature of programming languages is conditional blocks. We can execute different pieces of code depending on whether a condition(s) is met.

```js
if (condition) {
  // this code runs if the condition evaluates to true
}
```

Example:
```js
let hungry = true

if (hungry) {
  console.log("you should eat food! so helpful.")
}
```

We can also run other code if the condition is not met.

```js
if (condition) {
  // this code runs if the condition evaluates to true
}
else if (anotherCondition) {
  // this code runs if the condition evaluates to false and anotherCondition evaluates to true
}
else {
  // this code runs if the condition and anotherCondition evaluate to false
  // this code does not run if the condition or anotherCondition evaluates to true
}
```
You must have the initial `if` statement, and you can only have one final `else` statement, but you can have any number of `else if` statements in the middle.

```js
let assignments_completed = 0

if (assignments_completed === 0) {
  console.log("Work on your homework!")
} else if (assignments_completed === 1) {
  console.log("Good work, still more to go")
} else if (assignments_completed === 2) {
  console.log("Almost there!")
} else {
  console.log("You are done!")
}
```

#### You Do (10min / 0:25)
Write a conditional statement that acts like a bouncer at a bar. If the age variable is below 21, the program should output that the person cannot enter because they are too young, if they are over 21 they can enter, and if age is not a number it outputs an error.

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) is more documentation.

### While Loops (10minutes / 0:35)

A `while` loop is like an `if` statement but it will execute the content of its block repeatedly until the condition becomes false.

```js
num = 0
while (num <= 100) {
  console.log(num)
  num += 1 // short-hand for num = num + 1
}
```
[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) is some more information on while loops.

The `while` loop is especially useful when you have to have a loop run for an unknown number of times.

```js
let passwordGuess = ''
while (passwordGuess !== 'password') {
  passwordGuess = prompt('You have been imprisoned in the code-block of a while loop! What is the magic word to exit?')
}
alert('Argh! You have escaped! I am so lonely, the world never says hello back.')
``` 


## Arrays (10 minutes / 0:45)

In addition to the primitive data types we have seen so far in class, JavaScript also has the ability to store collections of data. The most simple type of collection is an array. Arrays are lists of other data, accessed by their position in the list. Array indexes start at 0 and move up from there.

Arrays can contain any type of data, even mixed data types!
```js
// we can declare an array
let myArr = [4, 5, 6, 7]
console.log(myArr)

// we can access one item
console.log(myArr[1])

// we can change a value
myArr[1] = 8
console.log(myArr)

// we can add an item to the end
myArr.push(9)
console.log(myArr)

// we can remove an item from the end
console.log(myArr.pop())
console.log(myArr)
```

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is more documentation on arrays.

## `for` loop (10 minutes / 0:55)

```js
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

The loop is indicated with the keyword `for` followed parentheses that contain 3 parts separate by `;`...
  1. Instantiates the iteratee (in this example, `i`). `i` begins at 0 and will increase throughout the loops execution. `i` can be accessed within the loop.
  2. The comparison expression. The loop will continue to execute until this expression evaluates to false.
  3. How much the iteratee is incremented after each execution of the loop. In this example, `i` will increase by 1 after each iteration of the loop.

The actual content of the loop is located within the trailing curly brackets. In this example, `console.log(i)` will be executed ten times.

Oftentimes we will use a `for` loop to iterate through an array. That means we will want the loop to execute as many times as there are items in that array. Take a look at this example...

```js
let names = ["ali", "nayana", "andy", "james", "zakk", "perry", "james", "mike", "max"]

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}
```

> This loop will run 7 times because the length of the array is 7. Each iteration of the loop will print out whichever name exists at index `i` within the array.

### `for in` loop (5 minutes / 1:00)

The `for in` loop functions similar to the `for` loop, but it is only used when iterating through a collection.

```js
var names = ["ali", "nayana", "andy", "james", "zakk", "perry", "james", "mike", "max"]

for (let i in names) {
  console.log(names[i])
}
```

* Also begins with the keyword `for`
* The parentheses contain the iteratee (the variable representing the index), followed by the keyword `in`, followed by the complex data type you would like to iterate over (either array or object)

## Break (10 minutes / 1:10)

### You Do (5 minutes / 1:15)

With the person next to you, use the concepts from this lesson to write the [99 Bottles of Beer song](http://www.99-bottles-of-beer.net/lyrics.html). Each line of the can be printed out in rapid succession, and does not require user input.

> Bonus: do this once using a for loop and once using a while loop.


## Googling for Documentation (5 minutes / 1:20)

For in depth information on any of these types, the best place to start is google.

Be sure to specify JavaScript (or at least js) and the type you would like information about.

For example: search `javascript number power`

Especially good resources include:
- [W3 Schools](https://www.w3schools.com/) has great reference and tutorials though sometimes does not have the depth you are looking for.
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/) is very similar to W3 in that it has both reference and tutorial but MDN is much more detailed (this can be a good or bad thing).
- [Wikipedia](https://www.wikipedia.org/) is great as a primer for high level ideas that may not be language specific.
- Blog posts, Stack Overflow questions, and Gists have lots of valuable information
  - While these can be great resources, they are not as curated as a the above sites so be wary and check publish dates

## You Do: Fizz Buzz (15 minutes / 1:35)

Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...
* Counts from 1 to 100 and prints out something for each number.
* If the number is divisible by 3, print `"Fizz"`.
* If the number is divisible by 5, print `"Buzz"`.
* If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
* If the number does not meet any of the above conditions, just print the number.

Your output should look something like this...

```text
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
```

## Break (10min / 1:45)

## You Do: Pair Programming Bot (40 min / 2:25)

[Pair Programming Exercises](https://git.generalassemb.ly/ga-wdi-exercises/js-pair-programming-bot-lite)

# Review Questions (5 minutes / 2:30)

  1. What role does Javascript play on a website?
  2. What is the difference between undefined and null?
  3. What are the five primitive data types?
  4. What is an example of type coercion?

# Homework
* [Choose Your Own Adventure](https://git.generalassemb.ly/ga-wdi-exercises/choose_your_own_adventure_js)

-------

# Additional Notes

## Syntax

### Semicolons
- Wouldn't recommend using them, but if you do be consistent!

### camelCase

Javascript variables and function names are written using camel case syntax. That works
- First letter of first word lowercase
- First letter of remaining words uppercase
- No spaces or punctuation between words

#### Examples

```js
var pizzaTopping = "pepperoni"
var isThisVarCamelCase = true

// Function expression
var helloWorld = function(){
  console.log("Hello World!")
}

// Function declaration
function helloWorld(){
  console.log("Hello World!")
}
```

### Comments

Comments are an extremely important part of writing code. They help us make sense of our code, especially for other people reading our code, or when we have walked away from some code and have completely forgotten what certain sections of it do. This happens much more quickly than you may imagine.

If you are working on a team, your documentation and commenting practices often translate to how easy you are to work with!

```js
// Single line comment

/*
  Multiple
  line
  comments
*/
```

## More Practice

### Practice with Conditionals and Loops
- [Conditionals Readme](https://git.generalassemb.ly/ga-wdi-lessons/js-intro/blob/master/booleans-and-conditionals.md) and [Loops Readme](https://git.generalassemb.ly/ga-wdi-lessons/js-intro/blob/master/loops.md)

### Practice with Data Types
- [Data Types
and Collections Readme](https://git.generalassemb.ly/ga-wdi-lessons/js-intro/blob/master/data-types-and-collections.md)

## Resources

- [Khan Academy Intro to Programming JS](https://www.khanacademy.org/computing/computer-programming/programming#intro-to-programming)
- [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going)
- [Eloquent JavaScript](http://eloquentjavascript.net/)
