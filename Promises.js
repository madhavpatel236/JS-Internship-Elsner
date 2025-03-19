let checkeven = new Promise((resolve, reject) => {
  let number = 81;
  if (number % 2 == 0) resolve("The number is even");
  else reject("The number is odd");
})
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
    