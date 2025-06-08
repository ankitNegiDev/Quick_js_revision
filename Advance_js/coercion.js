// coercion or type casting in js ...

console.log("type casting in js ");

// Type casting or Type conversion or Coercion..... (implicit and explicit)

// falsy values are -- null , undefined, false, ""(empty string) , 0,+0,NaN  rest all are truthy values..

console.log(1+"2"); // here output will be 12 --> becuse 1 will concatinate with string 2 -- because 1 will be converted into string by js...
console.log("2"+1); // 21 // same 1 will converted into string and then we will ad..
console.log(2-"1"); // output will be 1 becuse "1" wil converted to number
console.log("4"-1); // output will be 3 becsue stirng 2 will converted into number

if({} && []){
  console.log("truthy values");
}
// empty array and object are also truthy values ....

// console.log(typeof(+"1"));
let num="1";
console.log('num is : ',num);
console.log(typeof num);

num=+num;
console.log('num is : ',num);
console.log(typeof num);
// here + done implicit type convertion...

let str="123";
console.log(typeof str)
console.log(typeof parseInt(str));