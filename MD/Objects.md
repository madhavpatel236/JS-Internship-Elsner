## Object:

#### Coverd Topics:

- Object.assign()
- Object.create()
- Object.defineProperty()
- Object.defineProperties()
- Object.entries()
- Object.freeze()
- Object.fromEntries()
- Object.getOwnPropertyDescriptor(obj, prop);
- Object.getOwnPropertyNames()
- Object.getOwnPropertySymbols()
- Object.getPrototypeOf()


#

- `Object.assign()` => Object.assign() is a method used to copy the properties from one or more source objects to a target object.

  ```js
  Object.assign(target, ...sources);
  ```

  ```js
  const target = { a: 1 };
  const source = { b: 2, c: 3 };

  const result = Object.assign(target, source);

  console.log(result); // { a: 1, b: 2, c: 3 }
  console.log(target); // { a: 1, b: 2, c: 3 } (modified target)
  ```

  ```js
  const obj1 = { name: "John" };
  const obj2 = { age: 25 };
  const merged = Object.assign({}, obj1, obj2);
  console.log(merged); // { name: "John", age: 25 }
  ```

- `object.create()` => JavaScript object.create() method is used to create a new object with the specified prototype object and properties. Object.create() method returns a new object with the specified prototype object and properties.

  ```js
    Object.create(prototype[, propertiesObject])
  ```

  ```js
  const person = {
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

  // Creating a new object with `person` as its prototype
  const student = Object.create(person);
  student.name = "Alice";

  student.greet();

  OUTPUT: Hello, my name is Alice
  ```

- `Object.defineProperty()` => The Object.defineProperty() method is used to add or modify properties of an object with fine-grained control over attributes like writability, enumerability, and configurability.

  ```js
  Object.defineProperty(obj, prop, descriptor);
  ```

  ```js
  const user = {};

  Object.defineProperty(user, "name", {
    value: "Alice",
    writable: false, // Cannot modify the property
    enumerable: true, // Will appear in loops like for...in
    configurable: false, // Cannot delete or modify property attributes
  });

  console.log(user.name); // Output: Alice

  user.name = "Bob"; // No effect (writable is false)
  console.log(user.name); // Output: Alice
  ```

- `Object.defineProperties()` => The Object.defineProperties() method allows you to define multiple properties on an object at once, with detailed control over each property’s characteristics.

  ```js
  Object.defineProperties(obj, {
  prop1: { descriptor1 },
  prop2: { descriptor2 },
  ...
  });
  ```

  ```js
  const user = {};
  ```

  ```js
  Object.defineProperties(user, {
    name: {
      value: "Alice",
      writable: false, // Cannot be changed
      enumerable: true, // Appears in loops
      configurable: false, // Cannot be deleted or redefined
    },
    age: {
      value: 25,
      writable: true, // Can be changed
      enumerable: true,
      configurable: true,
    },
  });

  console.log(user.name); // Output: Alice
  user.name = "Bob"; // No effect (writable is false)
  console.log(user.name); // Output: Alice

  console.log(user.age); // Output: 25
  user.age = 30;
  console.log(user.age); // Output: 30
  ```

- `Object.entries()` => The Object.entries() method returns an array of a given object's own enumerable property key-value pairs.

  - Make it a object into the array form in key value form.
  - object => array (key-value form)

  ```js
  Object.entries(obj);
  ```

  ```js
  const user = { name: "Alice", age: 25, city: "New York" };

  console.log(Object.entries(user));

  OUTPUT: [
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"],
  ];
  ```

- `Object freeze()` => The Object.freeze() method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.

  - Properties cannot be added or removed
  - Existing properties cannot be changed
  - The object remains immutable

    ```js
    Object.freeze(obj);
    ```

    ```js
    const person = {
      name: "Alice",
      age: 25,
    };

    Object.freeze(person);

    person.age = 30; // Won't work
    person.city = "New York"; // Won't work
    delete person.name; // Won't work

    console.log(person);
    // Output: { name: "Alice", age: 25 }
    ```

- `Object.fromEntries()` => The Object.fromEntries() method converts an array of key-value pairs into an object. It is the reverse of Object.entries().

  ```js
  Object.fromEntries(array);
  ```

  ```js
  const entries = [
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"],
  ];
  const obj = Object.fromEntries(entries);
  console.log(obj);

  OUTPUT: { name: "Alice", age: 25, city: "New York" }
  ```

  - It returns a new object created from the given array.

- `Object.getOwnPropertyDescriptor()` => The Object.getOwnPropertyDescriptor() method retrieves the property descriptor of a specific property in an object. This allows you to check attributes like writable, enumerable, configurable, and value.

  ```js
  Object.getOwnPropertyDescriptor(obj, prop);
  // obj – The object containing the property.
  // prop – The name of the property whose descriptor you want to get.
  ```

  ```js
  const user = {
    name: "Alice",
  };

  const descriptor = Object.getOwnPropertyDescriptor(user, "name");
  console.log(descriptor);

  OUTPUT: {
    value: "Alice",
    writable: true,
    enumerable: true,
    configurable: true
  }

  ```

- `Object.getOwnPropertyNames()` => The Object.getOwnPropertyNames() method returns an array of all property names (keys) of an object, including non-enumerable properties but excluding properties from the prototype chain.

  ```js
  Object.getOwnPropertyNames(obj);
  // obj – The object whose property names you want to retrieve.
  ```

  ```js
  const user = {
    name: "Alice",
    age: 25,
  };

  console.log(Object.getOwnPropertyNames(user));

  OUTPUT: ["name", "age"];
  ```

- `Object.getOwnPropertySymbols()` => The Object.getOwnPropertySymbols() method returns an array of all symbol properties (keys) of a given object. It excludes string keys and inherited properties from the prototype chain.

  ```js
  Object.getOwnPropertySymbols(obj);
  //obj – The object whose symbol properties you want to retrieve.
  // Returns an array of symbol properties.
  ```

  ```js
  const sym1 = Symbol("id");
  const sym2 = Symbol("secret");

  const user = {
    name: "Alice",
    [sym1]: 123,
    [sym2]: "Hidden",
  };

  console.log(Object.getOwnPropertySymbols(user));

  OUTPUT: [Symbol(id), Symbol(secret)];
  ```

- `Object.getPrototypeOf()` => The Object.getPrototypeOf() method returns the prototype (i.e., the **proto** property) of a given object.

  ```js
  Object.getPrototypeOf(obj);
  // obj – The object whose prototype you want to get.
  // Returns the prototype of obj (or null if there is no prototype).
  ```

  ```js
  function Person(name) {
    this.name = name;
  }

  const person1 = new Person("Alice");

  console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
  console.log(Object.getPrototypeOf(person1)); // Shows Person prototype
  ```
