
// prototypes in js
console.log("prototypes in js");

// js is kind of object linked to an object.. and the main reason for this is prototypes..

// prototypes -- prototypes in js is a mechanism using which object share properties with another object...

// to access the name less entitye -- Object.prototype -- which has mutltiple function like toString , isPrototypeOf() etc..

// console.log(Object.prototype);

// Object.protottype --- nameless entity that have mutlitple function and it has a special function called constructor and if we call construtor of it then we will get that Object (capital O object).

// Object.Prototype --- 
// Object.prototype.constructor() -- 

// now if we create a class or function then js will create a nmaeless entity in corresponding to it ..and to access it we can say functionName|className.prototype

// Product.prototype ---> name less entitty
// Product.prototype.constructor() --- got the object .of our function|class that js created..


// linking --- Product.prototype will be linked to Object.prototype

// now when we do new Product(args...) then new does 4 things -- and in step 3 it will create a hidden link b/w newely created object and Product.prototype


class Product{

  constructor(name,age){
    this.name=name;
    this.age=age;
    this.print=function (){
      console.log("print : ",this);
    }
  }
  display(){
    console.log(this);
  }
}
let productObj=new Product("bingo",23);

// Object.prototype -----link----> name lessentity
// Object.prototype.constructor() ------link ---> Object
// Product.prototype ----link -- > name less entity
// Product.prototype.constructor() ---link ---> Product
// new Product("bingo",23) -----> newely creaated object is linked to Product.prototype


// now if we do 
productObj.display(); // now this disply fun is not avilable on the object so using this link we will move to Product.prototype which is having the disply function ...
productObj.toString(); // similary productObj is not having tostring so it will move to Product.prototype -- here is also no toString() so it will move ot Object.prototype.


// to access the disply function --- ways 

// (a) productObj.display() --- 
// (b) Product.prototype.display() but in this case call site will be nameless entity for Product ...
// (c) using hidden link -- dunder protot -- productObj.__proto__.display() -- agai nhere call site is namess entity for product..

// productObj.__proto__ --> product nameless entity
// ProductObj.__proto__.__proto__ --> nameless enity for Object..

// function constructor --- 

function Student(name){
  this.name=name;
  this.print=function (){
    console.log("print : ",this);
  }
}
let stuObj=new Student("anki");

console.log("stud obj : ",stuObj); // here we will find tthat stuObj has name and print function... but if we want to add the function to the prototype then we can do like this 
Student.prototype.display=function (){
  console.log("idsplya student . prototype : ",this);
}
// in classes we don't add manully member function to protoype because its automatically done .. in function we need to do it manually...
stuObj.display();

// now if we do any chnges in disply function once the object is created then previously created object will also show those changes where as c++ does not behavie like this .


// this si inheritance using functions......

class Eventss{

  bookEvent(){
    console.log("booking event");
  }
}

// child class that has some feature of parent calss (inheritance)
// by doing extends movie.prototype will point to Event.prototype not the Object.prototype. and -- > Movie.prototype --> Event.prototype --> Object.prototype
// class Movieee extends Events{
//   showMovieTime(){
//     console.log("show time in movie");
//   }
// }

// let movieeeObject=new Movieee();
// movieeeObject.bookEvent(); // -- accessible only just because of --- extends which links the Movie.prototype to Event.prototype..


// inheritance using function ---

// Call , apply , bind ---

/**
 * as we know this in normal function point to caller or call site but in case of arrow function this resolve lexically..
 * call apply bind helps us in manual setting of where this will point.
 * in case of arrow function this will resolve lexically until we did not do any manual intervention means until we did not set the value of this manually.
 */


let originalObj={
  name:"bingolive",
  greet:()=>{
    console.log("name is : ",this.name);
  },
  greetNormal:function (){
    console.log("name in greet normal : ",this.name);
  }
}
originalObj.greet(); // here this will resolved lexically so this will point to global object --that's why name will be undefined.

// now if i want to set the same orginalObj where this will point then 
// originalObj.greet.call(originalObj); //! but keep in mind that call , apply , bind will only work with normal function not with arrow function...

// now when we do orignalObj.greetNormal in that this will point to caller which is orignalObj
originalObj.greetNormal();

// but if i want that this should point to another object...
let newObj={
  name:"anki",
  age:23
}
// originalObj.greet.call(newObj); // this is where it prooves that call, apply, bind will not work with arrow function

originalObj.greetNormal.call(newObj);

// call syntax --- functionName.call(firstArgumentWillBeValueOfThis,arg2,arg3...argn these are extra argument that we can pass if our function expect args).

// let callObj={
//   name:"bingo",
//   print:function(name,age,city,country){
//     console.log(`name is : ${name}\nCity is : ${city}\nAge is : ${age}\nCountry is : ${country}`);
//   }
// }
// let newCallObj={
//   name:"anki",
//   age:23,
//   city:"seattle",
//   country:"russia"
// }

// this is how we can pass multiple arguments in the call -- just pass them as , comma seprated..
// callObj.print.call(newCallObj,"myname",23,"city seattle","country russia");
// console.log(global);
// "use strict"; // at the top of the file ...

