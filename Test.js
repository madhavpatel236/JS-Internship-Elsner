const company = new Map();
company.set("name", "GFG");
company.set("no_of_employee", 200);
company.set("category", "education");
// function print(key, values) {
//     console.log(values + "=>" + key);
// }
company.forEach( (key, value) => {
    console.log( "key: " + key + " value: " + value );
} );