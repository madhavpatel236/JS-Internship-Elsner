const arr = ["one", "two", "three", "four"];
const str = "Hello";
const obj = { 1: "one", 2: "two" };

for (let key in arr) {
  console.log(`${key}: ${arr[key]} `);
}

for (let val of str) {
  // support array, string, obj
  console.log(` ${val}`);
}
// for(let val of Object.keys(obj)){
//     console.log(`${val}:${obj[val]} `)
// }
