// function expression
console.log("function expression");

// (1) function statement or normal function declaration/definiation
function fun(){
  console.log("thsi si s normal function statement or we can say normal function declaration");
  return 0;
}
fun();


// (2) function expression -> when we store a function into a varaible is called function expression 

// htis is also called anonymous function expression also
const greet=function(){
  console.log("hello i am function expression");
}
greet();

// (3) Named function expresss -> when we store a function a varaibel but this function has some name 

const love=function pyar(){
  console.log("lovely");
}
love();

// (4) anonymous functio nexpression -> 
const x=()=>{
  console.log("anonymous function express");
}
x();

// (5) arrow function --> 

function nonArrow(a,b){
  console.log(a+b);
  return a+b;
}
console.log(nonArrow(10,20));

const arrow=(a,b)=>{console.log("a,b in arrow "); return a+b}
console.log(arrow(10,20));

// implicit return

const a=ele=>{return ele*2}
console.log(a(10));

// iffe 

(function iffe(a,b){
  console.log("hii i am iffe");
  console.log(a,b , "inside ifffe");
  return a*b;
},(10,20));


function findFact(){
  // hwo we will use a anonymous function here
  function factorial(currentElement){
    if(currentElement===1){
      return 1;
    }
    return currentElement*factorial(currentElement-1);
  }
  console.log(factorial(5));
}
findFact();


// creating our own map ---- >

function customMap(arr,callback){
  let result=[];
  for(let i=0; i<arr.length; i++){
    result.push(callback(arr[i]));
  }
  return result;
}
let arr=[1,2,3,4,5,6,7];

console.log(customMap(arr,(ele)=>{return ele*2}));

let ans=customMap(arr,function callback(currentEle){ // if we pass here anonymous function then how i will call --- it later... (thats why we need to use the function expression)
  if(currentEle===1){
    return 1;
  }
  return currentEle*callback(currentEle-1);
})

console.log(ans);


console.log("\n\narray ---- prototyp ----\n\n");
Array.prototype.myMap=function customMapImpletation(callback){
  let result=[];
  for(let i=0; i<this.length; i++){
    result.push(callback(this[i],i));
  }
  return result;
}

const answer=arr.myMap(function callback(ci,index){
  // console.log(`current element is : ${ci} and index is : ${index}`);
  // return ci*ci;
  if(ci===1){
    return 1;
  }
  return ci*callback(ci-1);
})
console.log(answer);


// iffe -- immeditely invodked function --- >
// usecase is : to avoid name conflict  and helpful in to execute tempory logic and iffe will open its own scope -- so just becuse of this it worn't bother with outer scope.
const ty=(function i(a,b){
  console.log(a+b);
  return a*b;
})(10,20);
console.log("ty:",ty);

