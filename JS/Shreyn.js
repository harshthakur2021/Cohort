let a= [1,2,3,4]
//console.log(a)
 a= a.map((e)=> e+1);
 console.log(a)

let c=  a.filter((e) => e>2)
console.log(c)

var obj = {
    name: "harsh",
    age:12
}
console.log(obj.age)

// async await ka use krke ap async code ko bhi sync execute kra skta hai
// aynsc function hmsea ek promise return krega

async function getData(){
    setTimeout(function(){
    console.log("Hey I am Harsh Associate Software Engineer")
    },3000)
}

 getData();

// await - ?

// fetch API

//Request Types-:
//1. Get- Jb ap koi data retrive krna chahte hai
//2. Post- jb ap koi data create krna chahta hai, push krna chahte hai.
//3. Put- Jb ap koi data existence resources ko update krna chahte hai.
//4. Delete- Jb ap koi data remove krna chahte hai.

// Scenario:
// prepare url/ api endpoint -> sync
// Await// fetch data -> network call -> async
// process data -> sync

//particular api json return krta hai.. json means javascript object notation...
 async function getDataa(){
    // get request - async
   let response= await fetch('https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/comments?postId=1');
   let data =  await response.json(); 
   console.log(data)
 } 

 getDataa();


 