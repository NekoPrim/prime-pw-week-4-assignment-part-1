console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  return 'Hello World!';
}
// Call the function to test

console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  console.log('in helloName');
  return 'hello ' + name + '!';
}
// Remember to call the function to test

console.log('Test - should say "Hello name!"', helloName('dez'));
console.log(helloName('michi'));
helloName('neko');

// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
  console.log('in addNumber:', firstNumber, secondNumber);
  answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}

console.log('running addNumbers with 2 and 4:', addNumbers(2, 4));
console.log('running addNumbers with 72 and 5:', addNumbers(72, 5));

// 4. Function to multiply three numbers & return the result

function multiplyThree(num0, num1, num2) {
  console.log('in multiplyThree:', num0, num1, num2);
  answer = num0 * num1 * num2;
  return answer;
}

console.log('running multiplyThree with 1, 2, and 3:', multiplyThree(1, 2, 3));
console.log('running multiplyThree with 11, 16, and 6:', multiplyThree(11, 16, 6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }

}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

console.log('isPositive - should say false', isPositive(-8));
console.log('isPositive - should say true', isPositive(12));
console.log('isPositive - should say true', isPositive(1));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
  console.log('in getLast');
  if (array.length > 0) {
    return array[array.length - 1];;
  }
  else {
    return 'undefined';
  }
}

let animals = ['dog', 'cat', 'horse', 'bird'];

console.log('last animal is:', getLast(animals));

let soups = ['minestrone', 'tomato', 'potato'];

console.log('last soup is:', getLast(soups));

let cakes = [];

console.log('last cake is:', getLast(cakes));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  console.log('in find');
  for (let x of array) {
    console.log('in loop', x);
    if (x === value) {
      console.log(`${value} is in this array`);
      return true;
    }
    if (x != value && x === array[array.length-1]) {
      console.log(`${value} is not in this array`)
      return false;
    }
  }
}

console.log(find('bird', animals));

console.log(find('potato', animals));

console.log(find('minestrone', soups));

console.log(find('tomato', soups));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
