1- There are two types of data types in javascript--
a- Primitive data types-- These are the basic data types in javascript. They are immutable, meaning they cannot be changed once they are created. The primitive data types in javascript are: Number,strings,boolean,symbol,big-int,undefined,null.
b- Non-primitive data types -- These are the complex data types in javascript. They are mutable, meaning they can be changed once they are created: Arrays, objects, functions.

2-  hoisting in javascript -- Hoisting is a feature in javascript where variables and functions are moved to the top of their scop .  example :  
console.log(x)
var x = 10; // x is hoisted to the top of the scope
output : undefined

3-  the major differcne between var, let and const in javascript -- 
 var is fucn scoped and let and cosnt is block scope .
 var can be redeclared  and const can not be redeclared .
 var can be reasigned  and const can not be reasigned .



  4- closure in javascript -- when a function rember their outer scope parameter  even when the outer function has returned. example : 
  function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
        }
        }
        let inner = outer();
        inner(); // 1
        inner(); // 2


  5-differcen between ==, === in javascript --
  == checks  only equalty and === checks for both equality and data types. example :
  5=="5" // true
  5==="5" // false

  6- truthy and falsy values in javascript  are values that are treated as true or false in a conditional statement. for example truthy are : 1, "hello", true, [], {} and falsy are : 0, "", null, undefined, NaN.

  7-- differcne between null and undefined are : null and undefiend is primitve data types  null is used to represent thr abscence of any an value and 
  undefined is used to represent an uninitialized variable.

  8- event delegation in javascript --u can attsch a event listener on any  parent element and
  it triggers the event listener when any child element is clicked.

  9-use of this keyword in javascript -- this keyword is used to refer to the current object. it is used to access the current object.

  10- arrow function in javascript -- arrow function is a shorthand for a function expression. it is used to define small functions and it is differnet from regular fucntion they donot have their own this , arguments.
  example : 
  let add = (a, b) => a + b;

  11-differnce between async and sync in javascript -- async is used to perform a task in the background and sync is used to perform a task in the foreground. which means
  async is non-blocking and sync is blocking. means if you are performing a task in the foreground it will block the execution of the code and if you are performing a task in the background it will not block the execution of the code.


  12- evnet loop in javascript -- it helps to run your javascript single thread to multy thread . it is a loop that runs continuously in the background and it is used to handle events and tasks . it is a single thread that runs all the tasks and events in the background.

  13-  promises is a feature in javascript that allows you to handle asynchronous . it is used to handle the result of an asynchronous operation. it is a object that is used to handle the result of an asynchronous operation. it has three states : pending, resolved, and rejected. 


14- callback function in javascript -- it is a function that is passed as an argument to another function. it is used to handle the result of an asynchronous operation. 
differnt from promises because of callbck is a function that is passed as an argument to another function and promises is an object that is used to handle the result of an asynchronous operation.

15-differbce between map,filter and foreach in javascript -- map is used to create a new array from an existing array. filter is used to  provide  the only element which can pass the statement and condtion . foreach is used to loop through an array and perform a task on each element but it does not return any value. but map and filter return a new array. 

example 
map
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

filter 
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

foreach
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number)); // 1, 2, 3,

 16-settimeout and setinterval in javascript -- settimeout is used to execute a function after a certain amount of time . setinterval is used to execute a function at regular intervals. example : 
settimeout
setTimeout(() => console.log('Hello World!'), 3000); // Hello World! after 3 seconds
setinterval
setInterval(() => console.log('Hello World!'), 3000); // Hello World! every 3 seconds

17-  differcne between local storage and session storage in javascript -- local storage is used to store data for a longer period of time . session storage is used to store data for a shorter period of time . example : 
local storage   
localStorage.setItem('name', 'John Doe');
localStorage.getItem('name'); // John Doe
session storage
sessionStorage.setItem('name', 'John Doe');
sessionStorage.getItem('name'); // John Doe

18- call(),apply(), bind() in javascript -- call() is used to call a function with a given this value and arguments . apply() is used to call a function with a given this value and an array of arguments. bind() is used to bind a function to a given this value and return a new function.

19-higher order function in javascript -- it is a function that takes another function as an argument or returns a function as a result. example :
function add(a, b) {
 return a + b;
 }
 function higherOrderFunction(func, a, b) {
    return func(a, b);
    }
    higherOrderFunction(add, 2, 3); // 5
   
20  async/await is a feature in javascript that allows you to write asynchronous code that looks and feels like synchronous code. it is used to handle the result of an asynchronous operation. it is a combination of the async and await keywords. async is used to declare a function that returns a promise . await is used to pause the execution of a function until a promise is resolved or rejected. example :
async function myFunction() {
    const result = await myFunction();
    console.log(result);
    }
    myFunction(); // 5







                                       
       

   
