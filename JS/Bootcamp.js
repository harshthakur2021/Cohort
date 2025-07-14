// String

let name= "Rohit"
// Age
let age= 24

// Boolean- true, false
let ispaid= true

// Null means Empty
let favoriteClass= null
// Unddefined - Baad me dekhenge
let hometown;

//console.log(hometown)

console.log(name)

let skills= ["Html", "CSS", "Java"]


let studentProfile ={
    name: "Harsh",
    age: 22,
    ispaid: true,
    skills:["Html", "CSS", "Javascript", "Java"],
    favoriteClass: null
}

// Conditional Statement

let weather= "claudy"

if(weather=== "rainy"){
console.log("Its Raining")
}
else{
   console.log("Stay in the house")
}

// Arrays

let fruits =["apple", "cherry", "Banana"];

console.log(fruits.length);

// Loops

let teas = ["Masala", "Ginger", "oolong", "orange", "Lemon", "Cold"];

for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}
// Objects

const person = {
  x:10
}

console.log(person.x)

// Map, filter, Reduce

const a= [11,2,7,4,6,15,9];

// Map = .map() is a JavaScript array method used to create a new array by applying a function to each element of the original array.

//  let b= a.map((e)=> e+1);
//  console.log(b)

// Filter = .filter() is a JavaScript array method used to select only the elements that meet a conditions.





// const result = a.filter((e) => e > 5);
// console.log(result);


// Reduce= .reduce() is a JavaScript array method used to combine all elements of an array into a single value — like a sum, product, or something custom.
let result= a.reduce((s,e)=>s+e,0)
console.log(result)