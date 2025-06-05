// loops in js 

// for loop 
/**
 * for(initialization;condition;updation){code}
 */

// print first n number..
let n=10;
for(let i=1; i<=n; i++){
  console.log(i);
}
console.log("\n--------\n\n");

// print table of n 
let i=1;
while(i<=10){
  console.log(n*i);
  i++;
}

// do while loop 
n=5;
i=1;
do{
  console.log(" n*i is : ",n*i);
  i++;
}while(i<=10);

// for of loop -- we can run for of loop on object because object are not iterable..
let obj={
  name:"anki",
  age:23
}
let arr=["first","second","third"];
// for(key of obj){
//   console.log(key);
// }

for(item of arr){
  console.log("item of array is : ",item);
}

// for in loop

for(key in obj){
  console.log("key : ",key);
}

for(key in arr){
  console.log("key in arr is : ",key);
}

// for each is not a loop its a method of array
arr.forEach(function callback(currentElement,index,arr){
  console.log(`item : ${currentElement} at index ${index} in arrray : ${arr}`);
})

// we can't run for each on object.
// obj.forEach((e)=>{
//   console.log(e);
// })


// break in loop...

// let random=Math.floor(Math.random()* (max-min+1))+min;
let random=Math.floor(Math.random()* (25-20+1))+20;
console.log("random is : ",random);
for(let i=0; i<10; i++){
  let random=Math.floor(Math.random()* (25-20+1))+20;
  if(random>=22 && random <=25){
    console.log("i is : ",i ,"and random is : ",random);
    break;
  }else{
    console.log(`i is : ${i} and random is : ${random}`);
  }
}

// uanary operator ... 

/**
 * ++x - pre-incriment operator - first increase the value then use
 * x++ - post incriment operator - first use the value then increase
 * --x - pre-decriment operator - first decrease the value and then use
 * x-- - post-decriment operator - first use the value and then decrease it.
 */

let x=100;
console.log("x is : ",x);

// pre-incriment--
console.log("x during pre-incriment : ",++x);
console.log("x after pre-incriment is : ",x);

// post incriment --
console.log("x during post incriment : ",x++);
console.log("x after post incriment is : ",x);

// pre-decriment --
console.log("x during pre-decirmnt is : ",--x);
console.log("x after pre-decriment is : ",x);

// post-deriment --
console.log("x during post decriment is : ",x--);
console.log("x after post decriment is : ",x);

function preIncriment(x){
  console.log("value of x in pre-incriment in function is : ",x); // 101
}
// preIncriment(++100); // unary operator does not work on constant directly .. unary need at least one signle operatnd.. ====> constant are immutable in js.
x=100;
preIncriment(++x); // here first value is incriased and then passed. // 101
console.log("value of x after function call : ",x); // 101

function postIncriment(x){
  console.log("value of x in postIncriment is : ",x);
}
x=100;
postIncriment(x++); // first value is passed which is 100 and later it will be increse 101 so postIncriment function recives 100 not 101.
console.log("value after postIncriment is : ",x);

// same for decriment also...
