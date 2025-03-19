## Types of Functions:

- function name(){}
- (function name(){})()
- function name(para1, para2){}
- let name = () => {}

## Basics of Functions:

- `Generator function with the yeild` => when we need to execute the function

  - How yield Works

    - A generator function is defined using function* (with an asterisk * after function).
    - Inside a generator function, yield is used to pause execution and return a value.
    - Calling the generator function does not execute it immediately but returns a generator object.
    - Using .next() on the generator object resumes execution until the next yield.

  ```js
  function* fun() {
    yield 10;
    yield 20;
    yield 30;
  }

  // Calling the Generate Function
  let gen = fun();
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);

  OUTPUT: 10;
  20;
  30;
  ```

  ```js
  function* countToThree() {
    for (let i = 1; i <= 3; i++) {
      yield i;
    }
  }

  const counter = countToThree();

  console.log(counter.next().value); // 1
  console.log(counter.next().value); // 2
  console.log(counter.next().value); // 3
  console.log(counter.next().done); // true (End of generator)
  ```

  - Use Cases of yield

    - Lazy Iteration – Generate large sequences efficiently.
    - Asynchronous Programming – Work with yield inside async functions (e.g., with co library).
    - State Machines – Implement complex logic that needs step-by-step execution.

- `bind` => In JavaScript, the .bind() method is used to create a new function with a specific this value and optionally preset arguments. It allows you to permanently associate a function with a particular context (object), ensuring that this refers to the desired object when the function is executed.

  ```js
  const fname = {
    fname: "Madhav",
    announce: function (city) {
      console.log(`Hello, ` + this.fname + " From " + city);
    },
  };

  fname.announce("JJP"); // simple call
  const lname = fname.announce;
  const binding = lname.bind(fname); //if we don't use the bind then at the place of this.fname is work as a undefined. but here we use that so we get the fname value of that object.
  binding.call(fname, "jamjodhpur");

  OUTPUT: Hello Madhav From JJP
  Hello Madhav From Jamjodhpur
  ```

- `Async Function` => The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked. Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

  ```js
  const getData = async () => {
    let y = await "Hello World";
    console.log(y);
  };
  console.log(1);
  getData();
  console.log(2);
  fetchData();

  OUTPUT: 1
  Hello World
  2
  Hello World

  ```

- A `Pure Function` is a function (a block of code) that always returns the same result if the same arguments are passed.

  ```js
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3));
  console.log(add(2, 3));

  OUTPUT: 5;
  5;
  ```

- A `nested function` (also known as an inner function) is a function that is declared within another function (known as the outer function). The inner function has access to the variables of its outer function, forming a lexical scope chain.

  ```js
  function outer() {
    console.log("This is the outer function");
    function inner() {
      console.log("This is the inner function.");
    }
    inner();
  }
  outer();
  ```

## JavaScript Functions Properties:

- `fun_name.length` -> give the number of paramaeter needed by the function.
- `fun_name.displayName` -> Set the display name of the function.
<!-- - caller 	Returns the function that invoked the specified function. -->
- `fun_name.apply(data)` It is different from the function call() because it takes arguments as an array.

```js
let student = {
  details: function () {
    return this.name + this.class;
  },
};
let stud1 = {
  name: "Dinesh",
  class: "11th",
};
let stud2 = {
  name: "Vaibhav",
  class: "11th",
};
let x = student.details.apply(stud2);
console.log(x);

OUTPUT: Vaibhav
11th
```

- `isFinite()` => The JavaScript isFinite() function is used to check whether a number is a finite, legal number or not. It returns true for all the values except +infinity, -infinity, or NaN.

  ```js
  console.log(isFinite("Geeks")); // false
  console.log(isFinite(12.32)); // true
  ```

- `isNaN()` => It returns true if the value is a NaN else returns false.

  ```js
  console.log(12);
  console.log("hiii");
  console.log(NAN);

  OUTPUT: false;
  true;
  true;
  ```

- `unescape()` => It decodes that string encoded by the escape() function.

  ```js
  console.log(unescape("Geeks%20for%20Geeks%21%21%21"));

  OUTPUT: Geeks for Geeks!!!
  ```

- `escape()` => It can be transmitted to any computer in any network which supports ASCII characters.

  ```js
  console.log(escape("Geeks for Geeks!!!"));

  OUTPUT: Geeks%20for%20Geeks%21%21%21
  ```

- `number()` => Convert the data type to a number.

  ```js
  function func() {
    let a = new Number(5);
    console.log(a);
  }
  func();

  OUTPUT: [Number: 5]
  ```

- `map()` => The calling function for each and every array element in an array.

  ```js
  let webname = ["welcome", "back"];

  webname.map((web, index) => {
    console.log(web);
  });

  OUTPUT: welcome;
  back;
  ```

- `String()` => Convert the value of an object to a string value.

  ```js
  function func() {
    let value = String("John");
    console.log(value);
  }
  func();
  OUTPUT: John;
  ```

- `eval()` => The eval() function in JavaScript is used to evaluate or execute a string of JavaScript code. It takes a string as an argument and treats it as JavaScript code, executing it within the current scope.

  ```js
  function func() {
    let a = 4;
    let b = 4;

    let value = eval(new String(a * b));
    console.log(value);
  }
  func();
  ```

- `uneval()` => The uneval() function in JavaScript is used to create a string representation of an object's source code. Unlike JSON.stringify(), which converts objects into JSON format, uneval() produces JavaScript code that, when evaluated with eval(), reconstructs the original value.

  ```js
  let obj = 2;
  console.log(eval(obj));
  ```

- `parseInt()` => Accept the string and radix parameters and convert them into an integer.

  ```js
  let v1 = parseInt("3.14");
  console.log('Using parseInt("3.14") = ' + v1);

  OUTPUT: 3.14;
  ```

- `parseFloat()` => Accept the string and convert it into a floating-point number.

  ```js
  let v2 = parseFloat("3.14");
  console.log('Using parseFloat("3.14") = ' + v2);

  OUTPUT: 3.14;
  ```
