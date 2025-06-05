console.log("function");
// syntax to write function is : 
/**
 * functionKeyword nameOfFunction (para1 , para2 ... paraN){ ...code..}
*/

function customFunction(){
  console.log("hello how i are u");
}
customFunction(); // function call or function invocation

// function to find even or odd number..

let number=11;
function isEvenOrOdd(num){ // here num is called parameter
  if(num%2===0){
    console.log("number is even");
  }else{
    console.log("number is odd");
  }
}
isEvenOrOdd(number); // here number is called argument

// argument are actual values that we passed during function call.
// parameter are just placeholder for these argument if we did not pass any argument then these parameter will have undefined. and type of paramter will depend upon the value we pass if we pass number then paramter are of number and so on...

// now generating the output --- 
// Note -: to generate ouput we will use reutrn keyword ... at any pointo f time return will return only one value .. if we want to return multiple value then we neeed to use object or array...

// when return is hit then control will move to exactly that point from where it is called.
// when return is hit then entry of function from call stack is also removed..

function generateOutput(num){
  if(num %2===0){
    return "even";
  }else{
    return "odd";
  }
}
console.log(generateOutput(10));
if(generateOutput(10)){
  console.log("yeee number is even");
}else{
  console.log("sorry the number is odd ");
}

// if we did not reutrn any thing from function then js will automatically reutrn the undefined.

function x(){
  console.log("not returning any thing");
}
console.log(x()); // undefined.


// passing paramter in function ... 
// function with single paramter ... 
function a(para){
  console.log(para);
  return para*para;
}
console.log(a(10));

// function with default paramter..
// Note : plse ensure that the default paramter should be the last paramter in the function definition otherwise if we have paramter like this para1="love", para2 and we pass value like 10 then it won't happen that 10 will assigned to para2 ... 10 will assigned to para1 and para2 will ahve undeefined.
// default paramter must be last formal paramter just like rest paramter.
function b(para1,para2="love"){
  console.log("para1 and para2 are : ",para1,para2);
  return para1+para2;
}
console.log(b(10));

// function with multiple paramter 

function c(para1,para2,para3,para4){
  console.log("para 1---4 are : ",para1,para2,para3,para4);
  return (para1+para2+para3)*para4;
}
console.log(c(1,2,3,4));

// function with any no of paramter.. or unlimited no of parameter...

// (1) using the inbuild  --- argument object..
let arr=[1,2,3,4,5,6,7,8,9,10];
function d(){
  console.log("argument object is : ",arguments);
  // now we need to convert argument into array --- for this we have three way -- I - using Array.from() , II - using spread operator , III - using constArgsArray= [].slice.call(arguments)  or Array.prototype.slice.call|apply|bind(arguments);
  const argsArray=Array.from(arguments);
  console.log(Array.isArray(argsArray));
  let sum =0;
  for(let i=0; i<argsArray.length; i++){
    sum +=argsArray[i];
  }
  return sum;
}
console.log(d(...arr)); // here we are spreadeing the array so that we can pass each array element as individual paramter / argument
// (2) using rest paramter ---
function e(...para){
  console.log("para are : ",para);
  let sum =0;
  for(let i=0; i<para.length; i++){
    sum +=para[i];
  }
  return sum;
}
console.log(e(...arr));

// in function we can pass any data as an argument...
/*
 * (i) -> passing array as a argument into the function.
 * (ii) -> passing object as a argument into the function.
 * (iii) -> passing function as a argument into the function.
 * (iv) -> passing string as a argument into the function.
 * (v) -> passing null,undefined,boolean,number as a argument into the function.
*/
console.log("\n\n-----\n\n");
function f(myArr,myObj,myFun,str,nul,undefined,bool,num){
  console.log(myArr,myObj,myFun(),str,nul,undefined,bool,num);
}
f([1,2,3],{name:"anki",age:23},function love(){console.log("hlo my love")},"bingo",null,undefined,true,123);


// inbuilt function in js or Math functions....

// Math.abs() - to get absolute value
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)) ; // 10 

// Math.floor(); -- to get floor value
console.log(Math.floor(4.5)); // 4
console.log(Math.floor(4.9)); // 4

// Math.ceil(); -- to get ceil value
console.log(Math.ceil(4.5)); // 5
console.log(Math.ceil(4.9)); // 5

// Marh.pow(); -- to get power.
console.log(Math.pow(2,3)); // 8

// Math.random(); 

// console.log(Math.floor(Math.random() * (max-min+1)) + min) // random number b/w 40 and 50
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);
console.log(Math.floor(Math.random() * (50-40 + 1)) + 40);


// date object in js 

const date=new Date();
console.log("date is : ",date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.toLocaleTimeString());
// Example: "11:56:11 AM"




// function are also called first class citizens in js because we can pass function as a argument to another function and we can return function from another function and we can assign function to a variable and so on.

// passign a function as an argument to another function 
console.log("\n\n-----\n\n ");
function myFun(f1){
  console.log("myFun is called");
  f1();
  return "f1 called sucessfully inside myFun";
}
console.log(myFun(function love(){console.log("hello i am passed as an argument to myFun")})
);
// (1) function statement or function declaration -> when we create a normal faunction
function p(){
  console.log("hello this is function statement");
}
p();

// (2) function expression -> when we store a function into a varaible.
const greet=function(){
  console.log("hello i am function expression because i a mstored ina varaible");
}
greet();

// (3) anonymous function -> when we did not write the name for any function ..
const fun=function(){
  console.log("hello i am anonymous function");
}
fun();

// (4) arrow fucntion -> 
const arrowFun=()=>{
  console.log("hello i am arrow function");
}



// (5) named function expression -> when we write the name for the function which is stored in a variable.
const namedFun=function love(){console.log("hello i am named function expression");}



// (6) iffe -> immediately invoked function expression -> when we write a function and immediately call it. and we can also pass argument to iffe. and we can also return value from iffe. and we can also store iffe into a variable. and we can also pass function as a argument to iffe. and we can also return function from iffe. and we can also pass object as a argument to iffe. and we can also return object from iffe. and we can also pass array as a argument to iffe. and we can also

// (function functionName(parameter1, parameter2 --- paramenterN){
//   console.log("hello i am iffe");
// })(argument1,argument2, ...... argumentN);










// Note : ===>  app.use(express.json()); // its inbuilt in the expres 4.16.0 and above before that we need to install body-parser and use it like app.use(bodyParser.json()); same for other type of data like urlencoded,raw,text,jsonp and so on.