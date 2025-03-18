## Types of Functions:

- function name(){}
- (function name(){})()
- function name(para1, para2){}
- let name = () => {}

## JavaScript Functions Properties:

- fun_name.length -> give the number of paramaeter needed by the function.
- fun_name.displayName -> Set the display name of the function.
<!-- - caller 	Returns the function that invoked the specified function. -->
- fun_name.apply(data) It is different from the function call() because it takes arguments as an array.
  - EX:
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
    ```



- isFinite() => The JavaScript isFinite() function is used to check whether a number is a finite, legal number or not. It returns true for all the values except +infinity, -infinity, or NaN.
   - EX:

        ``` js
            console.log(isFinite("Geeks"));  // false
            console.log(isFinite(12.32)); // true
        ```

