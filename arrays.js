const countries = ["España", "Francia", "Alemania", "Italia"];

for (let i = 0; i < countries.length; i++) {
    //mostramos paises
  console.log(countries[i]);
}

countries.shift();

console.log('Paises despues de eliminiar el primero');
for (let i = 0; i < countries.length; i++) {
  //mostramos paises
console.log(countries[i]);
}

// array letters
let letters = [];

letters.unshift("A","B", "C");
letters.push("D","E");

console.log(letters);

letters.shift();
letters.pop();

console.log(letters);