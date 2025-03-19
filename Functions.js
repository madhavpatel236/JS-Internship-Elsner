// Generator function:
function* Three() {
  yield 12, yield 13, yield 14;
}

const obj = Three();
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().done);

function* count() {
  for (let i = 1; i <= 4; i++) {
    yield i + 1;
  }
}
const obj2 = count();
// console.log(obj2.next());
// console.log(obj2.next().value);
// console.log(obj2.next().value);

// Bind:
const fname = {
  fname: "Madhav",
  announce: function (city) {
    console.log(`Hello, ` + this.fname + ' From ' + city);
  },
};

fname.announce('JJP'); // simple call
const lname = fname.announce  ;
const binding = lname.bind(fname);
binding.call(fname, "jamjodhpur");
