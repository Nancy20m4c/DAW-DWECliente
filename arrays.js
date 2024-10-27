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

// arrays Names
let data = [
  {name: "Nacho", telephone: "966112233", age: 40},
  {name: "Ana", telephone: "911223344", age: 35},
  {name: "Mario", phone: "611998877", age: 15},
  {name: "Laura", telephone: "633663366", age: 17}
  ];

  data.push({name: "Pedro", telephone: "611944444", age: 25});
  data.push({name: "Julia", phone: "633232323", age: 37});

  console.log(data);

  data.sort((a, b) => a.age - b.age);

  console.log(data);