global.name="globalname";
global.city="globalcity"
global.age="global age";
global.country="global country";
let callObj={
  name:"bingo",
  age:34,
  city:"love",
  country:"lliii",
  print:function(country){
    console.log(`name is : ${this.name}\nCity is : ${this.city}\nAge is : ${this.age}\nCountry is : ${this.country}`);
  }
}
let newCallObj={
  name:"anki",
  age:23,
  city:"seattle",
  country:"russia"
}

// callObj.print.call(newCallObj,"paris");

// but what if we did not pass the value of this ..

callObj.print.call(); 
// now keep in mind -- if we did not pass any value of this in call then in non-strict mode -- js will automatically replace the undefined/null to the window object in browser or global object in node.js since global object is not having name,city,countr etc property so its giving me undefined... but if we attach these protory then we can get ourput --- but in strict mode it will remain same as undefined / null.

// callObj.print.call("love"); // here "love" in string will becsome the value of this ...
// callObj.print.call(callObj); // here using call we are just explictely saying this will point to callObj-- which by default this will point to it -- in the print function...

// call method with normal function ..

function love(name){
  let age=23;
  let city="mu";
  console.log("hello name is : ",this.name);
  console.log("name is : ",name);
  console.log("age is : ",age);
  console.log("city is : ",city);
}
// love.call({
//   name:"ankii"
// },"lovely");
let normalFunObj={
  name:"ankiiiiiiii"
}
love.call(normalFunObj,"liiiiiiiiiiiii");
console.log("\n\n");




// (2) apply --- apply method takes two argument one is the where this will point and second is an array of arguments -- means instaead of taking , comma seprated values -- apply takes single array and inside it we can pass multiple arguments..


let applyObj={
  name:"apply",
  city:"valdivostak",
  applyFun:function (para1,para2,para3){
    // console.log("arrr------------------------- ",arr); // the reason why we are not getting the whole array that we passed in apply is because js will automatically spread it internally --- and that's why values indie the array are passed as a individual argument...for which we need to create seprate seprate paramters.............
    console.log("name is : ",this.name);
    console.log("city is : ",this.city);
    console.log(`para 1 is : ${para1}\npra 2 is : ${para2}\npara 3 is : ${para3}`);
  }
}
applyObj.applyFun("par1","para2","para3");
let newApplyObj={
  name:"new apply",
  city:"new apply city"
}

applyObj.applyFun.apply(newApplyObj,["val for para1","val for para2","val for para3"])
console.log("\n\n");


// (3) bind ---now bind also does same work as call but instead of immeditaly calling the function just like cll and paly bind will return us a function where value of this will be binded... and now we can call this returned function anywhere in our code..

let bindObj={
  name:"bind name",
  age:23,
  bindFun:function (para1,para2){
    console.log("name is : ",this.name);
    console.log("age is : ",this.age);
    console.log(`para1 is : ${para1}\nAnd para2 is : ${para2}`);
  }
}
let newBindObj={
  name:"new bind",
  age:"new bind age"
}
let returnedBindedFun=bindObj.bindFun.bind(newBindObj);

console.log(returnedBindedFun);
console.log(returnedBindedFun("this is apra1 ","this is para 2"));
console.log("\n\n");

// bind with normal function ....

function normalBind(para1,par2){
  name="normal bind fun"
  console.log("this is name is : ",this.name);
  console.log(`para 1 is : ${para1}\npara 2 is : {para2}`);
}
let objBind={
  name:"objbind"
}
let rtrnBind=normalBind.bind(objBind);
rtrnBind("para1 ---","para2----");

// call takes n no of argument, apply take only 2 argument one is thisValue and another is array of argument that we want to pass. , bind also takes n no of argument. where first argument is valueOfThis and rest are our parameter that we wana pass..
// call and apply invokes or call the function immediately but bind return a function in which this is binded.
// function.call(thisValu,arg1,arg2.....argN); // call
// function.apply(thisValue,[arg1,arg2,arg3....argN]); // apply
// let bindedFun=function.bind(thisvalue,arg1,arg2.....argN); // bind..



// inhertianc in normal functions or without classs -----


function Events(dateOfEvent,name,price){
  this.dateOfEvent=dateOfEvent;
}
// now we need to attach a function on the prototype of the Events...
Events.prototype.bookEvents=function (){
  console.log(`congrats you have booked this : event ${name} at this price : ${price} on this date : ${dateOfEvent}`);
}
// now Event.prototype has -- bookEvents function...

function Movie(){
  
}
// Movie.prototype.__proto__=Events.prototype;
// Movie.prototype=Object.create(Events.prototype) both are same -- 


// super keyword .. 

class a{
  constructor(name){
    this.name=name;
  }

  showName(){
    console.log("name is : ",this.name);
  }
}

class b extends a {
  constructor(name,city){
    // this.city=city; // we need to call parent class constructor first
    super(name);
    this.city=city;
  }
}
let bObj=new b("anki","settle");
console.log("boj is : ",bObj);
bObj.showName();


// now in function there is no super keyword -- so we use call apply bind..
function aa(name){
  this.name=name;
}

function bb(name,age){
  // aa.call(this,name);
  // aa.apply(this,[name]);
  let r=aa.bind(this,"uuuuuuuuuuuuuuuuuuuu");
  // r("iiiiiiiiiii");
  r();
  this.age=age;
}
let objB=new bb("loiii",23);
console.log(objB);